import Image from "next/image";

import { BoardProvider } from "@/context/BoardContext";
import { Board, HexTile } from "@/components/Board";
import Controls from "@/components/Controls";

export default function Home() {
  return (
      <BoardProvider>
        <div className="flex justify-between items-center h-screen px-10">
          <Image src="/background.png" alt="Description" layout="fill" className="z-0"/>
          <Controls label="controls"/>
          <Board label="board"/>
        </div>
      </BoardProvider>
  );
}
