'use server'
 
import { redirect } from 'next/navigation'
import { Phase } from './phase'
 
export async function navigateToTactics(data: FormData) {
    console.log(data)
  redirect(`?faction=${data.get('faction')}`)
}

export async function navigateToStart(data: FormData) {
  console.log(data)
redirect(`/phase?faction=${data.get('faction')}&battleTraits=${data.get('battleTraits')}&regimentAbilities=${data.get('regimentAbilities')}&enhancements=${data.get('enchancments')}&phase=${Phase.phases[0].id}`)

}