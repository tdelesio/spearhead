export type Phase = {
    id: string;
    name: string;
    bgcolor: string;
    url: string;
}

export const Phase = {
    "phases": [
        {
            "id": "start",
            "name": "Start of Turn",
            "bgcolor": "bg-black",
            "url": "/phase"
            },
        {
            "id": "hero",
            "name": "Hero Phase",
            "bgcolor": "bg-yellow-500",
            "url": "/phase"
        },
        {
            "id": "movement",
            "name": "Movement Phase",
            "bgcolor": "bg-gray-500",
            "url": "/phase"
        },
        {
            "id": "shooting",
            "name": "Shooting Phase",
            "bgcolor": "bg-green-800",
            "url": "/phase"
        },
        {
            "id": "charge",
            "name": "Charge Phase",
            "bgcolor": "bg-orange-500",
            "url": "/phase"
        },
        {
            "id": "combat",
            "name": "Combat Phase",
            "bgcolor": "bg-red-600",
            "url": "/phase"
        },
        {
            "id": "end",
            "name": "End of Turn",
            "bgcolor": "bg-purple-600",
            "url": "/phase"
        },
        

    ]
}
