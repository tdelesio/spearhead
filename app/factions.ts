export const Factions = {
    "factions": [
    {
        "id": "stormcast",
        "name": "Stormcast Eternals",
        "battleTraits": [
        {
                "id": "shieldOfAzyr",
                "name": "Shield of Azyr",
                "effect": "Pick a friendly Unit, that unit has Ward 5+",
                "once": true,
                "phase": "Hero"
        },
        {
                "id": "stormCharge",
                "name": "Storm Charge",
                "effect": "Pick a friendly unit that is not in combat, that unit can charge this turn even if a run was used",
                "once": true,
                "phase": "Charge"
        }
        ],
        "regimentAbilities": [
            {
                "id": "strikeWhereNeeded",
                "name": "Strike Where Needed",
                "effect": "Free Retreat",
                "once": true,
                "phase": "Combat"
            },
            {
                "id": "blazeOfGlory",
                "name": "Blaze of Glory",
                "effect": "Pick a friendly unit that is in combat, each time a model is slain, make a vengance roll of D6.  On 4+ inflict 1 mortal damage",
                "once": false,
                "phase": "Combat"
            }
        ],
        "units": ["LordVigilant", "LordVertiant", "Procecutors", "Liberators"]
        
    },
    {
        "id": "skaven",
        "name": "Skaven",
        "battleTraits": [
        {
                "id": "shieldOfAzyr",
                "name": "Shield of Azyr",
                "effect": "Pick a friendly Unit, that unit has Ward 5+",
                "once": true,
                "phase": "Hero"
        },
        {
                "id": "stormCharge",
                "name": "Storm Charge",
                "effect": "Pick a friendly unit that is not in combat, that unit can charge this turn even if a run was used",
                "once": true,
                "phase": "Charge"
        }
        ],
        "regimentAbilities": [
            {
                "id": "strikeWhereNeeded",
                "name": "Strike Where Needed",
                "effect": "Free Retreat",
                "once": true,
                "phase": "Combat"
            },
            {
                "id": "blazeOfGlory",
                "name": "Blaze of Glory",
                "effect": "Pick a friendly unit that is in combat, each time a model is slain, make a vengance roll of D6.  On 4+ inflict 1 mortal damage",
                "once": false,
                "phase": "Combat"
            }
        ],
        "units": ["LordVigilant", "LordVertiant", "Procecutors", "Liberators"]
        
    }
]
};