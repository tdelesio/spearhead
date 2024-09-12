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
    table: boolean;
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
                "phase": "hero",
                "table": false
        },
        {
                "id": "stormCharge",
                "name": "Storm Charge",
                "effect": "Pick a friendly unit that is not in combat, that unit can charge this turn even if a run was used",
                "once": true,
                "phase": "charge",
                "table": false
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
                "phase": "movement",
                "table": false
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
        
    },
    {
        "id": "SoD",
        "name": "Slaves of Darkness",
        "battleTraits": [
        {
                "id": "eyeOfTheGods",
                "name": "Eye of the Gods",
                "effect": "Pick a friendly unit that is either contesting an objective not conotrlled by your opponent and is not in combat, or a unit that destroyed an enemy unit this turn.  Roll a dice.",
                "once": false,
                "phase": "passive",
                "table": true
        },
        ],
        "regimentAbilities": [
            {
                "id": "theDeadBanner",
                "name": "The Dead Banner",
                "effect": "Pick a friendly Chaos Warrior or Chaos Knight.  Immediately roll on the Eye of the Gods.",
                "once": false,
                "phase": "passive"
            },
            {
                "id": "fierceConquerors",
                "name": "Fierce Conquerors",
                "effect": "Add 3 to the control scores of friendly Chaos Warriors units.",
                "once": false,
                "phase": "passive"
            }
        ],
        "enhancements": [
            {
                    "id": "markOfKhorne",
                    "name": "Mark of Khorne",
                    "effect": "Add 1 to the Rend of yyour general's melee weapon if they charged in the same turn.",
                    "once": false,
                    "phase": "passive",
                },
                {
                    "id": "markOfTzeentch",
                    "name": "Mark of Tzeentch",
                    "effect": "Pick a friendly unit that is not your general.  Remove that unit from the battlefield and set it up again wholly within 6\" of your general and more than 6\" from all enemy units.  It cannot use Move abilities for the rest of the phase.",
                    "once": true,
                    "phase": "movement",
                },
                {
                    "id": "markOfNurgle",
                    "name": "Mark of Nurgle",
                    "effect": "Subtract 1 from wound rolls for the combat attacks that target your general",
                    "once": false,
                    "phase": "passive",
                },
                {
                    "id": "markOfSlaanesh",
                    "name": "Mark of Slaanesh",
                    "effect": "Your general has Strike-First",
                    "once": false,
                    "phase": "passive",
                },
            ],
        "units": ["Choas Lord (Hero)", "Chaos Chariot (1)", "Chaos Warriors (5)", "Chaos Warriors (5)", "Chaos Knights (5)"]
        
    },
    {
        "id": "DoK",
        "name": "Daughters of Khaine",
        "battleTraits": [
        {
                "id": "bloodRites",
                "name": "Blood Rites",
                "effect": "At the start of each battle round, all friendly units gain the Blood Rites passive abilities that corresponds to the battle round number.",
                "once": false,
                "phase": "passive",
                "table": true
        }
        ],
        "regimentAbilities": [
            {
                "id": "murderousEpiphany",
                "name": "Murderous Epiphany",
                "effect": "All friendly units gain the Blood Rites passive abiliity they would have gained at the start of the net battle round(they keep this ability for the rest of the battle, but they do not gain it for a second time at the start of the next battle round).",
                "once": false,
                "phase": "passive"
            },
            {
            "id": "blessingOfKhaine",
                "name": "Blessing of Khaine",
                "effect": "Pick a friendly unit.  Add 1 to ward rolls for the unit this phase.",
                "once": false,
                "phase": "passive"
            }
        ],
        "enhancements": [
            {
                    "id": "bathedInBlood",
                    "name": "Bathing in Blood",
                    "effect": "Each time a model is slain by your general, Heal 1.",
                    "once": false,
                    "phase": "passive",
                },
                {
                    "id": "fuledByRevenge",
                    "name": "Fueled by Revenge",
                    "effect": "Add 1 to the Rend of melee weapons used by friendly Blood Stalkers while they are wholly within 12\" of your general.",
                    "once": false,
                    "phase": "passive",
                },
                {
                    "id": "flaskOfShademist",
                    "name": "Flask of Shademist",
                    "effect": "Unit the end of the phase, subtract 1 from hit rolls for attacks that target friendly units while they are wholly within 12\" of your general.",
                    "once": true,
                    "phase": "passive",
                },
                {
                    "id": "zealousOperator",
                    "name": "Zealous Operator",
                    "effect": "Pick a friendly unit wholly within 9\" of your general that is not in combat.  Roll a dice for each slain model from the unit.  For each 5+, you can return 1 slain model to the unit.",
                    "once": false,
                    "phase": "hero",
                },],
        "units": ["Melusai Ironscale (Hero)", "Witch Aelves (5)", "Witch Aelves (5)", "Doomfire Warlocks (5)", "Blood Stalkers (5)"]
        
    },
    {
        "id": "fyreslayers",
        "name": "Fyreslayers",
        "battleTraits": [
        {
                "id": "urGoleRunes",
                "name": "Ur-Gole Runes",
                "effect": "Pick 1 of ur-gold runes, then make an activation roll of D6.  Each ur-gold runes can only be activated once per battle.  On a 1-5, the rune's standard effect applies.  On a 6, the enchanced effect applies.  Rune of Fury: S-Add 1 to hit rolls for combat attacks.  E-In addition, add 1 to the attacks.  Rune of Searing Heat: S-Add 1 to the Rend. E-In addition, add 1 to the damage. Rune of Fiery Determination: S-Ward 5 E-In addition, add 1 to save.  Run of Relentless Zeal: S- Add 2\" to the move E-In addition, add 2 to charge rolls",
                "once": false,
                "phase": "passive",
                "table": true
        }
        ],
        "regimentAbilities": [
            {
                "id": "magicTunnels",
                "name": "Magic Tunnels",
                "effect": "Pick 2 friendly units, remove them from the battlefield and set them up again anywhere on the battfield more than 6\" from all enemy units.",
                "once": false,
                "phase": "start"
            },
            {
            "id": "fyresteelThrowingAxe",
                "name": "Fyresteel Throwing Axe",
                "effect": "Pick any number of friendly units that are not in combat and are within 10\" of any enemy units.  For each of those units, pick a visible enemy unit with 10\" and roll a dice.  On 4+, inflict D3 mortal damage on that enemey unit.",
                "once": false,
                "phase": "shooting"
            }
        ],
        "enhancements": [
            {
                    "id": "tooStubbornToDie",
                    "name": "Too Stubborn to Die",
                    "effect": "Heal D3 your general",
                    "once": false,
                    "phase": "start",
                },
                {
                    "id": "spiritIfGrimnir",
                    "name": "Spirit of Grimnir",
                    "effect": "You can re-roll activation rolls you make for the Ur-Gold runes ability",
                    "once": false,
                    "phase": "passive",
                },
                {
                    "id": "hornOfGrimnir",
                    "name": "Horn of Grimnir",
                    "effect": "Pick your general to use this ability if they are not in combat.  Roll a dice for each friendly unit on the battlefield.  For each 3+, you can return 1 slain model to the unit.",
                    "once": false,
                    "phase": "hero",
                },
                {
                    "id": "powerfulPresence",
                    "name": "Powerful Presence",
                    "effect": "Add 3 to your general's control score.",
                    "once": false,
                    "phase": "passive",
                },],
        "units": ["Battlesmith (Hero)", "Hearthguard Berzerkers (5)", "Vulkite Berzerkers (5)", "Vulkite Berzerkers (5)", "Vulkite Berzerkers (5)", "Vulkite Berzerkers (5)"]
        
    },
]
};