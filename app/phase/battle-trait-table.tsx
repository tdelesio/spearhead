import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AbilityTableProps {
  passedFaction: string;
  description: string;
}

export type BattleTraitTable ={
  faction: string;
  columnOneLabel: string;
  columnTwoLabel: string;
  labels: string[];
  abilities: string[];
}

export const battleTraitTable = {
  "factions": [
    {
      "faction": "SoD",
    "columnOneLabel": "D6",
    "columnTwoLabel": "Ability",
    "labels": ["1", "2", "3", "4", "5", "6"],
    "abilities": [
      "Snubbed by the Gods: No effect.",
      "Ward of Tzeentch.  This unit has Ward (6+).",
      "Grace of Slaanesh.  Add 1 to the run rolls for this unit.",
      "Blessing of Nurgle.  Subtract 1 from wound rolls for attacks that target this unit.",
      "Fury of Khorne.  Add 1 to the Rend of this unit's melee weapon.",
      "Champion of Chaos.  Pick any abililty from the table."
    ]
  },
  {
    "faction": "DoK",
    "columnOneLabel": "Round",
    "columnTwoLabel": "Ability",
    "labels": ["1", "2", "3", "4"],
    "abilities": [
      "Add 1 to run for this unit.",
      "Add 1 to the Charge roll for this unit.",
      "Add 1 to the hit rolls for combat attacks made by this unit.",
      "Add 1 to wound rolls for combat attacks made by this unit."
    ]
  },
  {
    "faction": "gloomspiteGitz",
    "columnOneLabel": "Ability",
    "columnTwoLabel": "Effect",
    "labels": ["Frothing Zealots", "Lunar Squids", "Moonlite Hide"],
    "abilities": [
      "If the unit is a Moonclan Stabbas unit, add 3 to its contorl score.",
      "If the unit is a Squiq Hooper unit, no mortal damaage is inflicted when it uses its retreat ability.",
      "If the unit is a Rockgut Troggoths unit, add 1 to save rolls for attacks that target this unit.",
    ]
  }
]

}


export function AbilityTable({ passedFaction, description }: AbilityTableProps) {


  const battleTrait = battleTraitTable.factions.find(trait => trait.faction === passedFaction);

  return (


  
      

    <Card
    key=""
    className="relative overflow-hidden transition-all duration-300 ease-in-out  w-full max-w-3xl overflow-hidden mx-auto w-full overflow-hidden">

<CardHeader>
          <CardTitle>Battle Trait </CardTitle><p>{description}</p>
        </CardHeader>
        <CardContent>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">{battleTrait?.columnOneLabel}</TableHead>
          <TableHead>{battleTrait?.columnTwoLabel}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {battleTrait?.abilities.map((ability, index) => (
    
          <TableRow key={index}>
            <TableCell className="font-medium">{battleTrait?.labels[index]}</TableCell>
            <TableCell>{ability}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </CardContent>

    </Card>
  )
}