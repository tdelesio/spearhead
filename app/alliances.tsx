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
                    "name": "Daughters of Khaine - Heartflayer Troupe"
                  },
                  {
                    "id": factions.fyreslayersSageAxeband,
                    "name": "Fyreslayers - Saga Axeband"
                  },
                  {
                    "id": factions.kharadronOverlordsSkyhammerTaskForce,
                    "name": "Kharadron Overlords - Skyhammer Task Force"
                  },
                  {
                    "id": factions.seraphonStarscaleWarhost,
                    "name": "Seraphon - Starscale Warhost"
                  },
                //   {
                //     "id": factions.sylvanethBitterbarkCopse,
                //     "name": "Sylvaneth - Bitterbark Copse"
                //   },
                  {
                        "id": factions.luminethRealmLordsGlitteringPhalanx,
                        "name": "Lumineth Realm-Lords - Glittering Phalanx"
                  }

                ]
        },
        {
            "id": "death",
            "name": "Death",
            "factions": [
                {
                    "id": factions.nighthauntSlasherHost,
                    "name": "Nighthaunt- Slasher Host"
                 },
                 {
                    "id": factions.soulblightGravelordsBloodCraveHunt,
                    "name": "Soulblight Gravelords - Bloodcrave Hunt"
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
                    "name": "Slaves of Darkness - Bloodwind Legion",
                 },
                 {
                    "id": factions.maggotkinOfNurgleBleakHost,
                    "name": "Maggotkin of Nurgle - Bleak Host"
                 },
                 {
                    "id": factions.disciplesOfTzeentchFluxbladeCoven,
                    "name": "Disciples of Tzeentch - Fluxblade Coven"
                 }
            ]
        },
        {
            "id": "destruction",
            "name": "Destruction",
            "factions": [
                {
                    "id": factions.gloomspiteGitzBadMoonMadmob,
                    "name": "Gloomspite Gitz - Bad Moon Madmob"
                },
                {
                    "id": factions.orrukWarclans,
                    "name": "Orruk Warclans - Swampskulka Gang"
                }
            ]
        },
    ]
}