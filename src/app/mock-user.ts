import Profile from './models/Profile';

const ADMIN_RESPONSE: { status: string; data: Profile } = {
  status: 'success',
  data: {
    user: {
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
    player: {
      playerId: '6',
      name: 'Joey Tribbianni',
      initials: 'JT',
      photoUrl: null,
      shirtNo: 1,
      team: {
        id: '2',
        name: 'Friends Men',
      },
      additionalInfo: {
        age: null,
        height: null,
        weight: null,
        power: null,
        speed: null,
        location: 'Brooklyn, NYC',
        favouritePositions: null,
      },
      audit: {
        createdAt: '2022-01-08T00:46:57.303Z',
        updatedAt: '2022-01-08T00:47:01.676Z',
      },
    },
    team: {
      teamId: '1',
      name: 'Friends Women',
      maxPlayers: 6,
      audit: {
        createdAt: new Date('2022-01-08T13:23:00.582Z').toLocaleDateString(
          'en-US'
        ),
        updatedAt: new Date('2022-01-08T13:23:04.598Z').toLocaleDateString(
          'en-US'
        ),
      },
    },
  },
};

const PLAYER_RESPONSE: { status: string; data: Profile } = {
  status: 'success',
  data: {
    user: {
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
    player: {
      playerId: '6',
      name: 'Joey Tribbianni',
      initials: 'JT',
      photoUrl: null,
      shirtNo: 1,
      team: {
        id: '2',
        name: 'Friends Men',
      },
      additionalInfo: {
        age: null,
        height: null,
        weight: null,
        power: null,
        speed: null,
        location: 'Brooklyn, NYC',
        favouritePositions: null,
      },
      audit: {
        createdAt: '2022-01-08T00:46:57.303Z',
        updatedAt: '2022-01-08T00:47:01.676Z',
      },
    },
    team: {
      teamId: '1',
      name: 'Friends Women',
      maxPlayers: 6,
      audit: {
        createdAt: new Date('2022-01-08T13:23:00.582Z').toLocaleDateString(
          'en-US'
        ),
        updatedAt: new Date('2022-01-08T13:23:04.598Z').toLocaleDateString(
          'en-US'
        ),
      },
    },
  },
};

export default { admin: ADMIN_RESPONSE, player: PLAYER_RESPONSE };
