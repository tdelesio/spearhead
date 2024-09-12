"use client"

import { useSearchParams } from "next/navigation";
import { getAbilityForRound, getAttacksForRound, Unit, Units } from "../units";
import { BattleTrait, Enhancement, Factions, RegimentAbilitiy } from "@/app/factions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { Phase } from "../phase";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AbilityTable } from "./batteTraitTable";

function getPhase(selectedPhase: string | null) : Phase {
  return Phase.phases.find(phase => phase.id === selectedPhase) as Phase;
}

function showAttributes(selectedPhase: string | null) : boolean {
  return selectedPhase === 'combat' || selectedPhase === 'shooting';
}

function showBattleTrait(selectedPhase: string | null, selectedBattleTrait: BattleTrait) : boolean {
  return selectedBattleTrait?.phase === selectedPhase  || selectedBattleTrait?.phase === "passive";
}

function showRegimentAbility(selectedPhase: string | null, selectedRegimentAbility: RegimentAbilitiy | null) : boolean {
  return selectedRegimentAbility?.phase === selectedPhase || selectedRegimentAbility?.phase === "passive";
}

function showEnhancement(selectedPhase: string | null, selectedEnhancement: Enhancement | null) : boolean {
  return selectedEnhancement?.phase === selectedPhase || selectedEnhancement?.phase === "passive";
}

