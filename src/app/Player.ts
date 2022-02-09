import { Audit } from './Audit';

interface PlayerAdditionalInfo {
  age: number | null;
  height: number | null;
  weight: number | null;
  power: number | null;
  speed: number | null;
  location: string | null;
  favouritePositions: string | null;
}

export interface TeamInfo {
  id: string;
  name: string;
}

export interface Player {
  playerId?: string;
  name: string;
  initials: string;
  photoUrl: string | null;
  team: TeamInfo;
  shirtNo: number;
  additionalInfo: PlayerAdditionalInfo;
  audit: Audit;
}
