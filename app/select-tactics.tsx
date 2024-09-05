"use client"
import { useSearchParams } from 'next/navigation'
import { BattleTrait, Factions } from "./factions";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { navigateToStart } from './redirect';

const profileFormSchema = z.object({

    battleTraits: z
      .string({
        required_error: "Please select a faction.",
      }),
    regimentAbilities: z
      .string({
        required_error: "Please select a regiment ability.",
      }),

  })

type ProfileFormValues = z.infer<typeof profileFormSchema>

export default function SelectFactionTacticsForm() {

    const  selectedFaction  = useSearchParams().get('faction');

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        // defaultValues,
        mode: "onChange",
      })

    //   useEffect(() => {

    const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
    
    const faction = Factions.factions.find(faction => faction.id === selectedFaction);
    const battleTraits = faction?.battleTraits || [];
    const regimentAbilities = faction?.regimentAbilities || [];
    const selectedBattleTraitId = form.watch('battleTraits');
    const selectedBattleTrait = battleTraits.find(trait => trait.id === selectedBattleTraitId);
    const selectedRegimentAbilityId = form.watch('regimentAbilities');
    const selectedRegimentAbility = regimentAbilities.find(ability => ability.id === selectedRegimentAbilityId);

    // const handleBattleTraitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     setSelectedId(Number(e.target.value));
    // };

        // });
     
    return (
        <div>
        <div>
            <h1>Select Tactics for {faction?.name}</h1>
        </div>
        <div>
            <h1>Units:</h1>
        </div>
        <div>
        {faction?.units.map((unit, index) => (
                    <h2>{unit}</h2>
                  ))}
        </div>



        <div>
            {/* <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"> */}
      <Form {...form}>
      <form  className="space-y-8" action={navigateToStart}>

      <FormField
          control={form.control}
          name="battleTraits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Battle Traits</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} name="battleTraits">
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Battle Tactic" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                  battleTraits.map((battleTrait, index) => (
                    <SelectItem key={index} value={battleTrait.id}>{battleTrait.name}</SelectItem>
                  ))}
                
                </SelectContent>
              </Select>
              <FormDescription>
                {/* You can manage verified email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
            <div>Name: {selectedBattleTrait?.name}</div>
            <div>Effect: {selectedBattleTrait?.effect}</div>
            <div>Phase: {selectedBattleTrait?.phase}</div>
            <div>{selectedBattleTrait?.once ? "Once Per Battle" : ""}</div>
        </div>

        <FormField
          control={form.control}
          name="regimentAbilities"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Regiment Abilities</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} name="regimentAbilities">
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Regiment Ability" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                  regimentAbilities.map((regimentAbility, index) => (
                    <SelectItem key={index} value={regimentAbility.id}>{regimentAbility.name}</SelectItem>
                  ))}
                
                </SelectContent>
              </Select>
              <FormDescription>
                {/* You can manage verified email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
            <div>Name: {selectedRegimentAbility?.name}</div>
            <div>Effect: {selectedRegimentAbility?.effect}</div>
            <div>Phase: {selectedRegimentAbility?.phase}</div>
            <div>{selectedRegimentAbility?.once ? "Once Per Battle" : ""}</div>
        </div>

      <Button type="submit">Set Tactics</Button>
      </form>
      </Form>
           
        </div>
        </div>
    )
}