import { Player } from './Player';

const PLAYERS_RESPONSE: { status: string; data: Player[] } = {
  status: 'success',
  data: [
    {
      playerId: '1',
      name: 'Ross Geller',
      initials: 'RG',
      photoUrl: null,
      shirtNo: 3,
      team: {
        id: '2',
        name: 'friends-boys',
        displayName: 'Friends Boys',
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
        createdAt: '2022-01-08T00:47:39.397Z',
        updatedAt: '2022-01-08T00:47:41.791Z',
      },
    },
    {
      playerId: '2',
      name: 'Rachel Green',
      initials: 'RG',
      photoUrl: null,
      shirtNo: 5,
      team: {
        id: '1',
        name: 'friends-girls',
        displayName: 'Friends Girls',
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
        createdAt: '2022-01-08T00:48:19.932Z',
        updatedAt: '2022-01-08T00:48:21.554Z',
      },
    },
    {
      playerId: '3',
      name: 'Chandler Bing',
      initials: 'CB',
      photoUrl: null,
      shirtNo: 2,
      team: {
        id: '2',
        name: 'friends-boys',
        displayName: 'Friends Boys',
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
        createdAt: '2022-01-08T00:47:12.398Z',
        updatedAt: '2022-01-08T00:47:10.256Z',
      },
    },
    {
      playerId: '4',
      name: 'Monica Geller',
      initials: 'MG',
      photoUrl: null,
      shirtNo: 4,
      team: {
        id: '1',
        name: 'friends-girls',
        displayName: 'Friends Girls',
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
        createdAt: '2022-01-08T00:47:53.104Z',
        updatedAt: '2022-01-08T00:47:50.599Z',
      },
    },
    {
      playerId: '5',
      name: 'Phoebe Buffay',
      initials: 'PB',
      photoUrl: null,
      shirtNo: 6,
      team: {
        id: '1',
        name: 'friends-girls',
        displayName: 'Friends Girls',
      },
      additionalInfo: {
        age: null,
        height: null,
        weight: null,
        power: null,
        speed: null,
        location: 'Manhattan, NYC',
        favouritePositions: null,
      },
      audit: {
        createdAt: '2022-01-08T00:48:23.044Z',
        updatedAt: '2022-01-08T00:48:23.949Z',
      },
    },
    {
      playerId: '6',
      name: 'Joey Tribbianni',
      initials: 'JT',
      photoUrl: null,
      shirtNo: 1,
      team: {
        id: '2',
        name: 'friends-boys',
        displayName: 'Friends Boys',
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
  ],
};

export default PLAYERS_RESPONSE;
