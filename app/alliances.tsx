import { factions } from "./factions";


export type Alliance = {
    id: string;
    name: string;
    factions: NVP[];
}

export type NVP = {
    id: number;
    name: string;
}

export const Alliances = {
    "alliances": [
        {
            "id": "order",
            "name": "Order",
            "factions": [
                {
                    "id" : factions.stormcastVigilantBrotherHood,
                    "name": "Stormcast Eternals - Vigilant Brotherhood"
                 },
                 { 
                    "id": factions.stormcastYndrastra, 
                    "name": "Stormcast Eternals - Yndrastra's Spearhead"
                 },
                 {
                    "id": factions.daughtersOfKhaineHeartflayerTroupe,
                    "name": "Daughters of Khaine"
                  },
                  {
                    "id": factions.fyreslayersSageAxeband,
                    "name": "Fyreslayers"
                  },
                  {
                    "id": factions.kharadronOverlordsSkyhammerTaskForce,
                    "name": "Kharadron Overlords"
                  },
                  {
                    "id": factions.seraphonStarscaleWarhost,
                    "name": "seraphon"
                  },
                  {
                    "id": factions.sylvanethBitterbarkCopse,
                    "name": "Sylvaneth - Bitterbark Copse"
                  }
                ]
        },
        {
            "id": "death",
            "name": "Death",
            "factions": [
                {
                    "id": factions.nighthauntSlasherHost,
                    "name": "Nighthaunt"
                 },
                 {
                    "id": factions.soulblightGravelordsBloodCraveHunt,
                    "name": "Soulblight Gravelords"
                 },
                ]
        },
        {
            "id": "chaos",
            "name": "Chaos",
            "factions": [
                {
                    "id": factions.skavenGnawfeastClawPack,
                    "name": "Skaven - Gnawfeast Clawpack",
                 },
                 {
                    "id": factions.skavenWarpSparkClawPack,
                    "name": "Skaven - Warpspark Clawpack",
                 },
                 {
                    "id": factions.slaveToDarknessBloodWindLegion,
                    "name": "Slaves of Darkness",
                 },
                 {
                    "id": factions.maggotkinOfNurgleBleakHost,
                    "name": "Maggotkin of Nurgle"
                 },
                 {
                    "id": factions.disciplesOfTzeentchFluxbladeCoven,
                    "name": "Disciples of Tzeentch"
                 }
            ]
        },
        {
            "id": "destruction",
            "name": "Destruction",
            "factions": [
                {
                    "id": factions.gloomspiteGitzBadMoonMadmob,
                    "name": "Gloomspite Gitz"
                },
                {
                    "id": factions.orrukWarclans,
                    "name": "Orruk Warclans"
                }
            ]
        },
    ]
}