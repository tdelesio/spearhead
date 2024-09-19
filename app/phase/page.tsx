"use client"

import { useSearchParams } from "next/navigation";
import { getAbilityForRound, getAttacksForRound, Unit, Units } from "../units";
import { BattleTrait, Enhancement, Factions, RegimentAbilitiy } from "@/app/factions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phase } from "../phase";
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Separator } from "@radix-ui/react-select";
import React, { useEffect, useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import BattleTacticsCounter from "./battle-tactics-counter";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselFirst,
} from "@/components/ui/carousel"
import { AbilityTable } from "./battle-trait-table"
import VictoryPointTracker from "./victory-points";
import { BattleTacticCard, Deck } from "./battle-tactic-deck";
import { Button } from "@/components/ui/button";
// import { BattleTacticCard, Deck, shuffle } from "./battle-tactic-deck";
// import { BattleTacticCard, Card, Deck, shuffle } from "./battle-tactic-deck";
// import BattleTraitDeck from "./battle-tactic-deck";
// const BattleTraitDeck = dynamic(() => import('./battle-tactic-deck'), {ssr: false})


function getPhase(selectedPhase: string | null): Phase {
  return Phase.phases.find(phase => phase.id === selectedPhase) as Phase;
}

function isCombatPhase(selectedPhase: string | null): boolean {
  return selectedPhase === 'combat' || selectedPhase === 'shooting';
}

function showBattleTrait(selectedPhase: string | null, selectedBattleTrait: BattleTrait): boolean {
  return selectedBattleTrait?.phase === selectedPhase || selectedBattleTrait?.phase === "passive";
}

function showRegimentAbility(selectedPhase: string | null, selectedRegimentAbility: RegimentAbilitiy | null): boolean {
  return selectedRegimentAbility?.phase === selectedPhase || selectedRegimentAbility?.phase === "passive" || ((selectedPhase === "combat" || selectedPhase === "shooting") && selectedRegimentAbility?.phase === 'anycombat');
}

function showEnhancement(selectedPhase: string | null, selectedEnhancement: Enhancement | null): boolean {
  return selectedEnhancement?.phase === selectedPhase; //|| selectedEnhancement?.phase === "passive";
}

function showEnhancementOnCombatPhase(general: boolean | false, selectedEnhancement: Enhancement | null): boolean {
  return general && (selectedEnhancement?.phase === "passive"  || selectedEnhancement?.phase === "combat" || selectedEnhancement?.phase === "shooting")
}

