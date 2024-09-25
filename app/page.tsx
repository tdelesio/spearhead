"use client"

import { useSearchParams } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import SelectFactionForm from "./select-faction-form"
import SelectFactionTacticsForm from "./select-tactics"
import { Analytics } from "@vercel/analytics/react"

export default function HomePage() {
  const faction = useSearchParams().get('faction')

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <header className="sticky top-0 z-10 w-full bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">Spearhead Helper</h1>
          <Link href="https://warhammer.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/wh.jpg"
              alt="Warhammer Logo"
              width={50}
              height={12}
              className="dark:invert"
              priority
            />
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 space-y-8">
        <Analytics />
        {faction ? <SelectFactionTacticsForm /> : <SelectFactionForm />}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "https://www.warhammer-community.com/warhammer-age-of-sigmar-downloads/",
              title: "Downloads",
              description: "Find faction packs and game rules.",
            },
            {
              href: "https://www.warhammer.com/en-GB/spearhead",
              title: "Models",
              description: "See available models for your faction or start a new one.",
            },
            {
              href: "https://github.com/tdelesio/spearhead/issues",
              title: "Issues",
              description: "Bugs/Faction Requests/Feature Requests",
            },
            {
              href: "https://account.venmo.com/u/Tim-Delesio",
              title: "Thank Me",
              description: "Like what you see? Buy me a coffee.",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {item.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
            </Link>
          ))}
        </div>

        <h3>Overview</h3>
        <p>I built this app to help with running War Hammer AoS Spearhead games.  I found it difficult to manage abilities.  Some of them are one time use, others can be applied only during specific rounds and they are located on the Battle Traits, Regiment Abilities, and Enhancements as well as on Battle Tome cards.  All of this is hard to keep track of and most of the time I miss abilities that I could have used.  The idea of this app is to manage yourself and the faction you are playing with (not the game itself).  The phases are broken down just like the game expects.  You can either swipe to the next phase or click the arrow button on the navigation at the top.  If you click home, it resets all your choices and lets you start over.  I added a Victory Point track that appears on the End stage to help you keep track of that.  The Next Round button will go back to start and advnace the next round.  Eventually I will be adding logic to help with some abilites.</p>
        <h3>Getting Started and Cards</h3>
        <p>Start by selecting your Alliance and Faction.  There is also an option to deal (virtually) the Battle Tactic cards from Spearhead.  It functions as the actual deck and will provide you with 3 cards.  If you use them (either the command or the scoring), just click on them and it will be removed from your hand.  At the end of the round, your hand will be refilled back up to 3 cards.</p>
        <h3>Abilities</h3>
        <p>Abilities have been filtered to only show up during the phase that you can use it.  So for instance, if a Regiment Ability can only be used during HERO phase, it will not show up until that phase.  Passive abilties are always there.  The one time use cards are marked as such.  You can click on them if you would like the app to remember they were used.  The ability will be greyed out and marked as used.  I manually transcribed all the abilties and I probably made mistakes every where from spelling errors to marking things incorrectly.  If you find something, let me know and I will fix it.</p>
        
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-inner mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Spearhead Helper. All rights reserved.
        </div>
      </footer>
    </div>
  )
}