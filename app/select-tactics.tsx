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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Input } from '@/components/ui/input';

const profileFormSchema = z.object({

  battleTraits: z
    .string({
      required_error: "Please select a faction.",
    }),
  regimentAbilities: z
    .string({
      required_error: "Please select a regiment ability.",
    }),
  enchancments: z
    .string({
      required_error: "Please select a enchancment.",
    }),

})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export default function SelectFactionTacticsForm() {

  const selectedFaction = useSearchParams().get('faction');

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    // defaultValues,
    mode: "onChange",
  })

  //   useEffect(() => {

  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const faction = Factions.factions.find(faction => faction.id === selectedFaction);

  const battleTraits = faction?.battleTraits || [];
  const selectedBattleTraitId = form.watch('battleTraits');
  const selectedBattleTrait = battleTraits.find(trait => trait.id === selectedBattleTraitId);

  const enchancments = faction?.enchancements || [];
  const selectedEnchancmentId = form.watch('enchancments');
  const selectedEnchancment = enchancments.find(enchancment => enchancment.id === selectedEnchancmentId);

  const regimentAbilities = faction?.regimentAbilities || [];
  const selectedRegimentAbilityId = form.watch('regimentAbilities');
  const selectedRegimentAbility = regimentAbilities.find(ability => ability.id === selectedRegimentAbilityId);


  // const handleBattleTraitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSelectedId(Number(e.target.value));
  // };

  // });

  return (
    <div>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Left side - Static Information */}
        <div className="md:w-1/2 p-6 bg-white">
          <h1 className="text-3xl font-bold mb-4">Select Tactics for {faction?.name}</h1>
          <p className="mb-4">Units:</p>
          <ul className="list-disc list-inside space-y-2">

            {faction?.units.map((unit, index) => (
              <li key={unit} className="text-gray-700">{unit}</li>
            ))}
          </ul>

        </div>

        {/* Right side - Form with Dropdowns */}
        <div className="md:w-1/2 p-6">
        <Form {...form}>
        <form className="space-y-8" action={navigateToStart}>
          <Card>
            <CardHeader>
              <CardTitle>Select your Battle Tractics</CardTitle>
              <CardDescription>Choose a Battle Trait, Regiment Ability and Enchancment</CardDescription>
            </CardHeader>
            <CardContent>
              
         <Input type="hidden" name="faction" value={selectedFaction ?? ''} />

                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="battleTraits"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Battle Traits</FormLabel>
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
                  </div>
                  <div className="space-y-2">
                    <div>Name: {selectedBattleTrait?.name}</div>
                    <div>Effect: {selectedBattleTrait?.effect}</div>
                    <div>Phase: {selectedBattleTrait?.phase}</div>
                    <div>{selectedBattleTrait?.once ? "Once Per Battle" : ""}</div>

                  </div>



                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="regimentAbilities"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Regiment Abilities</FormLabel>
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
                  </div>
                  <div className="space-y-2">

                    <div>Name: {selectedRegimentAbility?.name}</div>
                    <div>Effect: {selectedRegimentAbility?.effect}</div>
                    <div>Phase: {selectedRegimentAbility?.phase}</div>
                    <div>{selectedRegimentAbility?.once ? "Once Per Battle" : ""}</div>
                  </div>

                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="enchancments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Enchancments</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} name="enchancments">
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a Hero Enchancment" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {
                                enchancments.map((enchancment, index) => (
                                  <SelectItem key={index} value={enchancment.id}>{enchancment.name}</SelectItem>
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
                  </div>
                  <div className="space-y-2">
                    <div>Name: {selectedEnchancment?.name}</div>
                    <div>Effect: {selectedEnchancment?.effect}</div>
                    <div>Phase: {selectedEnchancment?.phase}</div>
                    <div>{selectedEnchancment?.once ? "Once Per Battle" : ""}</div>

                  </div>


              

            </CardContent>
            <CardFooter>
              <Button type="submit">Set Tactics</Button>
            </CardFooter>
          </Card>

          </form>
          </Form>
        </div>
      </div>












    </div>
  )
}