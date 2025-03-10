import { Tile, ResourceTile, PortTile, ResourceType, PortType, PortDirection } from "@/models/Tile";

const TILE_WIDTH = 20 * 4
const TILE_HEIGHT = 20 * 4
const OVERLAP = 6
const BORDER_WIDTH = 2
const ROWS = [4, 5, 6, 7, 6, 5, 4]
const GAP = 1
const OFFSET_STEP = (TILE_WIDTH / 2) + (GAP*4)/2;

export const DefaultBoardRegular = [
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