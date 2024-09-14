export type FactionUnits = {
    id: string;
    units: Unit[];
}

export type Unit = {
    id: string;
    name: string;
    move: string;
    control: number;
    health: number;
    save: number;
    ward: number;
    hero: boolean;
    keywords: string[];
    Passive: {
        attacks: Attack[];
        abilities: Ability[];
    };
    Start: {
        attacks: Attack[];
        abilities: Ability[];
    };
    Hero: {
        attacks: Attack[];
        abilities: Ability[];
    };
    Movement: {
        attacks: Attack[];
        abilities: Ability[];
    };
    Shooting: {
        attacks: Attack[];
        abilities: Ability[];
    };
    Charge: {
        attacks: Attack[];
        abilities: Ability[];
    };
    Combat: {
        attacks: Attack[];
        abilities: Ability[];
    };
    End: {
        attacks: Attack[];
        abilities: Ability[];
    };


}

export function getAbilityForRound(unit: Unit, phase: string): Ability[] {
    switch (phase) {
        case "start":
            return unit.Start.abilities;
        case "hero":
            return unit.Hero.abilities;
        case "movement":
            return unit.Movement.abilities;
        case "shooting":
            return unit.Shooting.abilities;
        case "charge":
            return unit.Charge.abilities;
        case "combat":
            return unit.Combat.abilities;
        case "end":
            return unit.End.abilities;
        default:
            return [];
    }
}

export function getAttacksForRound(unit: Unit, phase: string): Attack[] {
    switch (phase) {
        case "shooting":
            return unit.Shooting.attacks;
        case "combat":
            return unit.Combat.attacks;
        default:
            return [];
    }
}

export type Ability = {
    id: string;
    name: string;
    effect: string;
    once: boolean;
}

export type Attack = {
    id: string;
    name: string;
    range: number;
    attacks: string;
    hit: number;
    wound: number;
    rend: number;
    damage: string;
    ability: string;
}

