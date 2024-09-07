export type FactionUnits = {
    id: string;
    units: Unit[];
}

export type Unit = {
    id: string;
    name: string;
    move: number;
    control: number;
    health: number;
    save: number;
    ward: number;
    hero: boolean;
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

export function getAbilityForRound (unit: Unit, phase: string): Ability[] {
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

export function getAttacksForRound (unit: Unit, phase: string): Attack[] {
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
                    "move": 12,
                    "control": 2,
                    "health": 8,
                    "save": 3,
                    "ward": 0,
                    "hero": true,
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
                                "attacks": 5,
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
                    "move": 5,
                    "control": 2,
                    "health": 6,
                    "save": 3,
                    "ward": 0,
                    "hero": false,
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
                                "attacks": 3,
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
                    "move": 12,
                    "control": 1,
                    "health": 2,
                    "save": 3,
                    "ward": 0,
                    "hero": false,
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
                                "attacks": 1,
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
                                "attacks": 3,
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
                    "move": 5,
                    "control": 1,
                    "health": 2,
                    "save": 3,
                    "ward": 0,
                    "hero": false,
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
                                "attacks": 2,
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
                                "attacks": 2,
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
                        "move": 9,
                        "control": 2,
                        "health": 7,
                        "save": 4,
                        "ward": 6,
                        "hero": true,
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
                                    "attacks": 5,
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
                                    "attacks": 4,
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
                        "move": 6,
                        "control": 2,
                        "health": 5,
                        "save": 6,
                        "ward": 0,
                        "hero": false,
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
                                    "attacks": 3,
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
                        "move": 6,
                        "control": 2,
                        "health": 5,
                        "save": 5,
                        "ward": 0,
                        "hero": false,
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
                                    "attacks": 2,
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
                                    "attacks": 3,
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
                        "move": 6,
                        "control": 1,
                        "health": 1,
                        "save": 5,
                        "ward": 0,
                        "hero": false,
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
                                    "attacks": 2,
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
                        "move": 6,
                        "control": 1,
                        "health": 4,
                        "save": 5,
                        "ward": 0,
                        "hero": false,
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
                                    "attacks": 5,
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
        }
    ]
}





