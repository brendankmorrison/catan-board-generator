import {
  Tile,
  ResourceTile,
  PortTile,
  ResourceType,
  PortType,
  PortDirection,
  NumberTile,
} from '@/models/Tile'

export const ROWS_REGULAR = [4, 5, 6, 7, 6, 5, 4]
export const RESOURCE_INDICES_REGULAR = [
  5, 6, 7, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 29, 30, 31,
]
export const PORT_INDICES_REGULAR = [
  5, 6, 7, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 29, 30, 31,
]

export const DEFAULT_BOARD_REGULAR = [
  // Row 1
  new PortTile(PortType.ANY, PortDirection.RIGHT_DOWN),
  new PortTile(PortType.BLANK, PortDirection.RIGHT_DOWN),
  new PortTile(PortType.HAY, PortDirection.LEFT_DOWN),
  new PortTile(PortType.BLANK, PortDirection.LEFT_DOWN),
  // Row 2
  new PortTile(PortType.ANY, PortDirection.RIGHT_DOWN),
  new ResourceTile(ResourceType.ROCK),
  new ResourceTile(ResourceType.SHEEP),
  new ResourceTile(ResourceType.WOOD),
  new PortTile(PortType.ROCK, PortDirection.LEFT_DOWN),
  // Row 3
  new PortTile(PortType.WOOD, PortDirection.RIGHT_MIDDLE),
  new ResourceTile(ResourceType.HAY),
  new ResourceTile(ResourceType.BRICK),
  new ResourceTile(ResourceType.SHEEP),
  new ResourceTile(ResourceType.BRICK),
  new PortTile(PortType.BLANK, PortDirection.LEFT_DOWN),
  // Row 4
  new PortTile(PortType.BLANK, PortDirection.RIGHT_MIDDLE),
  new ResourceTile(ResourceType.HAY),
  new ResourceTile(ResourceType.WOOD),
  new ResourceTile(ResourceType.ROBBER),
  new ResourceTile(ResourceType.WOOD),
  new ResourceTile(ResourceType.ROCK),
  new PortTile(PortType.ANY, PortDirection.LEFT_MIDDLE),
  // Row 5
  new PortTile(PortType.BRICK, PortDirection.RIGHT_MIDDLE),
  new ResourceTile(ResourceType.WOOD),
  new ResourceTile(ResourceType.ROCK),
  new ResourceTile(ResourceType.HAY),
  new ResourceTile(ResourceType.SHEEP),
  new PortTile(PortType.BLANK, PortDirection.LEFT_MIDDLE),
  // Row 6
  new PortTile(PortType.BLANK, PortDirection.RIGHT_MIDDLE),
  new ResourceTile(ResourceType.BRICK),
  new ResourceTile(ResourceType.HAY),
  new ResourceTile(ResourceType.SHEEP),
  new PortTile(PortType.SHEEP, PortDirection.LEFT_UP),
  // Row 7
  new PortTile(PortType.ANY, PortDirection.RIGHT_UP),
  new PortTile(PortType.BLANK, PortDirection.RIGHT_UP),
  new PortTile(PortType.ANY, PortDirection.LEFT_UP),
  new PortTile(PortType.BLANK, PortDirection.RIGHT_UP),
]

export const DEFAULT_NUMBERS_REGULAR = [
  // Row 1
  undefined,
  undefined,
  undefined,
  undefined,
  // Row 2
  undefined,
  new NumberTile(10),
  new NumberTile(2),
  new NumberTile(9),
  undefined,
  // Row 3
  undefined,
  new NumberTile(12),
  new NumberTile(6),
  new NumberTile(4),
  new NumberTile(10),
  undefined,
  // Row 4
  undefined,
  new NumberTile(9),
  new NumberTile(11),
  undefined,
  new NumberTile(3),
  new NumberTile(8),
  undefined,
  // Row 5
  undefined,
  new NumberTile(8),
  new NumberTile(3),
  new NumberTile(4),
  new NumberTile(5),
  undefined,
  // Row 6
  undefined,
  new NumberTile(5),
  new NumberTile(6),
  new NumberTile(11),
  undefined,
  // Row 7
  undefined,
  undefined,
  undefined,
  undefined,
]

export const ROWS_EXPANSION = [4, 5, 6, 7, 8, 7, 6, 5, 4]
export const RESOURCE_INDICES_EXPANSION = [
  5, 6, 7, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 31, 32,
  33, 34, 35, 38, 39, 40, 41, 44, 45, 46,
]
export const PORT_INDICES_EXPANSION = [
  5, 6, 7, 10, 11, 12, 13, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 31, 32,
  33, 34, 35, 38, 39, 40, 41, 44, 45, 46,
]

