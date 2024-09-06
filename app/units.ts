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
        abilities: Ability[];
    };
    Start: {
        abilities: Ability[];
    };
    Hero: {
        abilities: Ability[];
    };
    Movement: {
        abilities: Ability[];
    };  
    Shooting: {
        attacks: Attack[];
        abilities: Ability[];
    };
    Charge: {
        abilities: Ability[];
    };
    Combat: {
        attacks: Attack[];
        abilities: Ability[];
    };
    End: {
        abilities: Ability[];
    };
}

export type Ability = {
    id: string;
    name: string;
    effect: string;
    once: boolean;
    phase: string;
}

export type Attack = {
    id: string;
    attacks: number;
    hit: number;
    wound: number;
    rend: number;
    damage: number;
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
                        "abilities": []
                    },
                    "Start":
                    {
                        "abilities": []
                    },
                    "Hero": {
                        "abilities": [{
                            "id": "PlanTheAttack",
                            "name": "Plan the Attack",
                            "effect": "Pick a friendly unit within 6, that unit can make a free attack this phase",
                            "once": true,
                            "phase": "Planning"
                        }]
                    },
                    "Movement": {
                        "abilities": []
                    },
                    "Shooting": {
                        "attacks": [],
                        "abilities": []
                    },
                    "Charge": {
                        "abilities": []
                    },
                    "Combat":
                    {
                        "attacks": [
                            {
                                "id": "HallowedGreataxe",
                                "attacks": 5,
                                "hit": 3,
                                "wound": 3,
                                "rend": 2,
                                "damage": 2,
                                "ability": ""
                            },
                            {
                                "id": "GryphStalkerBeakAndTalons",
                                "attacks": 3,
                                "hit": 4,
                                "wound": 3,
                                "rend": 1,
                                "damage": 2,
                                "ability": "Companion"
                            }
                        ],
                        "abilities": [],
                    },
                    "End": {
                        "abilities": []
                    }

                }]


        }
    ]
}
