import Profile from './Profile';

const USER_RESPONSE: { status: string; data: Profile } = {
  status: 'success',
  data: {
    fullName: '',
    email: '',
    role: '',
    enabled: true,
  },
};

export default USER_RESPONSE;
