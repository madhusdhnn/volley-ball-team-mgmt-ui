import { Audit } from './Audit';

export interface Team {
  teamId: string;
  name: string;
  maxPlayers: number;
  audit: Audit;
}

export interface NewTeam {
  teamName: string;
}
