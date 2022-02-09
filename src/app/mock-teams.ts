import { Team } from './models/Team';

const TEAM_RESPONSE: { status: string; data: Team[] } = {
  status: 'success',
  data: [
    {
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
    {
      teamId: '2',
      name: 'Friends Men',
      maxPlayers: 6,
      audit: {
        createdAt: new Date('2022-01-07T13:22:43.253Z').toLocaleDateString(
          'en-US'
        ),
        updatedAt: new Date('2022-01-07T13:22:47.277Z').toLocaleDateString(
          'en-US'
        ),
      },
    },
  ],
};

export default TEAM_RESPONSE;
