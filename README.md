# Statamic StencilJS Starter Kit

Get up and running quickly using the following tech:

- Statamic
- StencilJS
- Tailwind CSS
- Storybook

> Tailwind is optional. However, support is baked in. You can even use Tailwind inside the shadow DOM.

## Installation

1. Start a new Statamic project using this starter kit.

```bash
cd /path/to/project
npm install
cd resources/components
npm install
cd -
```

## Usage

```bash
npm run start
```

## Tailwind CSS Support

As you can imagine, Tailwind does not play nice with the shadow DOM of StencilJS components.
However, there's a workaround:

1. Add `<meta name="tailwind-href" content="{{ mix src='css/tailwind.css' }}">` to the head tag
2. Use `<StyledHost>` instead of `<Host>` in your components

> Of course these changes have already been applied in `layout.antlers.html` and `my-quote.tsx`.

There are other options to get the Tailwind CSS href. However, the above approach allows you to use your component
library without having to add any global styles to the page.

> Using Tailwind inside StencilJS has the implication of one big CSS file shared across all components.
> Be aware that Stencil's lazy loading mechanism is not working at it's full potential when using Tailwind.

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
