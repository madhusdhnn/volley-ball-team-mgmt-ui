export default interface Profile {
  username: string;
  fullName: string;
  firstName: string;
  lastName: string;
  profileImageUrl: string | null;
  emailId: string;
  roleId: string;
  roleName: string;
  enabled: boolean;
}
