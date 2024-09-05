'use server'
 
import { redirect } from 'next/navigation'
 
export async function navigateToTactics(data: FormData) {
    console.log(data)
  redirect(`?faction=${data.get('faction')}`)
}

export async function navigateToStart(data: FormData) {
  console.log(data)
redirect(`/rounds/start?faction=${data.get('faction')}&battleTraits=${data.get('battleTraits')}&regimentAbilities=${data.get('regimentAbilities')}&enhancements=${data.get('enchancments')}&`)
}