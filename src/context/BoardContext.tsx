'use client'

// src/context/BoardContext.tsx
import React, { createContext, useCallback, useState } from 'react'
//import { Board } from "@/models/Board";
import {
  Tile,
  NumberTile,
  ResourceTile,
  PortTile,
  ResourceType,
  PortType,
  PortDirection,
} from '@/models/Tile'
import {
  ROWS_REGULAR,
  RESOURCE_INDICES_REGULAR,
  DEFAULT_BOARD_REGULAR,
  DEFAULT_NUMBERS_REGULAR,
  ROWS_EXPANSION,
  RESOURCE_INDICES_EXPANSION,
  DEFAULT_BOARD_EXPANSION,
  DEFAULT_NUMBERS_EXPANSION,
} from '@/utils/defaults'

export enum BoardType {
  REGULAR,
  EXPANSION,
}

interface BoardContextType {
  board_type: BoardType
  tiles: Tile[]
  number_tiles: (NumberTile | undefined)[]
  rows: number[]
  randomize_resources: () => void
  set_board_type: (board_type: BoardType) => void
}

// Create Context with Default Values
export const BoardContext = createContext<BoardContextType | undefined>(
  undefined,
)

export const BoardProvider = ({ children }: { children: React.ReactNode }) => {
  const [board_type, setBoardType] = useState<BoardType>(BoardType.EXPANSION)
  const [tiles, setTiles] = useState<Tile[]>([...DEFAULT_BOARD_EXPANSION])
  const [number_tiles, setNumberTiles] = useState<(NumberTile | undefined)[]>([
    ...DEFAULT_NUMBERS_EXPANSION,
  ])
  const [rows, setRows] = useState<number[]>(ROWS_EXPANSION)

  const randomize_resources = useCallback(() => {
    var newTiles = [...tiles]
    var resourceIndices =
      board_type == BoardType.REGULAR
        ? RESOURCE_INDICES_REGULAR
        : RESOURCE_INDICES_EXPANSION
    var resources = []
    for (var index in resourceIndices) {
      resources.push(newTiles[resourceIndices[index]])
    }

    for (let i = resources.length - 1; i > 0; i--) {
      // Get a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1))

      // Swap elements at indices i and j
      ;[resources[i], resources[j]] = [resources[j], resources[i]]
    }

    for (var index in resourceIndices) {
      newTiles[resourceIndices[index]] = resources[index]
    }

    setTiles([...newTiles])
  }, [board_type])

  const randomize_ports = useCallback(() => {
    var newTiles = [...tiles]
    var resourceIndices =
      board_type == BoardType.REGULAR
        ? RESOURCE_INDICES_REGULAR
        : RESOURCE_INDICES_EXPANSION
    var resources = []
    for (var index in resourceIndices) {
      resources.push(newTiles[resourceIndices[index]])
    }

    for (let i = resources.length - 1; i > 0; i--) {
      // Get a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1))

      // Swap elements at indices i and j
      ;[resources[i], resources[j]] = [resources[j], resources[i]]
    }

    for (var index in resourceIndices) {
      newTiles[resourceIndices[index]] = resources[index]
    }

    setTiles([...newTiles])
  }, [board_type])

  const set_board_type = (board_type: BoardType) => {
    setBoardType(board_type)
    setTiles(
      board_type == BoardType.REGULAR
        ? DEFAULT_BOARD_REGULAR
        : DEFAULT_BOARD_EXPANSION,
    )
    setNumberTiles(
      board_type == BoardType.REGULAR
        ? DEFAULT_NUMBERS_REGULAR
        : DEFAULT_NUMBERS_EXPANSION,
    )
    setRows(board_type == BoardType.REGULAR ? ROWS_REGULAR : ROWS_EXPANSION)
  }

  return (
    <BoardContext.Provider
      value={{
        board_type,
        tiles,
        number_tiles,
        rows,
        randomize_resources,
        set_board_type,
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}
