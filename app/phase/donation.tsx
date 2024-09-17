'use client'

import { useState } from "react"
import { CarouselFirst } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Component() {
  const [round, setRound] = useState(1)
  const [showDonateModal, setShowDonateModal] = useState(false)

  const handleCarouselFirstClick = () => {
    if (round < 4) {
      setRound(round + 1)
    } else {
      setShowDonateModal(true)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Current Round: {round}</h1>
      <CarouselFirst onClick={handleCarouselFirstClick} className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
        Next Round
      </CarouselFirst>

      <Dialog open={showDonateModal} onOpenChange={setShowDonateModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank you for playing!</DialogTitle>
            <DialogDescription>
              You've completed all 4 rounds. Would you like to support our project?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button asChild>
              <Link href="https://example.com/donate" target="_blank" rel="noopener noreferrer">
                Donate Now
              </Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}