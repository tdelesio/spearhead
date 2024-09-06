"use client"
import { Factions } from "./factions";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { navigateToTactics } from "./redirect";
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


const profileFormSchema = z.object({
  faction: z
    .string({
      required_error: "Please select a faction.",
    }),
})


type ProfileFormValues = z.infer<typeof profileFormSchema>


export default function SelectFactionForm() {

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    // defaultValues,
    mode: "onChange",
  })


// export function Home() {
  return (
    

      
      // <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"> 
      
      <div>
      <Form {...form}>
      <form  className="space-y-8" action={navigateToTactics}>

      <FormField
          control={form.control}
          name="faction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Faction</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} name="faction">
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified faction to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Factions.factions.map((faction, index) => (
                    <SelectItem key={index} value={faction.id}>{faction.name}</SelectItem>
                  ))}
                {/* <SelectItem value="stormcast">Stormcast Eternals</SelectItem>
          <SelectItem value="DoK">Daughters of Khaine</SelectItem>
          <SelectItem value="SoD">Slaves of Darkness</SelectItem>
          <SelectItem value="skaven">Skaven</SelectItem> */}
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

      <Button type="submit">Select Faction</Button>
      </form>
      </Form>
      </div> 

      
  );
}
