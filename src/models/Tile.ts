enum TileType {
    PORT,
    RESOURCE
}

export enum PortType {
    WOOD = "wood",
    BRICK = "brick",
    SHEEP = "sheep",
    HAY = "hay",
    ROCK = "rock",
    ANY = "any",
    BLANK = "blank"
}

export enum PortDirection {
    LEFT_DOWN = "left_down",
    LEFT_MIDDLE = "left_middle",
    LEFT_UP = "left_up",
    RIGHT_DOWN = "right_down",
    RIGHT_MIDDLE = "right_middle",
    RIGHT_UP = "right_up",
}

export enum ResourceType {
    WOOD = "wood",
    BRICK = "brick",
    SHEEP = "sheep",
    HAY = "hay",
    ROCK = "rock",
    ROBBER = "robber"
}

export abstract class Tile {
  type: TileType;
  image_path: string = ""

  constructor(type: TileType) {
    this.type = type;
  }
}

export class PortTile extends Tile {
  port_type: PortType
  port_direction: PortDirection
  image_path: string


  constructor(port_type: PortType, port_direction: PortDirection) {
    super(TileType.PORT);
    this.port_type = port_type
    this.port_direction = port_direction
    this.image_path = `/ports/${port_direction}/${port_type}.png`
  }

  getDescription(): string {
    return `Edge at ${this.image_path}`;
  }
}

export class ResourceTile extends Tile {
  resource_type: ResourceType;
  image_path: string

  constructor(resource_type: ResourceType) {
    super(TileType.RESOURCE);
    this.resource_type = resource_type;
    this.image_path = `/tiles/${resource_type}.png`
  }

  getDescription(): string {
    return `resource ${this.resource_type}`;
  }
}