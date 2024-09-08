"use client"

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Factions } from "./factions"
import { navigateToStart } from './redirect'
import { Button } from "@/components/ui/button"
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
import { Input } from '@/components/ui/input'
import { ScrollArea } from "@/components/ui/scroll-area"

// const profileFormSchema = z.object({
//   faction: z.string().optional(),
//   battleTraits: z.string().optional(),
//   regimentAbilities: z.string().optional(),
//   enhancements: z.string().optional(),
// }).refine((data) => {
//   return data.faction || data.battleTraits || data.regimentAbilities || data.enhancements;
// }, {
//   message: "At least one selection is required",
//   path: ["battleTraits"], // This will show the error on the battleTraits field, but you can change it if needed
// });

const profileFormSchema = z.object({
  // faction: z.string({required_error: "Please select a faction.",}),
  // faction: z.string().optional(),
  battleTraits: z.string({required_error: "Please select a battle trait.",}),
  // battleTraits: z.string().optional(),
  regimentAbilities: z.string({required_error: "Please select a regiment ability.",}),
  // regimentAbilities: z.string().optional(),
  enhancements: z.string({required_error: "Please select an enhancement.",}),
  //enhancements: z.string().optional(),
})




type ProfileFormValues = z.infer<typeof profileFormSchema>

export default function SelectFactionTacticsForm() {
  const selectedFaction = useSearchParams().get('faction')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })

  const faction = Factions.factions.find(faction => faction.id === selectedFaction)
  const battleTraits = faction?.battleTraits || []
  const regimentAbilities = faction?.regimentAbilities || []
  const enhancements = faction?.enhancements || []

  const selectedBattleTraitId = form.watch('battleTraits')
  const selectedRegimentAbilityId = form.watch('regimentAbilities')
  const selectedEnhancementId = form.watch('enhancements')

  const selectedBattleTrait = battleTraits.find(trait => trait.id === selectedBattleTraitId)
  const selectedRegimentAbility = regimentAbilities.find(ability => ability.id === selectedRegimentAbilityId)
  const selectedEnhancement = enhancements.find(enhancement => enhancement.id === selectedEnhancementId)

  // const onSubmit = async (data: ProfileFormValues) => {
  //   console.log("onSubmit called", data)
  //   setIsSubmitting(true)
  //   // Simulating an API call
  //   await new Promise(resolve => setTimeout(resolve, 1000))
  //   setIsSubmitting(false)
  //   console.log("Form submitted successfully")
  // }
  
  const onSubmit = async (data: ProfileFormValues) => {
    setIsSubmitting(true)
    try {
      
      await navigateToStart(selectedFaction ?? '', data.battleTraits ?? '', data.regimentAbilities ?? '', data.enhancements ?? '')
    } catch (error) {
      console.error("Navigation error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleTestClick = () => {
    console.log("Test button clicked")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Select Battle Options for {faction?.name}</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
 
          <Card>
            <CardHeader>
              <CardTitle>Battle Tactics</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="battleTraits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Battle Traits</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Battle Tactic" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {battleTraits.map((battleTrait, index) => (
                          <SelectItem key={index} value={battleTrait.id}>{battleTrait.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {selectedBattleTrait && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md">
                  <p><strong>Name:</strong> {selectedBattleTrait.name} {selectedBattleTrait.once && <strong>(Once Per Battle)</strong>}</p>
                  <p><strong>Effect:</strong> {selectedBattleTrait.effect}</p>
                  <p><strong>Phase:</strong> {selectedBattleTrait.phase}</p>                  
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regiment Abilities</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="regimentAbilities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Regiment Abilities</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Regiment Ability" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {regimentAbilities.map((regimentAbility, index) => (
                          <SelectItem key={index} value={regimentAbility.id}>{regimentAbility.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {selectedRegimentAbility && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md">
                  <p><strong>Name:</strong> {selectedRegimentAbility.name} {selectedRegimentAbility.once && <strong>(Once Per Battle)</strong>}</p>
                  <p><strong>Effect:</strong> {selectedRegimentAbility.effect}</p>
                  <p><strong>Phase:</strong> {selectedRegimentAbility.phase}</p>

                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enhancements</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="enhancements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enhancements</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Hero Enhancement" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {enhancements.map((enhancement, index) => (
                          <SelectItem key={index} value={enhancement.id}>{enhancement.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {selectedEnhancement && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md">
                  <p><strong>Name:</strong> {selectedEnhancement.name} {selectedEnhancement.once && <strong>(Once Per Battle)</strong>}</p>
                  <p><strong>Effect:</strong> {selectedEnhancement.effect}</p>
                  <p><strong>Phase:</strong> {selectedEnhancement.phase}</p>

                </div>
              )}
            </CardContent>
          </Card>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Setting Tactics..." : "Set Tactics"}
          </Button>

        </form>
      </Form>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Units for {faction?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px] rounded-md border p-4">
            <ul className="space-y-2">
              {faction?.units.map((unit, index) => (
                <li key={index} className="text-gray-700">{unit}</li>
              ))}
            </ul>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}