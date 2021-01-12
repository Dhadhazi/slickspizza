import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Slicks Slices',
    siteUrl: 'https://localhost:8000',
    description: 'The best pizza place in Hamilton!',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // Name of the plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'vw4t2omj',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
