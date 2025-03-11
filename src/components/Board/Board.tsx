'use client'

import { Tile, NumberTile } from '@/components/Board'
import { useContext } from 'react'
import { BoardContext } from '@/context/BoardContext'
import { SETTINGS } from '@/utils/settings'
import { TileType } from '@/models/Tile'

import { useBoard } from '@/hooks/useBoard'

export default function Board({ label }: { label: string }) {
  const board = useBoard()

  return (
    <div className={`flex flex-col gap-${SETTINGS.GAP} pt-${SETTINGS.OVERLAP}`}>
      {board.rows.map((tileCount, rowIndex) => {
        return (
          <div
            key={rowIndex}
            className={`flex flex-row -mt-${SETTINGS.OVERLAP} gap-${SETTINGS.GAP}`}
            style={{
              transform: `translateX(${Math.round((Math.max(...board.rows) - tileCount) * SETTINGS.OFFSET_STEP)}px)`,
            }}
          >
            {Array.from({ length: tileCount }).map((_, index) => {
              return (
                <div key={index}>
                  {board.number_tiles[
                    board.rows
                      .slice(0, rowIndex)
                      .reduce((acc, curr) => acc + curr, 0) + index
                  ] && (
                    <NumberTile
                      label='tile'
                      size={SETTINGS.NUMBER_TILE_SIZE}
                      image_path={
                        board.number_tiles[
                          board.rows
                            .slice(0, rowIndex)
                            .reduce((acc, curr) => acc + curr, 0) + index
                        ]!.image_path
                      }
                    />
                  )}
                  <Tile
                    label='tile'
                    size={SETTINGS.TILE_SIZE}
                    image_path={
                      board.tiles[
                        board.rows
                          .slice(0, rowIndex)
                          .reduce((acc, curr) => acc + curr, 0) + index
                      ].image_path
                    }
                  />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
