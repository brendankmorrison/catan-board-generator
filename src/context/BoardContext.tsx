"use client";

// src/context/BoardContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { Board, BoardType } from "@/models/Board";

interface BoardContextType {
  board: Board;
  randomize_resources: () => void;
}

// Create Context with Default Values
export const BoardContext = createContext<BoardContextType | undefined>(undefined);

export const BoardProvider = ({ children }: { children: React.ReactNode }) => {
  const [board, setBoard] = useState<Board>(new Board(BoardType.REGULAR));

  function randomize_resources() { 
    var newTiles = board.tiles
    var resourceIndices = [5, 6, 7, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 29, 30, 31]
    var resources = []
    for (var index in resourceIndices) {
        resources.push(board.tiles[resourceIndices[index]])
    }

    for (let i = resources.length - 1; i > 0; i--) {
        // Get a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
    
        // Swap elements at indices i and j
        [resources[i], resources[j]] = [resources[j], resources[i]];
      }

    for (var index in resourceIndices) {
        newTiles[resourceIndices[index]] = resources[index]
    } 

    setBoard(new Board(BoardType.REGULAR, newTiles))
  }
  // Generate Board on Mount
  useEffect(() => {

  }, [board]);

  return (
    <BoardContext.Provider value={{board, randomize_resources}}>
      {children}
    </BoardContext.Provider>
  );
};