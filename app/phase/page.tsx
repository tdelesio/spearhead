"use client"

import { useSearchParams } from "next/navigation";
import { Ability, getAttacksForRound, Unit, Units } from "../units";
import { BattleTrait, battleTraitSpecials, Enhancement, Faction, Factions, onces, RegimentAbilitiy } from "@/app/factions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAbilityForRound, Phase, phases } from "../phase";
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Separator } from "@radix-ui/react-select";
import React, { useEffect, useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import BattleTacticsCounter from "./special-battle-tactics/counter";

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
import { AbilityTable } from "./special-battle-tactics/table"
import VictoryPointTracker from "./victory-points";
import { BattleTacticCard, Deck } from "./battle-tactic-deck";
import { Button } from "@/components/ui/button";
import { multiples } from "./special-battle-tactics/multiple";
import { log } from "console";
import { Home } from "../navigation";
import DialogCommandAbilities from "./special-battle-tactics/dialog";
import { isCombatPhase, showAbility, showEnhancement, showEnhancementOnCombatPhase } from "./utils";




//Primary Method *************
export default function StartOfRoundPage() {

  //Scroll to top of page when the page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [round, setRound] = useState(1)
  const [showDonateModal, setShowDonateModal] = useState(false)



  const params = useSearchParams();
  const passedFaction = params.get('faction') || '0';
  const passedUseCards = params.get('usecards') || true;
  const selectedFactionId = parseInt(passedFaction);
  const usecards = (passedUseCards === 'true')

  const faction = Factions.factions.find(faction => faction.id === selectedFactionId) as Faction;

  const initialBattleTrait = params.get('battleTraits');
  const battleTraits = faction?.battleTraits || [];
  const selectedBattleTrait = battleTraits.find(trait => trait.id === initialBattleTrait) as BattleTrait;

  const initialRegimentAbility = params.get('regimentAbilities');
  const regimentAbilities = faction?.regimentAbilities || [];
  const selectedRegimentAbility = regimentAbilities.find(ability => ability.id === initialRegimentAbility) as RegimentAbilitiy;

  const initialEnhancement = params.get('enhancements');
  const enhancements = faction?.enhancements || [];
  const selectedEnhancement = enhancements.find(enhancement => enhancement.id === initialEnhancement) as Enhancement;

  const factionUnits = Units.factions.find(faction => faction.id === selectedFactionId);

  const [usedAbilities, setUsedAbilities] = useState<Set<string>>(new Set())

  const [deck, setDeck] = useState<BattleTacticCard[]>([]);
  const [hand, setHand] = useState<BattleTacticCard[]>([]);

  // function showFactionDialog(selectedPhase: Phase, selectedBattleTrait: BattleTrait): boolean {
   
  //    regimentAbilities
  //   }
  // }

  /** FUNCTIONS TO HANDLE ACTIONS **/

  //Mark card as used visuabilly for cards that can only be used once per battle
  const handleAbilityClick = (unitId: string, once: boolean) => {
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
  const handleCardClick = (index: number) => {
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

  const [selectedAbilities, setSelectedAbilities] = useState<Ability[]>([]);

  const handleAbilitiesSubmit = (submittedAbilities: Ability[]) => {
    setSelectedAbilities(submittedAbilities);
  };

  // const handleAbilitiesSubmit = (selectedAbilities: Ability[]) => {
  //   // console.log('Selected abilities:', selectedAbilities);
  //   // Do something with the selected abilities
  // };
  /*********************************/

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

  //Function to handle shuffling of the Battle Tactic Card Deck
  const shuffle = (array: BattleTacticCard[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  /** RENDER CARDS **/

  //Logic to Render the Battle Trait Cards.  It witll either be a Table, Multiple, or Standard.
  const renderBattleTraitCard = (factionId: number, bt: BattleTrait, phase: Phase) => {
    //show battle traits when it is a table
    if (bt.special === battleTraitSpecials.table) {
      return <AbilityTable passedFaction={factionId} description={bt.effect} />
    }
    //show multiple battle traits.  This should be nested hence the extra logic here.
    else if (bt.special === battleTraitSpecials.multiple) {
      const factionAbilities = multiples.factions.find(f => f.faction === factionId)?.abilities || []

      return (
        <div className="space-y-4">

          <Card
            key={bt?.id}
            className={`relative overflow-hidden transition-all duration-300 ease-in-out w-full mx-auto bg-white text-black cursor-pointer hover:shadow-md`}
          >
            <div className={`relative `}>
              <CardHeader>
                <CardTitle>{bt.name} </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs pb-2">{bt.effect}</p>


                {factionAbilities.map((ability) =>

                  // ((phase.id === ability?.phase || ability?.phase === phases.passive || showCombat(phase, ability)) && 
                  showAbility(phase, ability) &&
                  (
                    <React.Fragment key={ability?.id}>
                      {renderAbilityCard(ability)}
                    </React.Fragment>
                  )
                  //)
                )}
              </CardContent>
            </div>

          </Card>
        </div>
      )

    }
    //show the rest of the none
    else {
      return renderAbilityCard(bt)
    }
  }


  // Logic to render the Phase Card
  const renderPhaseCard = (phase: Phase) => {


    return (
      <section className="w-full  mx-auto">
        <h2 className="text-xl font-semibold mb-4">{phase.name}</h2>
        <div className="space-y-4"></div>
        {factionUnits?.units?.map((unit) => (
          renderUnitCard(phase, unit)
        ))}
      </section>
    )
  }


  const renderUnitCard = (phase: Phase, unit: any) => {

    return (

      <section className="w-full  mx-auto" key={unit.id}>

        <div className="space-y-4 pb-2">

          <Card key={unit.id} className="bg-white text-black w-full  overflow-hidden">
            <CardHeader>
              <CardTitle>{unit.name}  <section className="pt-2">
                {unit.keywords.map((keyword: string, index: number) => (<span key={index}>({keyword}) </span>))}
              </section></CardTitle>
              <CardDescription className="border-b-2 border-gray-300 flex justify-between py-2"><span>Health: {unit.health}</span> <span>Save: {unit.save}+</span> <span>Ward: {unit.ward}+</span></CardDescription>
            </CardHeader>



            {/* Combat Round */}
            {isCombatPhase(phase) && (
              <CardContent>
                {getAttacksForRound(unit as Unit, phase.id || 0).map((attr) => (
                  <div key={attr.id} className="grid grid-cols-2 gap-2 text-sm">
                    <div className="border-gray-300 pt-5">Name</div><div className="border-gray-300 pt-5">{attr.name}</div>
                    {phase.id === phases.shooting && (
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

                <section className="w-full mx-auto pt-2">
                  {/* Display Enhancements for General*/}
                  {selectedEnhancement && showEnhancementOnCombatPhase(unit.general, phase, selectedEnhancement) && renderAbilityCard(selectedEnhancement)}
                </section>

                {/* Show Round abilities*/}
                <div className="space-y-4">
                  {factionUnits?.units.find(u => u.id === unit.id)
                    ? getAbilityForRound(unit as Unit, phase.id).map(ability =>
                      renderAbilityCard(ability)
                    )
                    : null
                  }
                </div>

                {/* Show passive abilities*/}
                {<div className="space-y-4">
                  {factionUnits?.units.find(u => u.id === unit.id)
                    ? getAbilityForRound(unit as Unit, phases.passive).map(ability =>
                      renderAbilityCard(ability)
                    )
                    : null
                  }
                </div>}

              </CardContent>
            )
            }

            {/* Non-Combat Round */}
            {!isCombatPhase(phase) && phase.id != phases.movement && (
              <CardContent>

                <div className="space-y-4 pb-4" key={unit.id}>
                  {
                    getAbilityForRound(unit as Unit, phase.id).map(ability =>
                      renderAbilityCard(ability)

                    )}
                </div>

              </CardContent>
            )}

            {/* Movement Round */}
            {phase.id === phases.movement && (
              <CardContent>
                Movement: {unit.move}&quot; {unit.fly && (" (Fly)")}
              </CardContent>
            )
            }


          </Card>
        </div>
      </section>
    )
  }


 

  const renderAbilityCard = (item: any, skipCommands: boolean = true) => {
    const isUsed = usedAbilities.has(item?.id || '')

      if (item.tags && skipCommands) {
      return(null);
      }
      

    return (
      <div className="pb-2" key={item.id}>
        <Card
          key={item?.id}
          className={`relative overflow-hidden transition-all duration-300 ease-in-out w-full mx-auto ${item?.once === onces.turn || item?.once === onces.phase ? 'border-rose-600 border-4' : ''}
          ${isUsed ? 'bg-gray-300 dark:bg-gray-800' : 'bg-white text-black cursor-pointer hover:shadow-md'}`}
          onClick={() => handleAbilityClick(item?.id || '', item?.once === onces.battle || false)}
        >
          <div className={`relative ${isUsed ? 'opacity-50' : ''}`}>
            <CardHeader>
              <CardTitle>{item.name} {item?.once === onces.battle ? "(Once Per Battle)" : ""} {item?.phase === phases.passive ? "(Passive)" : ""} {item?.once === onces.turn ? "(Once per Turn)" : ""}  {item?.once === onces.phase ? "(Once per Phase)" : ""}</CardTitle>
            </CardHeader>
            <CardContent>
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
      </div>
    )
  }



  /********************************** */



    

  //Start of HTML
  return (

    <div className=" mx-auto ">
      <Carousel className="w-full relative">



        <CarouselContent>


          {Phase.phases.map(selectedPhase => (
            <CarouselItem key={selectedPhase.id} className={`${selectedPhase?.bgcolor} text-white min-h-screen w-full p-4 sm:p-6 lg:p-8`}>

              {/* Header:  Phase Name, Round counter, and navigation to advance phase */}
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

              


              {/* Dialog box that will show on round 4 for donations */}
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
                      <Link href="https://account.venmo.com/u/Tim-Delesio" target="_blank" rel="noopener noreferrer">
                        Donate Now
                      </Link>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* Next Round Button and VP counter that should only be shwon on End Phase */}
              {selectedPhase.id === phases.end && (

                <div>
                  <VictoryPointTracker />
                  <CarouselFirst
                    onClick={() => {
                      handleRoundIncrement()
                      nextRoundClick()
                    }}
                    className="cursor-pointer hover:bg-gray-200"
                  />
                </div>
              )}

              <div className="flex space-x-2" />

              <div className="space-y-6 p-6">




                {/* Battle Traits */}
                {
                /* {selectedBattleTrait && showBattleTrait(selectedPhase.id, selectedBattleTrait) && renderCard(faction?.id || 0, selectedBattleTrait, "Battle Trait", usedAbilities, handleCardClick)} 
                {selectedBattleTrait?.special === battleTraitSpecials.counter && selectedPhase.id === phases.combat && (<BattleTacticsCounter selectedFaction={faction?.id || 0} />)}
                */}
                {/* {selectedBattleTrait && showBattleTrait(selectedPhase.id, selectedBattleTrait) && ( */}
                {selectedBattleTrait && showAbility(selectedPhase, selectedBattleTrait) && (
                  <section className="w-full mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Battle Traits</h2>
                    <div className="space-y-4">
                      {renderBattleTraitCard(faction?.id || 0, selectedBattleTrait, selectedPhase)}
                    </div>
                  </section>
                )}

                {/* Regiment Abilities */}
                {/* {selectedRegimentAbility && showRegimentAbility(selectedPhase.id, selectedRegimentAbility) && ( */}
                {selectedRegimentAbility && showAbility(selectedPhase, selectedRegimentAbility) && (
                  <section className="w-full mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Regiment Ability</h2>
                    <div className="space-y-4">
                      {renderAbilityCard(selectedRegimentAbility)}
                    </div>
                  </section>
                )}

                {/* Enhancements */}
                {selectedEnhancement && showEnhancement(selectedPhase, selectedEnhancement) && (
                  <section className="w-full mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Enhancements</h2>
                    <div className="space-y-4">
                      {renderAbilityCard(selectedEnhancement)}
                    </div>
                  </section>
                )}

                

                {selectedAbilities.length > 0 && (
                  <section className="w-full mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Selected Abilities</h2>
                    <div className="space-y-4">
                    {selectedAbilities.map(ability => ability.phase === selectedPhase.id ? renderAbilityCard(ability, false): null)}
                    </div>
                  </section>

              
              )}

              {renderPhaseCard(selectedPhase)}

                {/* Cards */}
                {usecards && (
                  <section className="w-full  mx-auto">
                    <h2 className="text-xl font-semibold mb-2">Battle Tactic Cards</h2>
                    <div>
                      {hand.map((card, index) => (
                        <React.Fragment key={card.id}>
                          {renderBattleTacticDeckCard(card, () => handleCardClick(index))}
                        </React.Fragment>
                      ))}
                    </div>
                  </section>
                )}
              </div>
              <DialogCommandAbilities
  selectedFactionId={selectedFactionId}
  selectedPhase={selectedPhase}
  selectedBattleTrait={selectedBattleTrait}
  selectedRegimentAbility={selectedRegimentAbility}
  onSubmit={handleAbilitiesSubmit}
/>


              
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
