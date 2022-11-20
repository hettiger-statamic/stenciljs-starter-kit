import { Component, h, Prop } from '@stencil/core';
import { StyledHost } from '../../utils/utils';

@Component({
  tag: 'my-quote',
  styleUrl: 'my-quote.scss',
  shadow: true,
})
export class MyQuote {

  @Prop() author?: string;

  render() {
    return (
      <StyledHost>
        <div class="container bg-green-200">
          <div class="body">
            <span>&raquo;</span>
            <slot />
            <span>&laquo;</span>
          </div>
          {this.author
            ? <div class="author">{this.author}</div>
            : []
          }
        </div>
      </StyledHost>
    );
  }

}
