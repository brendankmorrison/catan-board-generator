'use client'
import Image from 'next/image'
import { useBoard } from '@/hooks/useBoard'
import { BoardType } from '@/context/BoardContext'

export default function Controls({ label }: { label: string }) {
  const board = useBoard()
  return (
    <div className={`flex flex-col border-1 border-blue-500 gap-1 pt-6`}>
      <button
        onClick={() => {
          board.randomize_resources()
        }}
        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 z-10'
      >
        randomize resources
      </button>
      <button
        onClick={() => {
          board.set_board_type(BoardType.REGULAR)
        }}
        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 z-10'
      >
        Regular
      </button>
      <button
        onClick={() => {
          board.set_board_type(BoardType.EXPANSION)
        }}
        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 z-10'
      >
        Expansion
      </button>
    </div>
  )
}
