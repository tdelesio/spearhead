

export type Alliance = {
    id: string;
    name: string;
    factions: NVP[];
}

export type NVP = {
    id: string;
    name: string;
}

export const Alliances = {
    "alliances": [
        {
            "id": "order",
            "name": "Order",
            "factions": [
                {
                    "id" : "stormcast1",
                    "name": "Stormcast Eternals - Vigilant Brotherhood"
                 },
                 { 
                    "id": "stormcast2", 
                    "name": "Stormcast Eternals - Yndrastra's Spearhead"
                 },
                 {
                    "id": "DoK",
                    "name": "Daughters of Khaine"
                  },
                  {
                    "id": "fyreslayers",
                    "name": "Fyreslayers"
                  },
                  {
                    "id": "kharadronOverlords",
                    "name": "Kharadron Overlords"
                  },
                  {
                    "id": "Seraphon",
                    "name": "seraphon"
                  },
                  {
                    "id": "sylvaneth",
                    "name": "Sylvaneth - Bitterbark Copse"
                  }
                ]
        },
        {
            "id": "death",
            "name": "Death",
            "factions": [
                {
                    "id": "nighthaunt",
                    "name": "Nighthaunt"
                 },
                 {
                    "id": "soulblight",
                    "name": "Soulblight Gravelords"
                 },
                ]
        },
        {
            "id": "chaos",
            "name": "Chaos",
            "factions": [
                {
                    "id": "skaven1",
                    "name": "Skaven - Gnawfeast Clawpack",
                 },
                 {
                    "id": "skaven2",
                    "name": "Skaven - Warpspark Clawpack",
                 },
                 {
                    "id": "SoD",
                    "name": "Slaves of Darkness",
                 },
                 {
                    "id": "maggotkin",
                    "name": "Maggotkin of Nurgle"
                 },
                 {
                    "id": "DoT",
                    "name": "Disciples of Tzeentch"
                 }
            ]
        },
        {
            "id": "destruction",
            "name": "Destruction",
            "factions": [
                {
                    "id": "gloomspiteGitz",
                    "name": "Gloomspite Gitz"
                },
                {
                    "id": "orrukWarclans",
                    "name": "Orruk Warclans"
                }
            ]
        },
    ]
}