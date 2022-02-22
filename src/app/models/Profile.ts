import CurrentUser from './CurrentUser';
import { Player } from './Player';
import { Team } from './Team';

export default interface Profile {
  user: CurrentUser;
  player: Player;
  team: Team;
}
