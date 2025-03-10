"use client";

import { HexTile } from "@/components/Board";
import { useContext } from "react";
import { BoardContext } from "@/context/BoardContext";

import { useBoard } from "@/hooks/useBoard";


export default function Board({ label }: { label: string }) {
    const { board } = useBoard()
    const TILE_WIDTH = 20 * 4
    const TILE_HEIGHT = 20 * 4
    const OVERLAP = 6
    const BORDER_WIDTH = 2
    const GAP = 1
    const OFFSET_STEP = (TILE_WIDTH / 2) + (GAP*4)/2;

    const images = ["/rock.png", "/hay.png", "/brick.png", "/sheep.png", "/wood.png"]

    return(
        <div className={`flex flex-col border-1 border-blue-500 gap-1 pt-6`}>
            {board.rows.map((tileCount, rowIndex) => {
                return(
                    <div key={rowIndex} 
                        className={`flex flex-row -mt-6 gap-1`}
                        style={{ transform: `translateX(${Math.round((Math.max(...board.rows) - tileCount) * OFFSET_STEP)}px)` }}
                    > 
                        {Array.from({ length: tileCount }).map((_, index) => {
                            return (
                                <HexTile key={index} label="Hex" width={ TILE_WIDTH } height={TILE_HEIGHT} image_path={board.tiles[board.rows.slice(0, rowIndex).reduce((acc, curr) => acc + curr, 0) + index].image_path}/>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}