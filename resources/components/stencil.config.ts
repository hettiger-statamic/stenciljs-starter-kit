import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'components',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: 'loader',
      dir: '../../public/components'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: './dist/docs.json'
    },
  ],
};
