import { h, Host } from '@stencil/core';

/**
 * Returns decorated `<Host>` with support for Tailwind styles
 *
 * Allows using Tailwind styles in Stencil components with the Shadow DOM flag turned on.
 *
 * @see https://ionic.io/blog/how-to-integrate-tailwind-css-into-your-stencil-project
 */
export const StyledHost: typeof Host = (attrs, children) => {
  const tailwindMeta = document.head.querySelector<HTMLMetaElement>('meta[name=tailwind-href]');

  return (
    <Host {...attrs}>
      {tailwindMeta
        ? <link rel='stylesheet' href={tailwindMeta.content} />
        : []
      }
      {children}
    </Host>
  );
}
