'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Start of Turn', href: '/rounds/start?faction=${data.get("faction")}&battleTraits=${data.get("battleTraits")}&regimentAbilities=${data.get("regimentAbilities")}&enhancements=${data.get("enchancments")}', bgColor: 'bg-black' },
  { name: 'Hero Phase', href: '/rounds/hero?faction=${data.get("faction")}&battleTraits=${data.get("battleTraits")}&regimentAbilities=${data.get("regimentAbilities")}&enhancements=${data.get("enchancments")}', bgColor: 'bg-yellow-500' },
  { name: 'Movement Phase', href: '/rounds/movement?faction=${data.get("faction")}&battleTraits=${data.get("battleTraits")}&regimentAbilities=${data.get("regimentAbilities")}&enhancements=${data.get("enchancments")}', bgColor: 'bg-gray-500' },
  { name: 'Shooting Phase', href: '/rounds/shooting?faction=${data.get("faction")}&battleTraits=${data.get("battleTraits")}&regimentAbilities=${data.get("regimentAbilities")}&enhancements=${data.get("enchancments")}', bgColor: 'bg-green-800' },
  { name: 'Charge Phase', href: '/rounds/charge?faction=${data.get("faction")}&battleTraits=${data.get("battleTraits")}&regimentAbilities=${data.get("regimentAbilities")}&enhancements=${data.get("enchancments")}', bgColor: 'bg-orange-500' },
  { name: 'Combat Phase', href: '/rounds/combat?faction=${data.get("faction")}&battleTraits=${data.get("battleTraits")}&regimentAbilities=${data.get("regimentAbilities")}&enhancements=${data.get("enchancments")}', bgColor: 'bg-red-600' },
  { name: 'End of Turn', href: '/rounds/end?faction=${data.get("faction")}&battleTraits=${data.get("battleTraits")}&regimentAbilities=${data.get("regimentAbilities")}&enhancements=${data.get("enchancments")}', bgColor: 'bg-purple-600' },
]

export default function LeftNav() {
  const pathname = usePathname()

  return (
    <nav className="w-64 bg-gray-100 h-screen p-4">
      <div className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center p-3 rounded-lg transition-transform ${
                item.bgColor
              } text-white font-medium ${
                isActive ? 'scale-105 shadow-lg' : ''
              }`}
            >
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}