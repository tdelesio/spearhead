'use server'
 
import { redirect } from 'next/navigation'
import { Phase } from './phase'
 
export async function navigateToTactics(data: FormData) {
  redirect(`?faction=${data.get('faction')}`)
}

export async function navigateToStart(data: FormData) {
redirect(`/phase?faction=${data.get('faction')}&battleTraits=${data.get('battleTraits')}&regimentAbilities=${data.get('regimentAbilities')}&enhancements=${data.get('enhancments')}&phase=${Phase.phases[0].id}`)

}