class Settings {
  TILE_SIZE: number
  NUMBER_TILE_SIZE: number
  OVERLAP: number
  BORDER_WIDTH: number
  GAP: number
  OFFSET_STEP: number

  constructor() {
    this.TILE_SIZE = 20 * 4
    this.NUMBER_TILE_SIZE = 8 * 4
    this.OVERLAP = 6
    this.BORDER_WIDTH = 2
    this.GAP = 1
    this.OFFSET_STEP = this.TILE_SIZE / 2 + (this.GAP * 4) / 2
  }
}

export const SETTINGS = new Settings()
