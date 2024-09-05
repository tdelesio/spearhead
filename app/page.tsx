"use client"

import SelectFactionForm from "./select-faction-form";
import SelectFactionTacticsForm from "./select-tactics";
import { useSearchParams } from 'next/navigation'

export default function HomePage() {
  const  faction  = useSearchParams().get('faction');

  return (
    <div className="space-y-6">
      <div>
  
        {      
   faction ? (
        <SelectFactionTacticsForm />
    ) : (
        <SelectFactionForm />
    )
        }
 
      </div>

       
    </div>
  )
}