"use client"
import { useSearchParams } from "next/navigation";
import { getAbilityForRound, Units } from "../units";
import { Factions } from "@/app/factions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Phase } from "../phase";

function StartOfRoundPage() { 
  

  const params = useSearchParams();
  const selectedFaction = params.get('faction');
  const selectedPhase = params.get('phase');
  const phase = Phase.phases.find(phase => phase.id === selectedPhase);
  const faction = Factions.factions.find(faction => faction.id === selectedFaction);

  const initialBattleTrait = params.get('battleTraits');
  const battleTraits = faction?.battleTraits || [];
  const selectedBattleTrait = battleTraits.find(trait => trait.id === initialBattleTrait);
  let showBattleTrait = false;
  if (selectedBattleTrait?.phase === phase) {
    showBattleTrait = true;
  }

  const initialRegimentAbility = params.get('regimentAbilities');
  const regimentAbilities = faction?.regimentAbilities || [];
  const selectedRegimentAbility = regimentAbilities.find(ability => ability.id === initialRegimentAbility);
  let showRegimentAbility = false;
  if (selectedRegimentAbility?.phase === phase) {
    showRegimentAbility = true;
  }

  const initialEnchancment = params.get('enhancements');
  const enchancments = faction?.enchancements || [];
  const selectedEnchancment = enchancments.find(enchancment => enchancment.id === initialEnchancment);
  let showEnchancment = false;
 
  if (selectedEnchancment?.phase == phase) {
    showEnchancment = true;
  }

  const factionUnits = Units.factions.find(faction => faction.id === selectedFaction);

  const [usedAbilities, setUsedAbilities] = useState<Set<string>>(new Set())

  const handleCardClick = (unitId: string, once: boolean) => {
    if (!once)
      return;
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


    <div className={`${phase?.bgcolor} text-white`}>
  <div className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 `}>
    {showBattleTrait && (
        <Card     
            key={selectedBattleTrait?.id} 
            className={`relative overflow-hidden transition-all duration-300 ease-in-out
              ${usedAbilities.has(selectedBattleTrait?.id || '') 
                ? 'bg-gray-300 dark:bg-gray-800 cursor-not-allowed' 
                : 'cursor-pointer hover:shadow-md'}`}
            onClick={() => handleCardClick(selectedBattleTrait?.id || '', selectedBattleTrait?.once || false)}
          >
            {usedAbilities.has(selectedBattleTrait?.id || '') && (
              <div className="absolute inset-0 bg-gray-500 opacity-20" />
            )}
            {usedAbilities.has(selectedBattleTrait?.id || '') && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[1px] w-full bg-gray-600 dark:bg-gray-400 rotate-45 transform origin-center" />
              </div>
            )}
            <div className={`relative ${usedAbilities.has(selectedBattleTrait?.id || '') ? 'opacity-50' : ''}`}>
              <CardHeader>
                <CardTitle>Battle Trait</CardTitle>
              </CardHeader>
              <CardContent>
              
                  <div key={selectedBattleTrait?.id} className="mb-2">
                    <h3 className="text-sm font-semibold">{selectedBattleTrait?.name}  {selectedBattleTrait?.once ? "(Once Per Battle)" : ""}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{selectedBattleTrait?.effect}</p>
                   
                  </div>
               
              </CardContent>
            </div>
          </Card>
        )}
      
        {showRegimentAbility && (
        <Card     
            key={selectedRegimentAbility?.id} 
            className={`relative overflow-hidden transition-all duration-300 ease-in-out
              ${usedAbilities.has(selectedRegimentAbility?.id || '') 
                ? 'bg-gray-300 dark:bg-gray-800 cursor-not-allowed' 
                : 'cursor-pointer hover:shadow-md'}`}
            onClick={() => handleCardClick(selectedRegimentAbility?.id || '', selectedRegimentAbility?.once || false)}
          >
            {usedAbilities.has(selectedRegimentAbility?.id || '') && (
              <div className="absolute inset-0 bg-gray-500 opacity-20" />
            )}
            {usedAbilities.has(selectedRegimentAbility?.id || '') && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[1px] w-full bg-gray-600 dark:bg-gray-400 rotate-45 transform origin-center" />
              </div>
            )}
            <div className={`relative ${usedAbilities.has(selectedRegimentAbility?.id || '') ? 'opacity-50' : ''}`}>
              <CardHeader>
                <CardTitle>Regiment Ability</CardTitle>
              </CardHeader>
              <CardContent>
              
                  <div key={selectedRegimentAbility?.id} className="mb-2">
                    <h3 className="text-sm font-semibold">{selectedRegimentAbility?.name}  {selectedRegimentAbility?.once ? "(Once Per Battle)" : ""}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{selectedRegimentAbility?.effect}</p>
                   
                  </div>
               
              </CardContent>
            </div>
          </Card>
        )}
        {showEnchancment && (
          <Card     
            key={selectedEnchancment?.id} 
            className={`relative overflow-hidden transition-all duration-300 ease-in-out
              ${usedAbilities.has(selectedEnchancment?.id || '') 
                ? 'bg-gray-300 dark:bg-gray-800 cursor-not-allowed' 
                : 'cursor-pointer hover:shadow-md'}`}
            onClick={() => handleCardClick(selectedEnchancment?.id || '', selectedEnchancment?.once || false)}
          >
            {usedAbilities.has(selectedEnchancment?.id || '') && (
              <div className="absolute inset-0 bg-gray-500 opacity-20" />
            )}
            {usedAbilities.has(selectedEnchancment?.id || '') && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[1px] w-full bg-gray-600 dark:bg-gray-400 rotate-45 transform origin-center" />
              </div>
            )}
            <div className={`relative ${usedAbilities.has(selectedEnchancment?.id || '') ? 'opacity-50' : ''}`}>
              <CardHeader>
                <CardTitle>Enchancment</CardTitle>
              </CardHeader>
              <CardContent>
              
                  <div key={selectedEnchancment?.id} className="mb-2">
                    <h3 className="text-sm font-semibold">{selectedEnchancment?.name}  {selectedEnchancment?.once ? "(Once Per Battle)" : ""}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{selectedEnchancment?.effect}</p>
                   
                  </div>
               
              </CardContent>
            </div>
          </Card>
        )}
      </div>


      <div className="md:w-1/2 p-6"/>
      <h2 className="text-2xl font-semibold mb-2">Passive Abilities</h2> <h3>Once per battle items are marked. Click on a card to toggle if you have used that ability this round.</h3>
      <div className="w-full space-y-4 p-4"> 
        {factionUnits?.units.flatMap(unit =>
          unit.Passive.abilities.map(ability => {
            const isUsed = usedAbilities.has(unit.id)  
            return (
              <Card 
                key={unit.id} 
                className={`relative cursor-pointer transition-all duration-300 ease-in-out
                  ${isUsed ? 'bg-gray-300 dark:bg-gray-800 saturate-0' : 'hover:shadow-md'}
                `}
                onClick={() => handleCardClick(unit.id, ability.once)}
              >
                <div className={`absolute inset-0 bg-gray-900/5 transition-opacity duration-300 ${isUsed ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`relative transition-opacity duration-300 ${isUsed ? 'opacity-50' : 'opacity-100'}`}>
                  <CardHeader>
                    <CardTitle>{unit.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                   
                      <div key={ability.id} className="mb-2">
                        <h3 className="text-sm font-semibold">{ability.name} {ability.once ? "(Once Per Battle)" : ""}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{ability.effect}</p>
                        {ability.once && (
                          <Badge variant="secondary" className="mt-1">
                            One-time use
                          </Badge>
                        )}
                      </div>
                    
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
              
            )
          })
        )}
      </div>

      <div className="md:w-1/2 p-6"/>

      {/* Round Abilities */}
   
      <h2 className="text-2xl font-semibold mb-2">{phase?.name} Abilities</h2> <h3>Once per battle items are marked. Click on a card to toggle if you have used that ability this round.</h3>
      <div className="w-full space-y-4 p-4">
        {factionUnits?.units.flatMap(unit =>
         (getAbilityForRound(unit, phase?.id || '')).map(ability => {
            const isUsed = usedAbilities.has(unit.id) 
            return (
              <Card 
                key={unit.id} 
                className={`relative cursor-pointer transition-all duration-300 ease-in-out
                  ${isUsed ? 'bg-gray-300 dark:bg-gray-800 saturate-0' : 'hover:shadow-md'}
                `}
                onClick={() => handleCardClick(unit.id, ability.once)}
              >
                <div className={`absolute inset-0 bg-gray-900/5 transition-opacity duration-300 ${isUsed ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`relative transition-opacity duration-300 ${isUsed ? 'opacity-50' : 'opacity-100'}`}>
                  <CardHeader>
                    <CardTitle>{unit.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                   
                      <div key={ability.id} className="mb-2">
                        <h3 className="text-sm font-semibold">{ability.name} {ability.once ? "(Once Per Battle)" : ""}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{ability.effect}</p>
                        {ability.once && (
                          <Badge variant="secondary" className="mt-1">
                            One-time use
                          </Badge>
                        )}
                      </div>
                    
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
              
            )
          })
        )}
      </div>

      <div className="md:w-1/2 p-6 "/>





      
    
   
  </div>
  );
}

export default StartOfRoundPage;