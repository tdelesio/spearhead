'use server'
 
import { redirect } from 'next/navigation'
import { Phase } from './phase'
 
export async function navigateToTactics(faction: string) {
  redirect(`?faction=${faction}`)
}

export async function navigateToStart(faction: string, battleTraits: string, regimentAbilities: string, enhancements: string) {
redirect(`/phase?faction=${faction}&battleTraits=${battleTraits}&regimentAbilities=${regimentAbilities}&enhancements=${enhancements}&phase=${Phase.phases[0].id}`)

}