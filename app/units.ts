export type Unit = {
    id: string;
    name: string;
    effect: string;
    once: boolean;
    phase: string;
  }

export const Units = {
    "units": [
    {
        "id": "LordVigilant",
        "name": "Lord Vigilant",
        "move": 12,
        "control": 2,
        "health": 8,
        "save": 3,
        "Combat": [
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
        "": [],
        "ward": 0,
        "Hero": [
            {
                "id": "PlanTheAttack",
                "name": "Plan the Attack",
                "effect": "Pick a friendly unit within 6, that unit can make a free attack this phase",
                "once": true,
                "phase": "Planning"
            }
        ]
       
    
    }
    ]
}