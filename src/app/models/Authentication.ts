import CurrentUser from './CurrentUser';

export default interface Authentication {
  accessToken: string;
  expiresIn: number;
  user: CurrentUser;
}
