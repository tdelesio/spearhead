export type Faction = {
    id: string;
    name: string;
    battleTraits: BattleTrait[];
    regimentAbilities: RegimentAbilitiy[];
    enhancements: Enhancement[];
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

  export type Enhancement = {
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
                "effect": "Pick a friendly Unit.  Unit the start of your next turn, that unit has Ward 5+",
                "once": true,
                "phase": "hero"
        },
        {
                "id": "stormCharge",
                "name": "Storm Charge",
                "effect": "Pick a friendly unit that is not in combat, that unit can charge this turn even if a run was used",
                "once": true,
                "phase": "charge"
        }
        ],
        "regimentAbilities": [
            {
                "id": "strikeWhereNeeded",
                "name": "Strike Where Needed",
                "effect": "Free Retreat",
                "once": true,
                "phase": "movement"
            },
            {
                "id": "blazeOfGlory",
                "name": "Blaze of Glory",
                "effect": "Pick a friendly unit that is in combat, each time a model is slain, make a vengance roll of D6.  On 4+ inflict 1 mortal damage",
                "once": false,
                "phase": "combat"
            }
        ],
        "enhancements": [
            {
                    "id": "hallowedScrolls",
                    "name": "Hallowed Scrolls",
                    "effect": "Ward 5+",
                    "once": false,
                    "phase": "combat",
                },
                {
                    "id": "morrdaTalon",
                    "name": "Morrda's Talon",
                    "effect": "Hallowed Greataxe has Crit (Mortal)",
                    "once": false,
                    "phase": "passive",
                },
                {
                    "id": "quickSilverDraught",
                    "name": "Quicksilver Draught",
                    "effect": "Your general has Strike-First this phase",
                    "once": true,
                    "phase": "combat",
                },
                {
                    "id": "nullPendant",
                    "name": "Null Pendant",
                    "effect": "Roll a dice for each enemy unit contesting the same objective, on a 2+, subtract the roll from the control score of that enemy unit this turn",
                    "once": true,
                    "phase": "end",
                },
            ],
        "units": ["LordVigilant (Hero)", "LordVertiant (1)", "Procecutors (5)", "Liberators (5)"]
        
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
                "phase": "movement"
        }
        ],
        "regimentAbilities": [
            {
                "id": "warpstoneLacedBullets",
                "name": "Warpstone Laced Bullets",
                "effect": "Pick a ranged weapon on a friendly unit.  The weapon has Crit (Mortal) this phase.",
                "once": true,
                "phase": "shooting"
            },
            {
            "id": "toQuickToHit",
                "name": "To Quick to Hit",
                "effect": "No mortal damaged is inflicted when they use Retreat.",
                "once": false,
                "phase": "movement"
            }
        ],
        "enhancements": [
            {
                    "id": "leadTheSeethingHorde",
                    "name": "Lead the Seething Horde",
                    "effect": "Instead of using the setup instructions in the Call for Reinforcements ability, the replacement unit can be set up wholly within 13\" of this unit and not in combat",
                    "once": false,
                    "phase": "movement",
                },
                {
                    "id": "skryreConnections",
                    "name": "Skryre Connections",
                    "effect": "Your generals Ratling Pistol has an Attack characteristic of of 2D6 instead of D6.",
                    "once": false,
                    "phase": "passive",
                },
                {
                    "id": "warpstoneCharm",
                    "name": "Warpstone Charm",
                    "effect": "Subtract 1 from save rolls for enemy unit in combat with your general",
                    "once": false,
                    "phase": "passive",
                },
                {
                    "id": "cloakOfStitchedVictories",
                    "name": "Cloak of Stitched Victories",
                    "effect": "Your general has Ward 5+",
                    "once": false,
                    "phase": "passive",
                },],
        "units": ["Clawlord on Gnaw-beast (Hero)", "Grey Seer (1)", "Warlock Engineer (1)", "Clanrats (10)", "Clanrats (10)", "Rat Orges (3)"]
        
    }
]
};