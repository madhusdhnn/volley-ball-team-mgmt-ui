import { Audit } from './Audit';

export default interface Team {
  teamId?: string;
  name: string;
  displayName: string;
  maxPlayers?: number;
  audit?: Audit;
}
