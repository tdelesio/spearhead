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

export type Ability = {
    id: string;
    name: string;
    effect: string;
    once: boolean;
}

export type Attack = {
    id: string;
    range: number;
    attacks: number;
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
                
                }]


        }
    ]
}
