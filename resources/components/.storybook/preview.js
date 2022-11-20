import { setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import docsJSON from '../dist/docs.json';
if (docsJSON) setStencilDocJson(docsJSON);

import { defineCustomElements } from "../../../public/components/loader";
defineCustomElements().then();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
