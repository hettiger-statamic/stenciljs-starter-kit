export default {
  title: 'Components/my-quote',
  component: 'my-quote'
}

const Template = (args): HTMLMyQuoteElement => {
  const quote = document.createElement('my-quote');
  quote.author = args.author;
  quote.innerText = 'Knowing is not enough; we must apply. Being willing is not enough; we must do.';
  return quote;
}

export const Quote = Template.bind({});

export const WithAuthor = Template.bind({});
WithAuthor.args = { author: 'Leonardo da Vinci' };