export const DEFAULT_BOARD_EXPANSION = [
  // Row 1
  new PortTile(PortType.ANY, PortDirection.RIGHT_DOWN),
  new PortTile(PortType.BLANK, PortDirection.RIGHT_DOWN),
  new PortTile(PortType.SHEEP, PortDirection.LEFT_DOWN),
  new PortTile(PortType.BLANK, PortDirection.LEFT_DOWN),
  // Row 2
  new PortTile(PortType.BLANK, PortDirection.RIGHT_DOWN),
  new ResourceTile(ResourceType.BRICK),
  new ResourceTile(ResourceType.SHEEP),
  new ResourceTile(ResourceType.ROBBER),
  new PortTile(PortType.ANY, PortDirection.LEFT_DOWN),
  // Row 3
  new PortTile(PortType.BLANK, PortDirection.RIGHT_MIDDLE),
  new ResourceTile(ResourceType.BRICK),
  new ResourceTile(ResourceType.HAY),
  new ResourceTile(ResourceType.ROCK),
  new ResourceTile(ResourceType.BRICK),
  new PortTile(PortType.BLANK, PortDirection.LEFT_DOWN),
  // Row 4
  new PortTile(PortType.ROCK, PortDirection.RIGHT_MIDDLE),
  new ResourceTile(ResourceType.WOOD),
  new ResourceTile(ResourceType.ROCK),
  new ResourceTile(ResourceType.WOOD),
  new ResourceTile(ResourceType.HAY),
  new ResourceTile(ResourceType.SHEEP),
  new PortTile(PortType.BLANK, PortDirection.LEFT_MIDDLE),
  // Row 5
  new PortTile(PortType.BLANK, PortDirection.RIGHT_MIDDLE),
  new ResourceTile(ResourceType.ROBBER),
  new ResourceTile(ResourceType.SHEEP),
  new ResourceTile(ResourceType.HAY),
  new ResourceTile(ResourceType.ROCK),
  new ResourceTile(ResourceType.SHEEP),
  new ResourceTile(ResourceType.HAY),
  new PortTile(PortType.ANY, PortDirection.LEFT_MIDDLE),
  // Row 6
  new PortTile(PortType.SHEEP, PortDirection.RIGHT_UP),
  new ResourceTile(ResourceType.WOOD),
  new ResourceTile(ResourceType.ROCK),
  new ResourceTile(ResourceType.SHEEP),
  new ResourceTile(ResourceType.BRICK),
  new ResourceTile(ResourceType.WOOD),
  new PortTile(PortType.BLANK, PortDirection.LEFT_MIDDLE),
  // Row 7
  new PortTile(PortType.HAY, PortDirection.RIGHT_MIDDLE),
  new ResourceTile(ResourceType.WOOD),
  new ResourceTile(ResourceType.HAY),
  new ResourceTile(ResourceType.WOOD),
  new ResourceTile(ResourceType.HAY),
  new PortTile(PortType.BRICK, PortDirection.LEFT_UP),
  // Row 8
  new PortTile(PortType.BLANK, PortDirection.RIGHT_MIDDLE),
  new ResourceTile(ResourceType.BRICK),
  new ResourceTile(ResourceType.SHEEP),
  new ResourceTile(ResourceType.ROCK),
  new PortTile(PortType.SHEEP, PortDirection.LEFT_MIDDLE),
  // Row 9
  new PortTile(PortType.ANY, PortDirection.RIGHT_UP),
  new PortTile(PortType.BLANK, PortDirection.RIGHT_UP),
  new PortTile(PortType.WOOD, PortDirection.LEFT_UP),
  new PortTile(PortType.BLANK, PortDirection.RIGHT_UP),
]

export const DEFAULT_NUMBERS_EXPANSION = [
  // Row 1
  undefined,
  undefined,
  undefined,
  undefined,
  // Row 2
  undefined,
  new NumberTile(10),
  new NumberTile(6),
  undefined,
  undefined,
  // Row 3
  undefined,
  new NumberTile(6),
  new NumberTile(2),
  new NumberTile(9),
  new NumberTile(11),
  undefined,
  // Row 4
  undefined,
  new NumberTile(3),
  new NumberTile(11),
  new NumberTile(5),
  new NumberTile(10),
  new NumberTile(4),
  undefined,
  // Row 4
  undefined,
  undefined,
  new NumberTile(5),
  new NumberTile(4),
  new NumberTile(6),
  new NumberTile(3),
  new NumberTile(8),
  undefined,
  // Row 4
  undefined,
  new NumberTile(12),
  new NumberTile(10),
  new NumberTile(2),
  new NumberTile(4),
  new NumberTile(11),
  undefined,
  // Row 5
  undefined,
  new NumberTile(8),
  new NumberTile(3),
  new NumberTile(9),
  new NumberTile(5),
  undefined,
  // Row 6
  undefined,
  new NumberTile(9),
  new NumberTile(12),
  new NumberTile(8),
  undefined,
  // Row 7
  undefined,
  undefined,
  undefined,
  undefined,
]
