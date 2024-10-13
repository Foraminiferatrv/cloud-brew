export type Brew = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  updatedAt: string;
  createdAt: string;
};

export enum EventTypes {
  GRIND_CHANGED = "GRIND_CHANGED",
  TEMPERATURE_CHANGED = "TEMPERATURE_CHANGED",
  WEIGHT_CHANGED = "WEIGHT_CHANGED",
  COMMENT = "COMMENT",
}

export type TemperatureChange = {
  from: number;
  to: number;
};

export type WeightChange = {
  from: number;
  to: number;
};

export type BrewHistoryItem = {
  id: number;
  updatedAt: string;
  createdAt: string;
  eventType: EventTypes;
  comment?: string;
  temperature?: TemperatureChange;
  weight?: WeightChange;
};
