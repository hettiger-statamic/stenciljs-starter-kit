/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyQuote {
        "author"?: string;
    }
}
declare global {
    interface HTMLMyQuoteElement extends Components.MyQuote, HTMLStencilElement {
    }
    var HTMLMyQuoteElement: {
        prototype: HTMLMyQuoteElement;
        new (): HTMLMyQuoteElement;
    };
    interface HTMLElementTagNameMap {
        "my-quote": HTMLMyQuoteElement;
    }
}
declare namespace LocalJSX {
    interface MyQuote {
        "author"?: string;
    }
    interface IntrinsicElements {
        "my-quote": MyQuote;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-quote": LocalJSX.MyQuote & JSXBase.HTMLAttributes<HTMLMyQuoteElement>;
        }
    }
}
