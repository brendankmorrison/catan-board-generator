"use client";
import Image from "next/image";
import { useBoard } from "@/hooks/useBoard";

export default function Controls({ label }: { label: string }) { 
    const { board, randomize_resources} = useBoard()
    return(
        <div className={`flex flex-col border-1 border-blue-500 gap-1 pt-6`}>
            <button onClick={() => {randomize_resources(); console.log(board.tiles[6])}} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 z-10">randomize resources</button>
        </div>
    )
    
}