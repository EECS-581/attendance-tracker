import 'dotenv/config';

export default {
  extra: {
    NEXT_PUBLIC_INFURA_URL: process.env.NEXT_PUBLIC_INFURA_URL,
    NEXT_PUBLIC_PRIVATE_KEY: process.env.NEXT_PUBLIC_PRIVATE_KEY
  }
};
