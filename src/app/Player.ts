import { Audit } from './Audit';

interface PlayerAdditionalInfo {
  age: number | null;
  height: number | null;
  weight: number | null;
  power: number | null;
  speed: number | null;
  favouritePositions: string | null;
}

export interface TeamInfo {
  id: string;
  name: string;
  displayName: string;
}

export interface Player {
  playerId?: string;
  name: string;
  team: TeamInfo;
  shirtNo: number;
  additionalInfo: PlayerAdditionalInfo;
  audit: Audit;
}
