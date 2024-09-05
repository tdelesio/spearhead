export type Faction = {
    id: string;
    name: string;
    battleTraits: BattleTrait[];
    regimentAbilities: RegimentAbilitiy[];
    units: string[];
  }
  
  export type BattleTrait = {
    id: string;
    name: string;
    effect: string;
    once: boolean;
    phase: string;
  }
  
  export type RegimentAbilitiy = {
    id: string;
    name: string;
    effect: string;
    once: boolean;
    phase: string;
  }

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
                "id": "lurkingVermintide",
                "name": "The Lurking Vermintide",
                "effect": "Pick an undeployed friendly unit, set them up in the tunnels below.  On movement phase you can move from tunnels and set them up wholly within 6\" of a corner of the battlefield and more than 9\" from all enemy units",
                "once": true,
                "phase": "Movement"
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