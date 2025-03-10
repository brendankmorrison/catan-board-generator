import { Tile, ResourceTile, PortTile, ResourceType, PortType, PortDirection } from "./Tile";
import { DefaultBoardRegular } from "@/utils/constants";

export enum BoardType {
    REGULAR,
    EXPANSION
}

export class Board {
    board_type: BoardType;
    tiles: Tile[];
    rows: number[];
  
    constructor(board_type: BoardType, tiles: Tile[]= []) {
        this.board_type = board_type
        if (tiles.length == 0) {
            if (board_type == BoardType.REGULAR) {
                this.tiles = DefaultBoardRegular
                this.rows = [4, 5, 6, 7, 6, 5, 4]
            }
            else {
                this.tiles = []
                this.rows = [4, 5, 6, 7, 8, 7, 6, 5, 4]
            }
        }
        else {
            this.tiles = tiles
            this.rows = [4, 5, 6, 7, 6, 5, 4]
        }
    }
  }