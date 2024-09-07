"use client"
import { useSearchParams } from "next/navigation";
import { getAbilityForRound, getAttacksForRound, Units } from "../units";
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
  if (selectedBattleTrait?.phase === selectedPhase) {
    showBattleTrait = true;
  }


  const initialRegimentAbility = params.get('regimentAbilities');
  const regimentAbilities = faction?.regimentAbilities || [];
  const selectedRegimentAbility = regimentAbilities.find(ability => ability.id === initialRegimentAbility);
  let showRegimentAbility = false;
  if (selectedRegimentAbility?.phase === selectedPhase) {
    showRegimentAbility = true;
  }

  const initialEnhancment = params.get('enhancements');
  const enhancments = faction?.enhancements || [];
  const selectedEnhancment = enhancments.find(enhancment => enhancment.id === initialEnhancment);
  let showEnhancment = false;

  if (selectedEnhancment?.phase == selectedPhase || selectedEnhancment?.phase == "passive") {
    showEnhancment = true;
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

  const showAttributes = selectedPhase === 'combat' || selectedPhase === 'shooting'



  return (
    <div>

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
          {showEnhancment && (
            <Card
              key={selectedEnhancment?.id}
              className={`relative overflow-hidden transition-all duration-300 ease-in-out
              ${usedAbilities.has(selectedEnhancment?.id || '')
                  ? 'bg-gray-300 dark:bg-gray-800 cursor-not-allowed'
                  : 'cursor-pointer hover:shadow-md'}`}
              onClick={() => handleCardClick(selectedEnhancment?.id || '', selectedEnhancment?.once || false)}
            >
              {usedAbilities.has(selectedEnhancment?.id || '') && (
                <div className="absolute inset-0 bg-gray-500 opacity-20" />
              )}
              {usedAbilities.has(selectedEnhancment?.id || '') && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[1px] w-full bg-gray-600 dark:bg-gray-400 rotate-45 transform origin-center" />
                </div>
              )}
              <div className={`relative ${usedAbilities.has(selectedEnhancment?.id || '') ? 'opacity-50' : ''}`}>
                <CardHeader>
                  <CardTitle>Enhancment</CardTitle>
                </CardHeader>
                <CardContent>

                  <div key={selectedEnhancment?.id} className="mb-2">
                    <h3 className="text-sm font-semibold">{selectedEnhancment?.name}  {selectedEnhancment?.once ? "(Once Per Battle)" : ""}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{selectedEnhancment?.effect}</p>

                  </div>

                </CardContent>
              </div>
            </Card>
          )}
        </div>

        {selectedPhase === 'movement' ? (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Movement</h2>
            <div className="w-full space-y-4 p-4">
              {factionUnits?.units.map((unit) => (
                <Card key={unit.id}>
                  <CardHeader>
                    <CardTitle>{unit.name}</CardTitle>
                    <CardDescription>Movement: {unit.move}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        ) : null}

        <div className="md:w-1/2 p-6" />
        {showAttributes ? (
          <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-5">Attacks</h1>
            <div className="space-y-4">
              {factionUnits?.units.map((unit) => (
                <Card key={unit.id}>
                  <CardHeader>
                    <CardTitle>{unit.name} </CardTitle>
                    <CardDescription>Health: {unit.health} Save: {unit.save} Ward: {unit.ward}</CardDescription>
                  </CardHeader>
                  {getAttacksForRound(unit, selectedPhase || '').length > 0 ? (
                    <CardContent>
                      <div className="grid grid-cols-9 gap-2 text-sm font-medium">
                        <div>Name</div>
                        {selectedPhase === 'shooting' ? (
                          <div>Range</div>
                        ) : null}
                        <div>Attacks</div>
                        <div>Hit</div>
                        <div>Wound</div>
                        <div>Rend</div>
                        <div>Damage</div>
                        <div>Ability</div>
                      </div>
                      {getAttacksForRound(unit, selectedPhase || '').map((attr) => (
                        <div key={attr.id} className="grid grid-cols-9 gap-2 text-sm mt-2">
                          <div>{attr.name}</div>
                          {selectedPhase === 'shooting' ? (
                            <div>{attr.range}"</div>
                          ) : null}
                          <div>{attr.attacks}</div>
                          <div>{attr.hit}+</div>
                          <div>{attr.wound}+</div>
                          <div>-{attr.rend}</div>
                          <div>{attr.damage}</div>
                          <div className="truncate" title={attr.ability}>
                            {attr.ability}
                          </div>
                        </div>
                      ))}
                    </CardContent>

                  ) : null}
                </Card>
              ))}
            </div>

          </div>
        ) : null}
     




      <div className="md:w-1/2 p-6" />
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


      <div className="md:w-1/2 p-6" />
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

      <div className="md:w-1/2 p-6" />



      <div className="md:w-1/2 p-6 " />

</div>






    </div>
  );
}

export default StartOfRoundPage;