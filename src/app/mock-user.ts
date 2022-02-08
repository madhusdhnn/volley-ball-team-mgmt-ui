import Profile from './Profile';

const ADMIN_RESPONSE: { status: string; data: Profile } = {
  status: 'success',
  data: {
    userId: '1',
    username: 'john_doe',
    fullName: 'John Doe',
    firstName: 'John',
    lastName: 'Doe',
    profileImage: null,
    email: 'john@example.com',
    role: 'ADMIN',
    enabled: true,
  },
};

const PLAYER_RESPONSE: { status: string; data: Profile } = {
  status: 'success',
  data: {
    userId: '2',
    username: 'jane_doe',
    fullName: 'Jane Doe',
    firstName: 'Jane',
    lastName: 'Doe',
    profileImage: null,
    email: 'jane@example.com',
    role: 'PLAYER',
    enabled: true,
  },
};

export default { admin: ADMIN_RESPONSE, player: PLAYER_RESPONSE };
