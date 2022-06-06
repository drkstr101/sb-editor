// Helper for combining webpack config objects
import { merge } from 'webpack-merge';
import { Configuration } from 'webpack';

export default (config: Configuration, context: any) => {
  return merge(config, {
    // use same style engine in mui as the plate editor
    resolve: {
      alias: { '@mui/styled-engine': '@mui/styled-engine-sc' },
    },
  });
};