export const Units = {
    "factions": [
        {
            "id": "stormcast",
            units: [
                {

                    "id": "LordVigilant",
                    "name": "Lord Vigilant",
                    "move": "12",
                    "control": 2,
                    "health": 8,
                    "save": 3,
                    "ward": 0,
                    "hero": true,
                    "keywords": ["Hero", "Cavalry"],
                    "Passive": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": [{
                            "id": "PlanTheAttack",
                            "name": "Plan the Attack",
                            "effect": "Pick a friendly unit within 6, that unit can make a free attack this phase",
                            "once": true,
                        }]
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "HallowedGreataxe",
                                "name": "Hallowed Greataxe",
                                "range": 0,
                                "attacks": "5",
                                "hit": 3,
                                "wound": 3,
                                "rend": 2,
                                "damage": "2",
                                "ability": ""
                            },
                            {
                                "id": "GryphStalkerBeakAndTalons",
                                "name": "Gryph-Stalker Beak and Talons",
                                "range": 0,
                                "attacks": 3,
                                "hit": 4,
                                "wound": 3,
                                "rend": 1,
                                "damage": "2",
                                "ability": "Companion"
                            }
                        ],
                        "abilities": [{
                            "id": "DeliverJudgement",
                            "name": "Deliver Judgement",
                            "effect": "Pick a friendly wholly within 12\".  The target can use 2 Fight abilites this phase.  After the first is used, the target has Strike-Last",
                            "once": true,
                        }],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {

                    "id": "LordVeritant",
                    "name": "Lord Veritant",
                    "move": "5",
                    "control": 2,
                    "health": 6,
                    "save": 3,
                    "ward": 0,
                    "hero": false,
                    "keywords": ["Hero", "Priest", "Infantry"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [{
                            "id": "SenseUnholySorcery",
                            "name": "Sense Unholy Sorcery",
                            "effect": "This unit's Gryph-crow is a token. This unit has Ward (5+) while its Gryph-crow is on the battlefield. If you make an unmodied ward roll of 1 for this unit, remove its Gryph-crow from the battlefield",
                            "once": false,
                        }]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": [{
                            "id": "CleansingFires",
                            "name": "Cleansing Fires",
                            "effect": "Pick a visible enemy unit within 12\" and make a chanting roll of D6.  On a 3+, roll a dice for each model in the target unut.  For each 5+ inflict 1 mortal damage on target unit.",
                            "once": false,
                        }]
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "StaffOfAbjuration",
                                "name": "Staff Of Abjuration",
                                "attacks": 1,
                                "hit": 3,
                                "wound": 3,
                                "rend": 1,
                                "damage": "3",
                                "ability": "",
                                "range": 0,
                            },
                            {
                                "id": "JudgementBlade",
                                "name": "Judgement Blade",
                                "attacks": "3",
                                "hit": 3,
                                "wound": 3,
                                "rend": 1,
                                "damage": "D3",
                                "ability": "Anit-Wizard (+1 Rend), Anit-Priest (+1 Rend)",
                                "range": 0,
                            }
                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {

                    "id": "Procecutors",
                    "name": "Procecutors",
                    "move": "12",
                    "control": 1,
                    "health": 2,
                    "save": 3,
                    "ward": 0,
                    "hero": false,
                    "keywords": ["Infantry", "Fly", "Reinforcements"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [{
                            "id": "Skirmishers",
                            "name": "Skirmishers",
                            "effect": "The unit has a coherency range of 2\"",
                            "once": false,
                        }
                        ]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [
                            {
                                "id": "StormcaalJavelin",
                                "name": "Stormcast Javelin",
                                "range": 10,
                                "attacks": "1",
                                "hit": 3,
                                "wound": 3,
                                "rend": 1,
                                "damage": "D3",
                                "ability": ""
                            }
                        ],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": [
                            {
                                "id": "HearaldsOfRighteousness",
                                "name": "Hearalds Of Righteousness",
                                "effect": "When you make a charge roll for this unit, roll 1 additional dice.",
                                "once": false,
                            }
                        ]
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "StormcastJavelin",
                                "name": "Stormcast Javelin",
                                "attacks": "3",
                                "hit": 3,
                                "wound": 3,
                                "rend": 1,
                                "damage": "1",
                                "ability": "",
                                "range": 0,
                            }
                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {

                    "id": "Liberators",
                    "name": "Liberators",
                    "move": "5",
                    "control": 1,
                    "health": 2,
                    "save": 3,
                    "ward": 0,
                    "hero": false,
                    "keywords": ["Infantry", "Reinforcements"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [{
                            "id": "StalwartDefenders",
                            "name": "Stalwart Defenders",
                            "effect": "Add 3 to this unit's control score while it contests an objective wholly within friendly territor",
                            "once": false,
                        }]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "Warhammer",
                                "name": "Warhammer",
                                "attacks": "2",
                                "hit": 3,
                                "wound": 3,
                                "rend": 1,
                                "damage": "1",
                                "ability": "Crit (Mortal)",
                                "range": 0,
                            },
                            {
                                "id": "Grandhammer",
                                "name": "Grandhammer",
                                "attacks": "2",
                                "hit": 3,
                                "wound": 3,
                                "rend": 1,
                                "damage": "2",
                                "ability": "Crit (Mortal)",
                                "range": 0,
                            }
                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": [{
                            "id": "StalwartDefenders",
                            "name": "Stalwart Defenders",
                            "effect": "Add 3 to this unit's control score while it contests an objective wholly within friendly territor",
                            "once": false,
                        }]
                    }

                }],




        },
        {
            "id": "skaven",
            "units": [

                {
                    "id": "clawLordOnGnawBeast",
                    "name": "Clawlord on Gnaw-beast",
                    "move": "9",
                    "control": 2,
                    "health": 7,
                    "save": 4,
                    "ward": 6,
                    "hero": true,
                    "keywords": ["Hero", "Cavalry", "Ward (6+)"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [{
                            "id": "corneredRat",
                            "name": "Cornered Rat",
                            "effect": "When this unit is damaged, add 3 to the Attacks characteristic of its Warpforged Halbred.",
                            "once": false,
                        }]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [
                            {
                                "id": "ratlingPistol",
                                "name": "Ratling Pistol",
                                "range": 10,
                                "attacks": "D6",
                                "hit": 3,
                                "wound": 3,
                                "rend": 1,
                                "damage": "1",
                                "ability": "Crit (Auto-wound), Shoot in Combat"
                            }
                        ],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "WarforgedHalbred",
                                "name": "Warforged Halbred",
                                "range": 0,
                                "attacks": "5",
                                "hit": 3,
                                "wound": 4,
                                "rend": 1,
                                "damage": "2",
                                "ability": ""
                            },
                            {
                                "id": "Gnaw-beast Chised Fangs",
                                "name": "Gnaw-beast Chised Fangs",
                                "range": 0,
                                "attacks": "4",
                                "hit": 4,
                                "wound": 3,
                                "rend": 1,
                                "damage": "D3",
                                "ability": "Companion"
                            },

                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {
                    "id": "greySeer",
                    "name": "Grey Seer",
                    "move": "6",
                    "control": 2,
                    "health": 5,
                    "save": 6,
                    "ward": 0,
                    "hero": false,
                    "keywords": ["Hero", "Wizard", "Infantry"],
                    "Passive": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": [{
                            "id": "willOfTheHornedRat",
                            "name": "Will Of The Horned Rat",
                            "effect": "Pick a friendly unit wholly within 13\" then roll a dice.  On a 3+, add the roll to the targets control score until the start of your next turn.",
                            "once": false,
                        },
                        {
                            "id": "wither",
                            "name": "Wither",
                            "effect": "Pick a visable enemy unit within 13\" of this unit to be the target, then making a casting rolling 2D6.  On a 6+, inflict D3 mortal damage on the target.",
                            "once": false,
                        }]
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "warpstoneStaff",
                                "name": "Warpstone Staff",
                                "range": 0,
                                "attacks": "3",
                                "hit": 4,
                                "wound": 4,
                                "rend": 1,
                                "damage": "D3",
                                "ability": ""
                            },

                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {
                    "id": "warlockEngineer",
                    "name": "Warlock Engineer",
                    "move": "6",
                    "control": 2,
                    "health": 5,
                    "save": 5,
                    "ward": 0,
                    "hero": false,
                    "keywords": ["Hero", "Infantry"],
                    "Passive": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [
                            {
                                "id": "warplockMusket",
                                "name": "Warplock Musket",
                                "range": 24,
                                "attacks": "2",
                                "hit": 3,
                                "wound": 3,
                                "rend": 2,
                                "damage": "D3",
                                "ability": "Crit (Auto-wound)"
                            }
                        ],
                        "abilities": [
                            {
                                "id": "more-moreWarpEnergy",
                                "name": "More More Warp Energy",
                                "effect": "When delcaring shoot and it has not used move ability this turn.  Roll a dice.  On a 2+, set the Damage characteristic of the Warplock Musket to 3 this phase.  On a 1, inflict D3 mortal damage to this unit.",
                                "once": false,
                            }
                        ]
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "warpforgedDagger",
                                "name": "Warpforged Dagger",
                                "range": 0,
                                "attacks": "3",
                                "hit": 4,
                                "wound": 4,
                                "rend": 0,
                                "damage": "2",
                                "ability": ""
                            },

                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {
                    "id": "clanrats",
                    "name": "Clanrats",
                    "move": "6",
                    "control": 1,
                    "health": 1,
                    "save": 5,
                    "ward": 0,
                    "hero": false,
                    "keywords": ["Infantry", "Reinforcements"],
                    "Passive": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "rustyBlade",
                                "name": "Rusty Blade",
                                "range": 0,
                                "attacks": "2",
                                "hit": 4,
                                "wound": 5,
                                "rend": 0,
                                "damage": "1",
                                "ability": ""
                            }
                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": [{
                            "id": "seetingSwarm",
                            "name": "Seeting Swarm",
                            "effect": "You can return D3 slain models to this unit.",
                            "once": false,
                        }]
                    }

                },
                {
                    "id": "ratOgors",
                    "name": "Rat Ogres",
                    "move": "6",
                    "control": 1,
                    "health": 4,
                    "save": 5,
                    "ward": 0,
                    "hero": false,
                    "keywords": ["Infantry"],
                    "Passive": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [
                            {
                                "id": "warpfireGun",
                                "name": "Warpfire Gun",
                                "range": 10,
                                "attacks": "2D6",
                                "hit": 2,
                                "wound": 4,
                                "rend": 2,
                                "damage": "1",
                                "ability": "Shoot in Combat"
                            }
                        ],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "clawsBladesAndFangs",
                                "name": "Claws Blades And Fangs",
                                "range": 0,
                                "attacks": "5",
                                "hit": 4,
                                "wound": 3,
                                "rend": 1,
                                "damage": "2",
                                "ability": ""
                            },

                        ],
                        "abilities": [{
                            "id": "unleashedWarpFury",
                            "name": "Unleashed Warp Fury",
                            "effect": "Inflict D3 mortal damage on this uniit.  Then add 1 to the attacks characteristic of its melee weapons this phase.",
                            "once": true,
                        }],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },


            ]
        },
        {
            id: "SoD",
            units: [
                {

                    "id": "Chaos Lord",
                    "name": "Chaos Lord",
                    "move": "5",
                    "control": 2,
                    "health": 6,
                    "save": 3,
                    "ward": 0,
                    "hero": true,
                    "keywords": ["Hero", "Infantry"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [
                            {
                                "id": "favouredOfThePantheon",
                                "name": "Favoured Of The Pantheon",
                                "effect": "RoLL a dice.  On a 4+, you can roll on the Eye of the Gods table for this unti.",
                                "once": false,
                            }
                        ]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": [{
                            "id": "favouredOfThePantheon",
                            "name": "Favoured Of The Pantheon",
                            "effect": "RoLL a dice.  On a 4+, you can roll on the Eye of the Gods table for this unti.",
                            "once": false,
                        }]
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "reaperblade",
                                "name": "Reaperblade",
                                "range": 0,
                                "attacks": "5",
                                "hit": 3,
                                "wound": 3,
                                "rend": 1,
                                "damage": "2",
                                "ability": "Crit (Mortal)"
                            },
                        ],
                        "abilities": [{
                            "id": "ironWilledChampion",
                            "name": "Iron Willed Champion",
                            "effect": "Pick a friendly unit wholly within 12\" and roll a dice.  On a 2+, add 1 to the hit rolls for attacks made by this unit this phase.",
                            "once": false,
                        }],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {

                    "id": "chaosChariot",
                    "name": "Chaos Chariot",
                    "move": "10",
                    "control": 2,
                    "health": 7,
                    "save": 4,
                    "ward": 0,
                    "hero": false,
                    "keywords": ["War Machine"],
                    "Passive": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": [{
                            "id": "swiftDeath",
                            "name": "Swift Death",
                            "effect": "If this unit charged this phase, pick an enemy unit within 1\" to be the target and roll the dice.  On a 2+, inflict D3 mortal damage on the target.",
                            "once": false,
                        }]
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "chaosWarFlail",
                                "name": "Chaos War Flail",
                                "range": 0,
                                "attacks": "6",
                                "hit": 3,
                                "wound": 3,
                                "rend": 0,
                                "damage": "1",
                                "ability": ""
                            },
                            {
                                "id": "driversLashingWhip",
                                "name": "Drivers Lashing Whip",
                                "range": 0,
                                "attacks": "2",
                                "hit": 4,
                                "wound": 4,
                                "rend": 0,
                                "damage": "1",
                                "ability": ""
                            },
                            {
                                "id": "warhorsesTramplingHooves",
                                "name": "Warhorses Trampling Hooves",
                                "range": 0,
                                "attacks": "4",
                                "hit": 5,
                                "wound": 3,
                                "rend": 0,
                                "damage": "1",
                                "ability": "Companion"
                            }
                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {

                    "id": "chaosWarriors",
                    "name": "Chaos Warriors",
                    "move": "5",
                    "control": 1,
                    "health": 2,
                    "save": 3,
                    "ward": 0,
                    "hero": false,
                    "keywords": ["Infantry"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [{
                            "id": "bringersOfDesolation",
                            "name": "Bringers Of Desolation",
                            "effect": "Add 1 to wound rolls for combat attacks made by this unit that target an enemy unit that is contesting an objective you do not conotrl.",
                            "once": false,
                        }]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "runeEtchedHalbred",
                                "name": "Rune Etched Halbred",
                                "range": 0,
                                "attacks": "2",
                                "hit": 3,
                                "wound": 3,
                                "rend": 1,
                                "damage": "3",
                                "ability": ""
                            }
                        ],
                        "abilities": [{
                            "id": "bringersOfDesolation",
                            "name": "Bringers Of Desolation",
                            "effect": "Add 1 to wound rolls for combat attacks made by this unit that target an enemy unit that is contesting an objective you do not conotrl.",
                            "once": false,
                        }],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {

                    "id": "chaosKnights",
                    "name": "Chaos Knights",
                    "keywords": ["Cavalry"],
                    "move": "10",
                    "control": 1,
                    "health": 4,
                    "save": 3,
                    "ward": 0,
                    "hero": false,
                    "Passive": {
                        "attacks": [],
                        "abilities": [{
                            "id": "impalingCharge",
                            "name": "Impaling Charge",
                            "effect": "If this unit charged this phase, add 1 to the Rend characteristic of this unit's melee weapons this phase.",
                            "once": false,
                        }]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": [{
                            "id": "impalingCharge",
                            "name": "Impaling Charge",
                            "effect": "If this unit charged this phase, add 1 to the Rend characteristic of this unit's Cursed Lance this phase.",
                            "once": false,
                        }]
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "cursedLance",
                                "name": "Cursed Lance",
                                "range": 0,
                                "attacks": "3",
                                "hit": 3,
                                "wound": 3,
                                "rend": 1,
                                "damage": "1",
                                "ability": "Charge (+1 Damage)"
                            },
                            {
                                "id": "chaosSteedTrampingHooves",
                                "name": "Chaos Steed Tramping Hooves",
                                "range": 0,
                                "attacks": "2",
                                "hit": 5,
                                "wound": 3,
                                "rend": 1,
                                "damage": "1",
                                "ability": "Companion"
                            }
                        ],
                        "abilities": [{
                            "id": "impalingCharge",
                            "name": "Impaling Charge",
                            "effect": "If this unit charged this phase, add 1 to the Rend characteristic of this unit's melee weapons this phase.",
                            "once": false,
                        }],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
            ]
        },
        {
            "id": "DoK",
            "units": [
                {

                    "id": "melusaaiIronscale",
                    "name": "Melusai Ironscale",
                    "move": "8",
                    "control": 2,
                    "health": 6,
                    "save": 5,
                    "ward": 6,
                    "hero": true,
                    "keywords": ["Hero", "Infantry", "Ward (6+)"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [{
                            "id": "allOutSlaughter",
                            "name": "All Out Slaughter",
                            "effect": "Pick a friendly unit wholly within 12\".  Until the start of your next turn, add 1 to hit rolls for combat attacks made by this target.",
                            "once": false,
                        }]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": [{
                            "id": "allOutSlaughter",
                            "name": "All Out Slaughter",
                            "effect": "Pick a friendly unit wholly within 12\".  Until the start of your next turn, add 1 to hit rolls for combat attacks made by this target.",
                            "once": false,
                        }]
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [
                            {
                                "id": "keldrisaith",
                                "name": "Keldrisaith",
                                "range": 12,
                                "attacks": "2",
                                "hit": 3,
                                "wound": 3,
                                "rend": 1,
                                "damage": "D3",
                                "ability": ""
                            }
                        ],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "keldrisaith",
                                "name": "Keldrisaith",
                                "range": 0,
                                "attacks": "6",
                                "hit": 3,
                                "wound": 4,
                                "rend": 1,
                                "damage": "2",
                                "ability": ""
                            },

                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": [{
                            "id": "turnedToCrystal",
                            "name": "Turned To Crystal",
                            "effect": "Pick an Enemy unit with 1\" of this unit to target and roll a dice.  On a 2+ inflict 1 mortal damage on the target.",
                            "once": false,
                        }]
                    }

                },
                {

                    "id": "bloodStalkers",
                    "name": "Blood Stalkers",
                    "move": "8",
                    "control": 1,
                    "health": 2,
                    "save": 5,
                    "ward": 6,
                    "hero": false,
                    "keywords": ["Infantry", "Ward (6+)"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [{
                            "id": "heartSeekers",
                            "name": "Heart Seekers",
                            "effect": "Shooting attacks made by this unit score critical hit rolls on 5+ if this unit do not use a move this same turn.",
                            "once": true,
                        }]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [
                            {
                                "id": "heartSeekerBow",
                                "name": "Heart Seeker Bow",
                                "range": 18,
                                "attacks": "3",
                                "hit": 3,
                                "wound": 4,
                                "rend": 1,
                                "damage": "1",
                                "ability": "Crit (Auto-wound)"
                            }
                        ],
                        "abilities": [
                            {
                                "id": "heartSeekers",
                                "name": "Heart Seekers",
                                "effect": "Shooting attacks made by this unit score critical hit rolls on 5+ if this unit do not use a move this same turn.",
                                "once": true,
                            }
                        ]
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "scianlar",
                                "name": "Scianlar",
                                "range": 0,
                                "attacks": "2",
                                "hit": "3",
                                "wound": 4,
                                "rend": 0,
                                "damage": "1",
                                "ability": ""
                            },

                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {

                    "id": "doomfireWarlocks",
                    "name": "Doomfire Warlocks",
                    "move": "14",
                    "control": 1,
                    "health": 3,
                    "save": 5,
                    "ward": 6,
                    "hero": false,
                    "keywords": ["Cavalry", "Reinforcements", "Ward (6+)"],
                    "Passive": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": [{
                            "id": "doomfireBolt",
                            "name": "Doomfire",
                            "effect": "Pick a visibile enemy with 12\" of this unit to be the target and make a casting roll of 2D6.  On a 6+ inflict D3 mortal damage on the target.",
                            "once": false,
                        }]
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [
                            {
                                "id": "doomfireCrossbow",
                                "name": "Doomfire Crossbow",
                                "range": 10,
                                "attacks": "2",
                                "hit": 3,
                                "wound": 4,
                                "rend": 0,
                                "damage": "1",
                                "ability": ""
                            }
                        ],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "cursedScimitar",
                                "name": "Cursed Scimitar",
                                "range": 0,
                                "attacks": "2",
                                "hit": 3,
                                "wound": 4,
                                "rend": 1,
                                "damage": "1",
                                "ability": ""
                            },
                            {
                                "id": "darkSteedViciousBite",
                                "name": "Dark Steed Vicious Bite",
                                "range": 0,
                                "attacks": "2",
                                "hit": 5,
                                "wound": 3,
                                "rend": 0,
                                "damage": "1",
                                "ability": "Companion"
                            }

                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {

                    "id": "witchAelves",
                    "name": "Witch Aelves",
                    "move": "6",
                    "control": 1,
                    "health": 1,
                    "save": 6,
                    "ward": 6,
                    "hero": false,
                    "keywords": ["Infantry", "Reinforcements", "Ward (6+)"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [
                            {
                                "id": "frenziedFervour",
                                "name": "Frenzied Fervour",
                                "effect": "Add 1 to Rend characteristic of this unit's melee weapon if they charged in the same turn.",
                                "once": true,
                            }
                        ]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": [
                            {
                                "id": "frenziedFervour",
                                "name": "Frenzied Fervour",
                                "effect": "Add 1 to Rend characteristic of this unit's melee weapon if they charged in the same turn.",
                                "once": true,
                            }
                        ]
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "pairedSciansa",
                                "name": "Pair Sciansa",
                                "range": 0,
                                "attacks": "3",
                                "hit": 3,
                                "wound": 4,
                                "rend": 0,
                                "damage": "1",
                                "ability": "Crit (Auto-wound)"
                            },
                        ],
                        "abilities": [{
                            "id": "frenziedFervour",
                            "name": "Frenzied Fervour",
                            "effect": "Add 1 to Rend characteristic of this unit's melee weapon if they charged in the same turn.",
                            "once": true,
                        }],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
            ]
        },
        {
            "id": "fyreslayers",
            "units": [

                {

                    "id": "battlesmith",
                    "name": "Battlesmith",
                    "move": "4",
                    "control": 5,
                    "health": 5,
                    "save": 5,
                    "ward": 6,
                    "hero": true,
                    "keywords": ["Infantry", "Hero", "Ward (6+)"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [
                            {
                                "id": "iconOfGrimnir",
                                "name": "Icon of Grimnir",
                                "effect": "Add 1 to save rolls for friendly units while they are wholly within 12\" of this unit.",
                                "once": false,
                            }
                        ]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": [{
                            "id": "plantTheIcon",
                            "name": "Plant The Icon",
                            "effect": "For the rest of the turn, friednly units have ward 5+ while they are within 12\" of this unit.",
                            "once": true,
                        }]
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "ancestralBattleAxe",
                                "name": "Ancestral Battle Axe",
                                "range": 0,
                                "attacks": 5,
                                "hit": 3,
                                "wound": 3,
                                "rend": 1,
                                "damage": "2",
                                "ability": ""
                            },
                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {

                    "id": "hearthguardBerzerkers",
                    "name": "Hearthguard Berzerkers",
                    "move": "4",
                    "control": 1,
                    "health": 2,
                    "save": 6,
                    "ward": 6,
                    "hero": false,
                    "keywords": ["Infantry", "Ward (6+)"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [
                            {
                                "id": "dutyUntoDeath",
                                "name": "Duty Unto Death",
                                "effect": "While your general is wholly within this unit's combat range, both this unit and your general have ward 5+",
                                "once": false,
                            }
                        ]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": [{
                            "id": "",
                            "name": "",
                            "effect": "",
                            "once": true,
                        }]
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "flamestrikePoleaxe",
                                "name": "Flamestrike Poleaxe",
                                "range": 0,
                                "attacks": 2,
                                "hit": "3",
                                "wound": 3,
                                "rend": 1,
                                "damage": "2",
                                "ability": "Crit (Mortal)"
                            },
                        ],
                        "abilities": [
                            {
                                "id": "dutyUntoDeath",
                                "name": "Duty Unto Death",
                                "effect": "While your general is wholly within this unit's combat range, both this unit and your general have ward 5+",
                                "once": false,
                            }
                        ],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {

                    "id": "vulkiteBerzerkers",
                    "name": "Vulkite Berzerkers",
                    "move": "4",
                    "control": 1,
                    "health": 2,
                    "save": 6,
                    "ward": 6,
                    "hero": false,
                    "Passive": {
                        "attacks": [],
                        "abilities": [
                            {
                                "id": "whirlwhindOfDestruction",
                                "name": "Whirlwind Of Destruction",
                                "effect": "Add 1 to the attack of this unit's melee weapoons if it charged in the same turn.",
                                "once": false,
                            }
                        ]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": [{
                            "id": "",
                            "name": "",
                            "effect": "",
                            "once": true,
                        }]
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": [
                            {
                                "id": "whirlwhindOfDestruction",
                                "name": "Whirlwind Of Destruction",
                                "effect": "Add 1 to the attack of this unit's melee weapoons if it charged in the same turn.",
                                "once": false,
                            }
                        ]
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "fyresteelHandaxes",
                                "name": "Fyresteel Handaxes",
                                "range": 0,
                                "attacks": "2",
                                "hit": 4,
                                "wound": 3,
                                "rend": 1,
                                "damage": "1",
                                "ability": "Anti-charge (+1 Rend)"
                            },
                        ],
                        "abilities": [
                            {
                                "id": "whirlwhindOfDestruction",
                                "name": "Whirlwind Of Destruction",
                                "effect": "Add 1 to the attack of this unit's melee weapoons if it charged in the same turn.",
                                "once": false,
                            }
                        ],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                }
            ]
        },
        {
            "id": "nighthaunt",
            "units": [
                {

                    "id": "knightOfShrouds",
                    "name": "Knight of Shrouds",
                    "move": "8",
                    "control": 2,
                    "health": 5,
                    "save": 4,
                    "ward": 6,
                    "hero": true,
                    "keywords": ["Infantry", "Hero", "Ward (6+)"],
                    "Passive": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": [{
                            "id": "discorporate",
                            "name": "Discorporate",
                            "effect": "Pick a friendly unit wholly within 9\" of this unit to be the target.  Unit the start of the next turn, the target has Ward 5+",
                            "once": false,
                        }]
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "swordOfStolenHours",
                                "name": "Sword of Stolen Hours  ",
                                "range": 0,
                                "attacks": 5,
                                "hit": 4,
                                "wound": 3,
                                "rend": 1,
                                "damage": "2",
                                "ability": "Crit (Auto-wound)"
                            },

                        ],
                        "abilities": [{
                            "id": "discorporate",
                            "name": "Discorporate",
                            "effect": "Pick a friendly unit wholly within 9\" of this unit to be the target.  Unit the start of the next turn, the target has Ward 5+",
                            "once": false,
                        }],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {

                    "id": "spiritHosts",
                    "name": "Spirit Hosts",
                    "move": "8",
                    "control": 1,
                    "health": 3,
                    "save": 4,
                    "ward": 0,
                    "hero": false,
                    "keywords": ["Infantry", "Fly", "Ward (6+)"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [{
                            "id": "drawnToWar",
                            "name": "Drawn To War",
                            "effect": "Your general has Ward (4+) while they are within 1\" of this unit",
                            "once": false,
                        }]
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "spectralClawsAndDaggers",
                                "name": "Spectral Claws and Daggers",
                                "range": 0,
                                "attacks": 6,
                                "hit": 4,
                                "wound": 4,
                                "rend": 0,
                                "damage": "1",
                                "ability": "Crit (Auto-wound)"
                            },

                        ],
                        "abilities": [],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {
                    "id": "grimghastReapers",
                    "name": "Grimghast Reapers",
                    "move": "8",
                    "control": 1,
                    "health": 1,
                    "save": 4,
                    "ward": 6,
                    "hero": false,
                    "keywords": ["Infantry", "Fly", "Ward (6+)"],
                    "Passive": {
                        "attacks": [],
                        "abilities": [{
                            "id": "reapedLikeCorn",
                            "name": "Reaped Like Corn",
                            "effect": "Combat attacks made by this unit score ciritcal hits on unmodified hit rolls of 5+ if the target unit has 5 or more models.",
                            "once": true,
                        }]
                    },
                    "Start": {

                        "attacks": [],
                        "abilities": [],
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "slasherScythe",
                                "name": "Slash Scythe",
                                "range": 0,
                                "attacks": 2,
                                "hit": 4,
                                "wound": 3,
                                "rend": 1,
                                "damage": "1",
                                "ability": "Crit (Auto-wound)"
                            },

                        ],
                        "abilities": [{
                            "id": "reapedLikeCorn",
                            "name": "Reaped Like Corn",
                            "effect": "Combat attacks made by this unit score ciritcal hits on unmodified hit rolls of 5+ if the target unit has 5 or more models.",
                            "once": true,
                        }],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
                {

                    "id": "chainrasps",
                    "name": "Chainrasps",
                    "move": "8",
                    "control": 1,
                    "health": 1,
                    "save": 5,
                    "ward": 6,
                    "hero": false,
                    "keywords": ["Infantry", "Fly", "Reinforcements", "Ward (6+)"],
                    "Passive": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Start":
                    {
                        "attacks": [],
                        "abilities": []
                    },
                    "Hero": {
                        "attacks": [],
                        "abilities": [{
                            "id": "chillingHorde",
                            "name": "Chilling Horde",
                            "effect": "Add 1 to wound rolls for combat attacks made by this unit if it charged in the same turn.",
                            "once": true,
                        }]
                    },
                    "Movement": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "attacks": [],
                        "abilities": [
                            {
                                "id": "chillingHorde",
                                "name": "Chilling Horde",
                                "effect": "Add 1 to wound rolls for combat attacks made by this unit if it charged in the same turn.",
                                "once": true,
                            }
                        ]
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "malignantWeapon",
                                "name": "Malignant Weapon",
                                "range": 0,
                                "attacks": 2,
                                "hit": 4,
                                "wound": 5,
                                "rend": 0,
                                "damage": "1",
                                "ability": "Crit (Auto-wound)"
                            },

                        ],
                        "abilities": [{
                            "id": "chillingHorde",
                            "name": "Chilling Horde",
                            "effect": "Add 1 to wound rolls for combat attacks made by this unit if it charged in the same turn.",
                            "once": true,
                        }],
                    },
                    "End": {
                        "attacks": [],
                        "abilities": []
                    }

                },
               
            ]
        },
        {
            "id": "gloomspiteGitz",
            "units": [{

            "id": "loonBoss",
            "name": "Loon Boss",
            "move": "5",
            "control": 2,
            "health": 5,
            "save": 4,
            "ward": 6,
            "hero": true,
            "keywords": ["Hero", "Infantry", "Ward (6+)"],
            "Passive": {
                "attacks": [],
                "abilities": []
            },
            "Start":
            {
                "attacks": [],
                "abilities": []
            },
            "Hero": {
                "attacks": [],
                "abilities": [{
                    "id": "ImDaBoss",
                    "name": "I'm Da Boss",
                    "effect": "Pick a friendly Moonclan Stabbas unit wholly within 12\" of this unit.  Pick either Beckon the Loonic Horders:  If the target unit is not in combat, you can return D6 slain models to it.  OR  Stab Em Good: Add 1 to hit rolls for attacks made by this unit until the end of the phase.",
                    "once": false,
                }]
            },
            "Movement": {
                "attacks": [],
                "abilities": []
            },
            "Shooting": {
                "attacks": [],
                "abilities": []
            },
            "Charge": {
                "attacks": [],
                "abilities": []
            },
            "Combat":
            {
                "attacks": [
                    {
                        "id": "moonSlicer",
                        "name": "Moon Slicer",
                        "range": 0,
                        "attacks": "5",
                        "hit": 4,
                        "wound": 4,
                        "rend": 1,
                        "damage": "D3",
                        "ability": ""
                    },                    
                ],
                "abilities": [],
            },
            "End": {
                "attacks": [],
                "abilities": []
            }

        },
        {

            "id": "squiqHopper",
            "name": "Squiq Hopper",
            "move": "D6+8",
            "control": 1,
            "health": 2,
            "save": 6,
            "ward": 0,
            "hero": false,
            "keywords": ["Cavalry", "Fly"],
            "Passive": {
                "attacks": [],
                "abilities": []
            },
            "Start":
            {
                "attacks": [],
                "abilities": []
            },
            "Hero": {
                "attacks": [],
                "abilities": []
            },
            "Movement": {
                "attacks": [],
                "abilities": [{
                    "id": "boingBoingBoing",
                    "name": "Boing Boing Boing",
                    "effect": "Pick an enemy unit that any models in this unit passed across across this phase to be the target, then roll a dice for each model in that unit.  For each 4+, inflict 1 mortal damage on that unit.",
                    "once": false,
                }]
            },
            "Shooting": {
                "attacks": [],
                "abilities": []
            },
            "Charge": {
                "attacks": [],
                "abilities": []
            },
            "Combat":
            {
                "attacks": [
                    {
                        "id": "slitta",
                        "name": "Slitta",
                        "range": 0,
                        "attacks": "2",
                        "hit": 4,
                        "wound": 5,
                        "rend": 0,
                        "damage": "1",
                        "ability": ""
                    },
                    {
                        "id": "squiqFangFilledGob",
                        "name": "Squiq Fang Filled Gob",
                        "range": 0,
                        "attacks": "3",
                        "hit": 4,
                        "wound": 3,
                        "rend": 1,
                        "damage": "1",
                        "ability": "companion"
                    }
                ],
                "abilities": [],
            },
            "End": {
                "attacks": [],
                "abilities": []
            }

        },
        {

            "id": "rockgutTroggoths",
            "name": "Rockgut Troggoths",
            "move": "6",
            "control": 2,
            "health": 5,
            "save": 4,
            "ward": 5,
            "hero": false,
            "keywords": ["Infantry", "Ward (5+)"],
            "Passive": {
                "attacks": [],
                "abilities": []
            },
            "Start":
            {
                "attacks": [],
                "abilities": [{
                    "id": "regeneration",
                    "name": "Regeneration",
                    "effect": "Heal D3 to this unit.",
                    "once": false,
                }]
            },
            "Hero": {
                "attacks": [],
                "abilities": []
            },
            "Movement": {
                "attacks": [],
                "abilities": []
            },
            "Shooting": {
                "attacks": [{
                    "id": "throwinBoulders",
                    "name": "Throwin' Boulders",
                    "range": 10,
                    "attacks": "1",
                    "hit": 5,
                    "wound": 2,
                    "rend": 2,
                    "damage": "D3",
                    "ability": ""
                }],
                "abilities": []
            },
            "Charge": {
                "attacks": [],
                "abilities": []
            },
            "Combat":
            {
                "attacks": [
                    {
                        "id": "massiveStoneMaul",
                        "name": "Massive Stone Maul",
                        "range": 0,
                        "attacks": "2",
                        "hit": 4,
                        "wound": 2,
                        "rend": 2,
                        "damage": "3",
                        "ability": ""
                    },
                    
                ],
                "abilities": [],
            },
            "End": {
                "attacks": [],
                "abilities": []
            }

        },
        {

            "id": "moonclanStabbas",
            "name": "Moonclan Stabbas",
            "move": "5",
            "control": 1,
            "health": 1,
            "save": 5,
            "ward": 0,
            "hero": false,
            "keywords": ["Infantry", "Reinforcements"],
            "Passive": {
                "attacks": [],
                "abilities": []
            },
            "Start":
            {
                "attacks": [],
                "abilities": []
            },
            "Hero": {
                "attacks": [],
                "abilities": []
            },
            "Movement": {
                "attacks": [],
                "abilities": []
            },
            "Shooting": {
                "attacks": [],
                "abilities": [{
                    "id": "netters",
                    "name": "Netters",
                    "effect": "Pick an enemry infantry unit in combat with this unit. to get the target.  Roll a dice, on 2+, subtract 1 from hit rolls for attack modifiers made by the target this phase.",
                    "once": true,
                }]
            },
            "Charge": {
                "attacks": [],
                "abilities": []
            },
            "Combat":
            {
                "attacks": [
                    {
                        "id": "stabba",
                        "name": "Stabba",
                        "range": 0,
                        "attacks": "2",
                        "hit": "4",
                        "wound": "5",
                        "rend": 0,
                        "damage": "1",
                        "ability": ""
                    }
                ],
                "abilities": [{
                    "id": "netters",
                    "name": "Netters",
                    "effect": "Pick an enemry infantry unit in combat with this unit. to get the target.  Roll a dice, on 2+, subtract 1 from hit rolls for attack modifiers made by the target this phase.",
                    "once": true,
                }],
            },
            "End": {
                "attacks": [],
                "abilities": []
            }

        },
    ]}

    ]
}

