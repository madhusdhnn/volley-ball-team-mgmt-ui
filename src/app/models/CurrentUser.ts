export default interface CurrentUser {
  username: string;
  enabled: boolean;
  firstName: string;
  lastName: string;
  fullName: string;
  roleId: string;
  roleName: string;
  profileImageUrl: string | null;
  emailId: string | null;
}
