import { Audit } from './Audit';

export interface PlayerAdditionalInfo {
  age: number | null;
  height: number | null;
  weight: number | null;
  power: number | null;
  speed: number | null;
  location: string | null;
  favouritePositions: string | null;
}

export interface TeamInfo {
  id: string | null;
  name: string | null;
}

export interface NewPlayer {
  name: string;
  initials: string;
  photoUrl: string | null;
  team: TeamInfo;
  shirtNo: number;
}

export interface Player {
  playerId: string;
  name: string;
  initials: string;
  photoUrl: string | null;
  team: TeamInfo;
  shirtNo: number;
  additionalInfo: PlayerAdditionalInfo;
  audit: Audit;
}
