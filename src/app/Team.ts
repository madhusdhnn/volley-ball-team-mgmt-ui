import { Audit } from './Audit';

export default interface Team {
  teamId?: string;
  name: string;
  maxPlayers?: number;
  audit?: Audit;
}
