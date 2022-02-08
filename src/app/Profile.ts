export default interface Profile {
  userId: string;
  username: string;
  fullName: string;
  firstName: string;
  lastName: string;
  profileImage: string | null;
  email: string;
  role: string;
  enabled: boolean;
}
