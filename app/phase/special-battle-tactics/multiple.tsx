import { factions, onces } from "@/app/factions";
import { phases } from "@/app/phase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader } from "@/components/ui/table";

export type Multiple = {
    faction: string;
    label: string;
    abilities: Ability[];
}

type Ability = {
    id: string;
    name: string;
    effect: string;
    once: string;
    phase: string;
}

interface AbilityTableProps {
    passedFaction: number;
    description: string;
}

export const multiples = {
    "factions": [
        {
            "faction": factions.stormcastVigilantBrotherHood,
            "abilities": [
                {
                    "id": "shieldOfAzyr",
                    "name": "Shield of Azyr",
                    "effect": "Pick a friendly Unit.  Unit the start of your next turn, that unit has Ward 5+",
                    "once": onces.battle,
                    "phase": phases.hero,
                },
                {
                    "id": "stormCharge",
                    "name": "Storm Charge",
                    "effect": "Pick a friendly unit that is not in combat, that unit can charge this turn even if a run was used",
                    "once": onces.battle,
                    "phase": phases.charge,
                }

            ]
        },
        {
            "faction": factions.skavenGnawfeastClawPack,
            "abilities": [
                {
                    "id": "theLurkingVerintide",
                    "name": "The Lurking Vermintide",
                    "effect": "Pick an undeployed friendly unit, set them up in the tunnels below.  Units in the tunnels below that have not beed used the Gnawhole Ambush ability by the end of the third battle round are destroyed.",
                    "once": onces.battle,
                    "phase": phases.start,
                },
                {
                    "id": "gnawholeAmbush",
                    "name": "Gnawhole Ambush",
                    "effect": "On movement phase you can move from tunnels and set them up wholly within 6\" of a corner of the battlefield and more than 9\" from all enemy units",
                    "once": onces.none,
                    "phase": phases.movement,
                }

            ]
        },
        {
            "faction": factions.nighthauntSlasherHost,
            "abilities": [
                {
                    "id": "waveOfTerror",
                    "name": "Wave of Terror",
                    "effect": "Pick a friendly unit to use this ability if they charged this phase and the charge roll was 10+, pick an enemy unit within 1\" of it.  That target has Strike-Last this turn.",
                    "once": onces.none,
                    "phase": phases.passive,
                },
                {
                    "id": "ethereal",
                    "name": "Ethereal",
                    "effect": "Ignore all modifiers to save rolls rolls for friendly units (positive or negative).",
                    "once": onces.none,
                    "phase": phases.passive,
                }

            ]
        },
        {
            "faction": factions.maggotkinOfNurgleBleakHost,
            "abilities": [
                {
                    "id": "daemonicSummoning",
                    "name": "Daemonic Summoning",
                    "effect": "Setup up this unit anywhere on the battlefield more than 6\" from all enemy units.",
                    "once": onces.none,
                    "phase": phases.movement,
                },
                {
                    "id": "diseased",
                    "name": "Diseased",
                    "effect": "Each time an attack made by a friendly model scores a critical hit, you recieve 1 disease point, to a maximum of 7.",
                    "once": onces.none,
                    "phase": phases.passive,
                },
                {
                    "id": "nurgleEmbrace",
                    "name": "Nurgle's Embrace",
                    "effect": "Spend any number of your disease points.  For each disease point you spend, pick an enemy unit that is in combat with any of your units and roll a dice.  On a 4+, inflict 1 mortal damage on that unit.  (You can pick the same enemy unit more than once)",
                    "once": onces.none,
                    "phase": phases.end,
                }

            ]
        },
        {
            "faction": factions.flesheaterCourtsCarrionRetainers,
                "abilities": [
                    {
                        "id": "nobleDeeds",
                        "name": "Noble Deeds",
                        "effect": "Each time a friendly HERO uses a FIGHT ability, after its attacks have been resolved, give that HERO a number of noble deed points equal to the number of damage points allocated by that ability.  Each HERO can have a maximum of 6 noble deeds points at any time.",
                        "once": onces.none,
                        "phase": phases.passive,               
                },
                {
                        "id": "feedFrenzy",
                        "name": "Feeding Frenzy",
                        "effect": "Add 1 to attacks characteristic of melee weapons used by friendly units while they are wholly within 12\" of any friendly HEROS that have 6 noble deed points.",
                        "once": onces.none,
                        "phase": phases.passive,
                },
                {
                    "id": "summonLoyalSubjects",
                    "name": "Summon Loyal Subjects",
                    "effect": "Pick a friendly HERO with any noble deed points to use this ability.  Spend any number of that HERO's noble deed points as follows:  Pick a friendly Cryptguard unit within 9\" of the unit and spend 1 noble deed point to return 1 model to the unit.  OR  Pick a friendly Morbheg Knights unit within 9\" of this unit and spend 2 noble deed points to return 1 slain model to that unit.",
                    "once": onces.none,
                    "phase": phases.movement,
            }
        
                ]
            },
            {
                "faction": factions.sonsOfBehematWallsmasherStomp,
                    "abilities": [
                        {
                            "id": "belowingRoar",
                            "name": "Belowing Roar",
                            "effect": "Pick a friendly unit to use this ability, pick an enemy unit in combat with it to be the targget, then roll a dice.  On a 2+, subtract 1 from hit rolls for attacks made by this target unit this phase.",
                            "once": onces.none,
                            "phase": phases.anycombat,               
                    },
                    {
                            "id": "grabThoseRocksAndChuckThem",
                            "name": "'Grab Those Rocks and Chuck'em",
                            "effect": "Pick your general to use this ability, then pick another friendly unit wholly within 12\" of them.  Add 1 to the Attacks characteristic of that unit's Throwin' Rocks this turn.",
                            "once": onces.none,
                            "phase": phases.hero,
                    }
            
                    ]
                },

    ]
}