export default function StartOfRoundPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useSearchParams();
  const selectedFaction = params.get('faction');
  // const selectedPhase = params.get('phase');
  
  const faction = Factions.factions.find(faction => faction.id === selectedFaction);

  const initialBattleTrait = params.get('battleTraits');
  const battleTraits = faction?.battleTraits || [];
  const selectedBattleTrait = battleTraits.find(trait => trait.id === initialBattleTrait);
  
  const initialRegimentAbility = params.get('regimentAbilities');
  const regimentAbilities = faction?.regimentAbilities || [];
  const selectedRegimentAbility = regimentAbilities.find(ability => ability.id === initialRegimentAbility);
  

  const initialEnhancement = params.get('enhancements');
  const enhancements = faction?.enhancements || [];
  const selectedEnhancement = enhancements.find(enhancement => enhancement.id === initialEnhancement);
  

  // const phase = Phase.phases.find(phase => phase.id === selectedPhase);
  // const showBattleTrait = selectedBattleTrait?.phase === selectedPhase;
  // const showRegimentAbility = selectedRegimentAbility?.phase === selectedPhase;
  // const showEnhancement = selectedEnhancement?.phase === selectedPhase || selectedEnhancement?.phase === "passive";
  // const showAttributes = selectedPhase === 'combat' || selectedPhase === 'shooting'

  const factionUnits = Units.factions.find(faction => faction.id === selectedFaction);

  const [usedAbilities, setUsedAbilities] = useState<Set<string>>(new Set())

  const handleCardClick = (unitId: string, once: boolean) => {
    if (!once) return;
    setUsedAbilities(prev => {
      const newSet = new Set(prev)
      if (newSet.has(unitId)) {
        newSet.delete(unitId)
      } else {
        newSet.add(unitId)
      }
      return newSet
    })
  }

  

  return (

<Carousel>
 <div className="absolute top-10 left-80 z-10  ">
        <CarouselPrevious className="h-8 w-8 rounded-full" />
        <CarouselNext className="h-8 w-8 rounded-full" />
      </div> 


<CarouselContent>

  
  {Phase.phases.map(selectedPhase => (
<CarouselItem key={selectedPhase.id} className={`${selectedPhase?.bgcolor} text-white min-h-screen p-4`}>

    <h1 className="text-xl font-semibold mb-2">{selectedPhase?.name} Abilities </h1>
    <div className="flex space-x-2">
               
              </div>



      <div className="space-y-6 p-6">
        
        {/* Traits, Abilities, and Enhancements */}
        
          {selectedBattleTrait && showBattleTrait(selectedPhase.id, selectedBattleTrait) && renderCard(faction?.id || '',selectedBattleTrait, "Battle Trait", usedAbilities, handleCardClick)}
          {selectedRegimentAbility && showRegimentAbility(selectedPhase.id, selectedRegimentAbility) && renderCard(faction?.id || '',selectedRegimentAbility, "Regiment Ability", usedAbilities, handleCardClick)}
          {selectedEnhancement && showEnhancement(selectedPhase.id, selectedEnhancement) && renderCard(faction?.id || '',selectedEnhancement, "Enhancement", usedAbilities, handleCardClick)}
        
        {/* Movement */}
        {selectedPhase.id === 'movement' && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Movement</h2>
            <div className="space-y-4">
              {factionUnits?.units?.map((unit) => (
                <Card key={unit.id} className="bg-white text-black max-w-md">
                  <CardHeader>
                    <CardTitle>{unit.name}</CardTitle>
                    <CardDescription>Movement: {unit.move}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Attacks */}
        {showAttributes(selectedPhase.id) && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Attacks</h2>
            <div className="space-y-4">
              {factionUnits?.units?.map((unit) => (
                <Card key={unit.id} className="bg-white text-black w-full max-w-md overflow-hidden">
                  <CardHeader>
                    <CardTitle>{unit.name}</CardTitle>
                    <CardDescription className="border-b-2 border-gray-300">Health: {unit.health} Save: {unit.save} Ward: {unit.ward}</CardDescription>
                  </CardHeader>
                  {getAttacksForRound(unit as Unit, selectedPhase.id || '').length > 0 && (
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2 text-sm font-medium mb-2">
                        <div>Attribute</div>
                        <div>Value</div>
                      </div>
                      {getAttacksForRound(unit as Unit, selectedPhase.id || '').map((attr) => (
                        <div key={attr.id} className="grid grid-cols-2 gap-2 text-sm">
                          <div className="border-t-4 border-gray-300 pt-5">Name</div><div className="border-t-4 border-gray-300 pt-5">{attr.name}</div>
                          {selectedPhase.id === 'shooting' && (
                            <>
                              <div>Range</div><div>{attr.range}</div>
                            </>
                          )}
                          <div className="border-b-2">Attacks</div><div className="border-b-2">{attr.attacks}</div>
                          <div className="border-b-2">Hit</div><div className="border-b-2">{attr.hit}</div>
                          <div className="border-b-2">Wound</div><div className="border-b-2">{attr.wound}</div>
                          <div className="border-b-2">Rend</div><div className="border-b-2">{attr.rend}</div>
                          <div className="border-b-2">Damage</div><div className="border-b-2">{attr.damage}</div>
                          <div className="border-b-2">Ability</div><div className="border-b-2 truncate">{attr.ability}</div>
                        
                        </div>
                      ))}
                      {/* Phase Abilities */}
        <section>        
          <div className="space-y-4">
            {factionUnits?.units.find(u => u.id === unit.id) 
              ? getAbilityForRound(unit as Unit, selectedPhase?.id || '').map(ability => 
                  renderAbilityCard(unit as Unit, ability, usedAbilities, handleCardClick)
                )
              : null
            }
          </div>
        </section>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>
        )}

        

        {/* Passive Abilities */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Passive Abilities</h2>
          
          <div className="space-y-4">
            {factionUnits?.units?.flatMap(unit =>
              unit.Passive.abilities.map(ability => 
                renderAbilityCard(unit as Unit, ability, usedAbilities, handleCardClick)
              )
            )}
          </div>
        </section>
      </div>
      
      </CarouselItem>
      ))}
      </CarouselContent>
      </Carousel>
  );
}

function renderCard(faction: string,item: any, title: string, usedAbilities: Set<string>, handleCardClick: (id: string, once: boolean) => void) {
  const isUsed = usedAbilities.has(item?.id || '');
  let showTable = false;
  
  if (item.table) {
    showTable = item.table;
  }





  if (showTable) {
  
  return <AbilityTable passedFaction={faction} />
  }

  return (

    <Card
      key={item?.id}
      className={`relative overflow-hidden transition-all duration-300 ease-in-out
        ${isUsed ? 'bg-gray-300 dark:bg-gray-800 cursor-not-allowed' : 'bg-white text-black cursor-pointer hover:shadow-md w-full max-w-md overflow-hidden'}`}
      onClick={() => handleCardClick(item?.id || '', item?.once || false)}
    >
      {isUsed && (
        <>
          <div className="absolute inset-0 bg-gray-500 opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[1px] w-full bg-gray-600 dark:bg-gray-400 rotate-45 transform origin-center" />
          </div>
        </>
      )}
      <div className={`relative ${isUsed ? 'opacity-50' : ''}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent >
          <h3 className="text-sm font-semibold">{item?.name} {item?.once ? "(Once Per Battle)" : ""}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{item?.effect}</p>
        </CardContent>
      </div>
    </Card>

  );
}

function renderAbilityCard(unit: Unit, ability: any, usedAbilities: Set<string>, handleCardClick: (id: string, once: boolean) => void) {
  const isUsed = usedAbilities.has(unit.id);
  return (
    <Card
      key={`${unit.id}-${ability.id}`}
      className={`relative cursor-pointer transition-all duration-300 ease-in-out
        ${isUsed ? 'bg-gray-300 dark:bg-gray-800 saturate-0' : 'bg-white text-black hover:shadow-md w-full max-w-md overflow-hidden'}
      `}
      onClick={() => handleCardClick(unit.id, ability.once)}
    >
      <div className={`absolute inset-0 bg-gray-900/5 transition-opacity duration-300 ${isUsed ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`relative transition-opacity duration-300 ${isUsed ? 'opacity-50' : 'opacity-100'}`}>
        <CardHeader>
          <CardTitle>{unit.name} -  {ability.name} {ability.once ? <p>(Once Per Battle)</p> : ""}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">{ability.effect}</p>
          {ability.once && (
            <Badge variant="secondary" className="mt-1">
              One-time use
            </Badge>
          )}
        </CardContent>
      </div>
      {isUsed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-gray-500 dark:text-gray-400 opacity-75 rotate-[-20deg]">
            USED
          </span>
        </div>
      )}
    </Card>
  );
}