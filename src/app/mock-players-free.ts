import { Player } from './models/Player';

const PLAYERS_FREE_RESPONSE: { status: string; data: Player[] } = {
  status: 'success',
  data: [
    {
      playerId: '16',
      name: 'Gunther',
      initials: 'G',
      photoUrl: null,
      shirtNo: 7,
      team: {
        id: null,
        name: null,
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
        createdAt: '2022-02-11T05:34:42.365Z',
        updatedAt: '2022-02-11T05:34:42.365Z',
      },
    },
    {
      playerId: '11',
      name: 'Janice Hosenstein',
      initials: 'JH',
      photoUrl: null,
      shirtNo: 8,
      team: {
        id: null,
        name: null,
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
        createdAt: '2022-02-11T05:34:42.365Z',
        updatedAt: '2022-02-11T05:34:42.365Z',
      },
    },
    {
      playerId: '12',
      name: 'Richard Burk',
      initials: 'RB',
      photoUrl: null,
      shirtNo: 9,
      team: {
        id: null,
        name: null,
      },
      additionalInfo: {
        age: null,
        height: null,
        weight: null,
        power: null,
        speed: null,
        location: 'Queens, NYC',
        favouritePositions: null,
      },
      audit: {
        createdAt: '2022-02-11T05:34:42.365Z',
        updatedAt: '2022-02-11T05:34:42.365Z',
      },
    },
  ],
};

export default PLAYERS_FREE_RESPONSE;
