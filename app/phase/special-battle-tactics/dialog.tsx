"use client"

import { BattleTrait, RegimentAbilitiy } from "@/app/factions";
import { getAbilityForRound, Phase, phases } from "@/app/phase";
import { Ability, Unit, Units } from "@/app/units";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogDescription, DialogPortal, DialogTitle } from "@radix-ui/react-dialog";
import React, { useEffect, useState, useCallback, useMemo  } from "react";

interface DialogCommandAbilitiesProps {
  selectedFactionId: number;
  selectedPhase: Phase;
  selectedBattleTrait: BattleTrait;
  selectedRegimentAbility: RegimentAbilitiy;
}








  export default function DialogCommandAbilities({
    selectedFactionId,
    selectedPhase,
    selectedBattleTrait,
    selectedRegimentAbility
  }: DialogCommandAbilitiesProps) {

    const [commandAbilities, setCommandAbilities] = useState<Ability[]>([]);
    const [usedAbilities, setUsedAbilities] = useState<Set<string>>(new Set())
    const [factionDialog, setShowFactionDialog] = useState(true)

    const factionUnits = useMemo(() => Units.factions.find(faction => faction.id === selectedFactionId), [selectedFactionId]);
    useEffect(() => {
      if (factionUnits && selectedRegimentAbility) {
        const abilities = buildCommandAbilities(selectedRegimentAbility, factionUnits);
        setCommandAbilities(abilities);
      }
    }, [selectedRegimentAbility, factionUnits]);

    const handleAbilityClick = useCallback((abilityId: string) => {
      setUsedAbilities(prev => {
        const newSet = new Set(prev);
        if (newSet.has(abilityId)) {
          newSet.delete(abilityId);
        } else {
          newSet.add(abilityId);
        }
        return newSet;
      });
    }, []);

    const renderAbilityCard = useCallback((item: Ability, skipCommands: boolean = true) => {
      const isUsed = usedAbilities.has(item?.id || '');
  
      if (item.tags && skipCommands) {
        return null;
      }
  
      return (
        <div className="pb-2" key={item.id}>
          <Card
            className={`relative overflow-hidden transition-all duration-300 ease-in-out w-full mx-auto
              ${isUsed ? 'bg-gray-300 dark:bg-gray-800' : 'bg-white text-black cursor-pointer hover:shadow-md'}`}
            onClick={() => handleAbilityClick(item?.id || '')}
          >
            <div className={`relative ${isUsed ? 'opacity-50' : ''}`}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-500 dark:text-gray-400">{item?.effect}</div>
              </CardContent>
            </div>
            {isUsed && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-500 dark:text-gray-400 opacity-75 rotate-[-20deg]">
                  USED
                </span>
              </div>
            )}
          </Card>
        </div>
      );
    }, [usedAbilities, handleAbilityClick]);

      

      function buildCommandAbilities(regimentAbilities:any, factionUnits:any):Ability[] {
        if (regimentAbilities.tags)
        {
          commandAbilities.push(regimentAbilities);
        }
    
        Phase.phases.map(selectedPhase => ( 
          factionUnits?.units?.map((unit:any) => (
              getAbilityForRound(unit as Unit, selectedPhase.id).map(ability => {
                if (ability.tags) {
                   commandAbilities.push(ability);
                 }
                }
            )
          ))
        ))
        return commandAbilities;
    }

    if (selectedPhase.id !== phases.start || !selectedBattleTrait || !selectedBattleTrait.dialog || commandAbilities.length === 0) {
      return null;
    }

    console.log("dialog");
    // if (selectedPhase.id === phases.start && selectedBattleTrait && selectedBattleTrait.dialog )//&& buildCommandAbilities(selectedRegimentAbility, factionUnits))
    return (


<Dialog open={factionDialog} onOpenChange={setShowFactionDialog}>
      <DialogPortal>
        <DialogContent className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedBattleTrait.dialog.name}</DialogTitle>
              <DialogDescription>{selectedBattleTrait.dialog.effect}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">


            
          { commandAbilities.map(ability =>

            renderAbilityCard(ability, false)
            )}

      </div>
            <DialogFooter className="mt-6">
              <Button onClick={() => setShowFactionDialog(false)}>Close</Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
// else return (
//  null
// );
}

