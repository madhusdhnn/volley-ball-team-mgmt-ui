import Profile from './Profile';

const ADMIN_RESPONSE: { status: string; data: Profile } = {
  status: 'success',
  data: {
    username: 'john_doe',
    fullName: 'John Doe',
    firstName: 'John',
    lastName: 'Doe',
    profileImageUrl: null,
    emailId: 'john@example.com',
    roleId: '1',
    roleName: 'ADMIN',
    enabled: true,
  },
};

const PLAYER_RESPONSE: { status: string; data: Profile } = {
  status: 'success',
  data: {
    username: 'jane_doe',
    fullName: 'Jane Doe',
    firstName: 'Jane',
    lastName: 'Doe',
    profileImageUrl: null,
    emailId: 'jane@example.com',
    roleId: '2',
    roleName: 'PLAYER',
    enabled: true,
  },
};

export default { admin: ADMIN_RESPONSE, player: PLAYER_RESPONSE };