const shuffle = (array: BattleTacticCard[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function StartOfRoundPage() {

  //Scroll to top of page when the page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [round, setRound] = useState(1)
  const [showDonateModal, setShowDonateModal] = useState(false)

  const params = useSearchParams();
  const selectedFaction = params.get('faction');
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

  const factionUnits = Units.factions.find(faction => faction.id === selectedFaction);

  const [usedAbilities, setUsedAbilities] = useState<Set<string>>(new Set())

  const [deck, setDeck] = useState<BattleTacticCard[]>([]);
  const [hand, setHand] = useState<BattleTacticCard[]>([]);

  //Link to return to home page
  function Home() {
    return (
      <Link className="text-white"
        href={{
          pathname: '/',

        }}
      >
        Home
      </Link>
    )
  }

  //Mark card as used visuabilly for cards that can only be used once per battle
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

  //Remove card from hand when the card is clicked
  const handleBattleTraitCarClick = (index: number) => {
    setHand(prevHand => {
      const newHand = [...prevHand];
      newHand.splice(index, 1);

      return newHand;
    });
  };

  //Button to draw cards to 3 when on the start phase.  
  const nextRoundClick = () => {
    //deal cards.  Only deal if hand is not 3
    if (hand.length < 3 && deck.length > 0) {
      const newCards = deck.slice(0, 3 - hand.length);
      setHand([...hand, ...newCards]);
      setDeck(deck.slice(3 - hand.length));

      
    }
  };

  const handleRoundIncrement = () => {
    if (round < 4) {
      setRound(round + 1)
    } else {
      setShowDonateModal(true)
    }
  }

  //Logiic initially shufftle and draw cards to 3.  Also checks to make sure it only happens once.
  const initializedRef = useRef(false);
  useEffect(() => {

    if (!initializedRef.current) {
      const shuffledDeck = shuffle([...Deck.cards]);
      setDeck(shuffledDeck);
      setHand(shuffledDeck.splice(0, 3));

      initializedRef.current = true;
    }
  }, []);


  //Start of HTML
  return (

<div className=" mx-auto ">
    <Carousel className="w-full relative">
      


      <CarouselContent>


        {Phase.phases.map(selectedPhase => (
          <CarouselItem key={selectedPhase.id} className={`${selectedPhase?.bgcolor} text-white min-h-screen w-full p-4 sm:p-6 lg:p-8`}>

<section className="w-full  mx-auto">
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-xl font-semibold">{selectedPhase?.name}</h1>
    Round: {round}
    <div className="flex items-center space-x-2">
      
      <CarouselPrevious />
      <Home />
      <CarouselNext />
    </div>
  </div>
</section>
            
<Dialog open={showDonateModal} onOpenChange={setShowDonateModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank you for playing!</DialogTitle>
            <DialogDescription>
              You have completed all 4 rounds. Would you like to support our project?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
          <Button asChild>
              <Link href="https://agesofsigmar.com" rel="noopener noreferrer">
                Play Again
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://patreon.com/Agesofsigmar" target="_blank" rel="noopener noreferrer">
                Donate Now
              </Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


{selectedPhase.id === 'end' && (
  <CarouselFirst 
    onClick={() => {
      handleRoundIncrement()
      nextRoundClick()
    }} 
    className="cursor-pointer hover:bg-gray-200"
  />
)}
            
            <div className="flex space-x-2"/>

            <div className="space-y-6 p-6">

              {/* End, Show points */}
              {selectedPhase.id === 'end' && (
                <VictoryPointTracker />
              )}

              {/* Start, draw cards to 3 
 {selectedPhase.id === 'start' && hand.length< 3 && ( 
  <div></div>
 )}
  */}


              {/* Traits, Abilities, and Enhancements */}

              {selectedBattleTrait && showBattleTrait(selectedPhase.id, selectedBattleTrait) && renderCard(faction?.id || '', selectedBattleTrait, "Battle Trait", usedAbilities, handleCardClick)}

              {selectedBattleTrait?.special === "counter" && selectedPhase.id === "combat" && (<BattleTacticsCounter selectedFaction={faction?.id || ''} />)}

              {selectedRegimentAbility && showRegimentAbility(selectedPhase.id, selectedRegimentAbility) && renderCard(faction?.id || '', selectedRegimentAbility, "Regiment Ability", usedAbilities, handleCardClick)}
              {selectedEnhancement && showEnhancement(selectedPhase.id, selectedEnhancement) && renderCard(faction?.id || '', selectedEnhancement, "Enhancement", usedAbilities, handleCardClick)}

              {/* Movement */}
              {selectedPhase.id === 'movement' && (
                <section className="w-full  mx-auto">
                  <h2 className="text-xl font-semibold mb-4">Movement</h2>
                  <div className="space-y-4">
                    {factionUnits?.units?.map((unit) => (
                      <section className="w-full  mx-auto" key={unit.id}>
                      <Card key={unit.id} className="bg-white text-black  mx-auto w-full overflow-hidden">
                        <CardHeader>
                          <CardTitle>{unit.name}</CardTitle>
                          <CardDescription>Movement: {unit.move}&quot; {unit.fly && (" (Fly)")}</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <div className="space-y-4">
                        {factionUnits?.units.find(u => u.id === unit.id)
                          ? getAbilityForRound(unit as Unit, selectedPhase?.id || '').map(ability =>
                            renderAbilityCard(unit as Unit, ability, usedAbilities, handleCardClick)
                          )
                          : null
                        }
                      </div>
                        <section className="pt-2">
                        {unit.keywords.map((keyword, index) => (<span key={index}>({keyword}) </span>))}
                        </section>
                        </CardContent>
                      </Card>

                  
                      
                      </section>
                    ))}
                  </div>
                </section>
              )}

              {/* Non-Combat Phase */}
              {!isCombatPhase(selectedPhase.id) && (
                <section className="w-full  mx-auto">
                  <h2 className="text-xl font-semibold mb-2">Phase Abilities</h2>

                  {factionUnits?.units?.map((unit) => (
                    <div className="space-y-4 pb-4" key={unit.id}>

                      {factionUnits?.units.find(u => u.id === unit.id)
                        ? getAbilityForRound(unit as Unit, selectedPhase?.id || '').map(ability =>
                          renderAbilityCard(unit as Unit, ability, usedAbilities, handleCardClick)
                        )
                        : null
                      }
                    </div>
                  ))}
                </section>
              )}

              {/* Combat Phase? */}
              {isCombatPhase(selectedPhase.id) && (
                <section className="w-full  mx-auto">
                  <h2 className="text-xl font-semibold mb-4">Attacks</h2>
                  <div className="space-y-4">
                    {factionUnits?.units?.map((unit) => (
                      <Card key={unit.id} className="bg-white text-black w-full  overflow-hidden">
                        <CardHeader>
                          <CardTitle>{unit.name}</CardTitle>
                          <CardDescription className="border-b-2 border-gray-300 flex justify-between py-2"><span>Health: {unit.health}</span> <span>Save: {unit.save}+</span> <span>Ward: {unit.ward}+</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                        
                        {/* Display Attacks for the round */}
                            {getAttacksForRound(unit as Unit, selectedPhase.id || '').map((attr) => (
                              <div key={attr.id} className="grid grid-cols-2 gap-2 text-sm">
                                <div className="border-gray-300 pt-5">Name</div><div className="border-gray-300 pt-5">{attr.name}</div>
                                {selectedPhase.id === 'shooting' && (
                                  <>
                                    <div>Range</div><div>{attr.range}</div>
                                  </>
                                )}
                                <div className="border-b-2">Attacks</div><div className="border-b-2">{attr.attacks}</div>
                                <div className="border-b-2">Hit</div><div className="border-b-2">{attr.hit}+</div>
                                <div className="border-b-2">Wound</div><div className="border-b-2">{attr.wound}+</div>
                                <div className="border-b-2">Rend</div><div className="border-b-2">{attr.rend}</div>
                                <div className="border-b-2">Damage</div><div className="border-b-2">{attr.damage}</div>
                                <div className="border-b-4 border-red-300">Ability</div><div className="border-b-4  border-red-300">{attr.ability}</div>

                              </div>
                            ))}

                            {/* Show abilities for unit for round*/}
                            <section className="w-full  mx-auto pt-2">
                              <div className="space-y-4">
                                {factionUnits?.units.find(u => u.id === unit.id)
                                  ? getAbilityForRound(unit as Unit, selectedPhase?.id || '').map(ability =>
                                    renderAbilityCard(unit as Unit, ability, usedAbilities, handleCardClick)
                                  )
                                  : null
                                }
                              </div>

                              {/* Show passive abilities*/}
                              <div className="space-y-4">
                                {factionUnits?.units.find(u => u.id === unit.id)
                                  ? getAbilityForRound(unit as Unit, "passive" || '').map(ability =>
                                    renderAbilityCard(unit as Unit, ability, usedAbilities, handleCardClick)
                                  )
                                  : null
                                }
                              </div>
                            </section>

                            <section className="w-full mx-auto pt-2">

                            {/* Display Enhancements for General*/}
                            {selectedEnhancement && showEnhancementOnCombatPhase(unit.general, selectedEnhancement) && renderCard(faction?.id || '', selectedEnhancement, "Enhancement", usedAbilities, handleCardClick)}

                            </section>
                          
                            <section className="pt-2">
                        {unit.keywords.map((keyword, index) => (<span key={index}>({keyword}) </span>))}
                        </section>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* Cards */}
              <section className="w-full  mx-auto">
                <h2 className="text-xl font-semibold mb-2">Battle Tactic Cards</h2>
                <div>
                  {hand.map((card, index) => (
                    <React.Fragment key={card.id}>
                      {renderBattleTacticDeckCard(card, () => handleBattleTraitCarClick(index))}
                    </React.Fragment>
                  ))}
                </div>
              </section>
              {/* Passive Abilities */}
              {/* <section className="w-full  mx-auto">
                <h2 className="text-xl font-semibold mb-2">Passive Abilities</h2>

                <div className="space-y-4">
                  {factionUnits?.units?.flatMap(unit =>
                    unit.Passive.abilities.map(ability =>
                      renderAbilityCard(unit as Unit, ability, usedAbilities, handleCardClick)
                    )
                  )}
                </div>
              </section> */}
            </div>

          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </div>
  );


}

function renderBattleTacticDeckCard(card: BattleTacticCard, onClick: () => void) {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full max-w-md  overflow-hidden mb-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>{card.name}</AccordionTrigger>
          <AccordionContent>
            <Card className="w-full  mx-auto cursor-pointer overflow-hidden" onClick={onClick}>
              <CardHeader>
                <h3 className="text-lg font-semibold">Battle Tactic Objective</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {card.battleTacticObjective}
                <Separator className="my-4" />
                <h3 className="text-lg font-semibold">{card.command.name}</h3>
                <span className="font-medium">Declare:</span> {card.command.usedBy}
                <Separator />
                <span className="font-medium">Effect:</span> {card.command.effect}
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>



    </div>
  );
}

function renderCard(faction: string, item: any, title: string, usedAbilities: Set<string>, handleCardClick: (id: string, once: boolean) => void) {
  const isUsed = usedAbilities.has(item?.id || '');
  let showTable = false;


  if (item.special === "table") {
    showTable = item.special;
  }



  if (showTable) {

    
    return <AbilityTable passedFaction={faction} description={item.effect} />
  } 



  return (

    <Card
      key={item?.id}
      className={`relative overflow-hidden transition-all duration-300 ease-in-out w-full  overflow-hidden mx-auto
        ${isUsed ? 'bg-gray-300 dark:bg-gray-800 ' : 'bg-white text-black cursor-pointer hover:shadow-md '}`}
      onClick={() => handleCardClick(item?.id || '', item?.once || false)}
    >
      {/* {isUsed && (
        <>
          <div className="absolute inset-0 bg-gray-500 opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="h-[1px] w-full bg-gray-600 dark:bg-gray-400 rotate-45 transform origin-center " />
          </div>
        </>
      )} */}
      <div className={`relative ${isUsed ? 'opacity-50' : ''}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent >
          <h3 className="text-sm font-semibold">{item?.name} {item?.once ? "(Once Per Battle)" : ""}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{item?.effect}</p>
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

function renderAbilityCard(unit: Unit, ability: any, usedAbilities: Set<string>, handleCardClick: (id: string, once: boolean) => void) {
  const isUsed = usedAbilities.has(unit.id);
  return (
    <Card
      key={`${unit.id}-${ability.id}`}
      className={`relative cursor-pointer transition-all duration-300 ease-in-out w-full  overflow-hidden mx-auto
        ${isUsed ? 'bg-gray-300 dark:bg-gray-800 saturate-0' : 'bg-white text-black hover:shadow-md'}
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