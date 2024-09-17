"use client"

import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Alliances, Factions, NVP } from "./factions"
import { navigateToTactics } from "./redirect"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'
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

const profileFormSchema = z.object({
  faction: z.string({
    required_error: "Please select a faction.",
  }),
  alliance: z.string({
    required_error: "Please select an alliance.",
  }),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export default function SelectFactionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [availableFactions, setAvailableFactions] = useState<NVP[]>([])
  const router = useRouter()

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })

  const onSubmit = async (data: ProfileFormValues) => {
    setIsSubmitting(true)
    try {
      await navigateToTactics(data.faction)
    } catch (error) {
      console.error("Navigation error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

 

useEffect(() => {
  const alliance = form.watch("alliance")
  if (alliance) {
    const selectedAlliance = Alliances.alliances.find(a => a.id === alliance)
    setAvailableFactions(selectedAlliance ? selectedAlliance.factions.map(f => typeof f === 'string' ? { id: f, name: f } : f) : [])
    form.setValue("faction", "") // Reset faction when alliance changes
  }
}, [form.watch("alliance")])

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6">Select Your Faction</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        <FormField
            control={form.control}
            name="alliance"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Alliance</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an alliance" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Alliances.alliances.map((alliance) => (
                      <SelectItem key={alliance.id} value={alliance.id}>
                        {alliance.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose your alliance to view available factions.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
              
          
              <FormField
            control={form.control}
            name="faction"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Faction</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a faction" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availableFactions.map((faction) => (
                      <SelectItem key={faction.id} value={faction.id}>
                        {faction.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose your faction to view its specific tactics and abilities.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Selecting..." : "Select Faction"}
          </Button>
        </form>
      </Form>
    </div>
  )
}