/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
import { DOMAttributes } from 'react';
import styledImport, { css as cssImport, CSSProp } from 'styled-components';

declare module '*.module.css' {
  const content: { [className: string]: string };
  export default content;
}

type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>;

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare module 'twin.macro' {
  // The styled and css imports
  export const styled: typeof styledImport;
  export const css: typeof cssImport;
}

declare module 'react' {
  // The css prop
  export interface HTMLAttributes<T> extends DOMAttributes<T> {
    tw?: string;
    css?: CSSProp;
    as?: string | Element;
  }

  // The inline svg css prop
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    tw?: string;
    css?: CSSProp;
  }
}

// The 'as' prop on styled components
// declare global {
//   export namespace JSX {
//     export interface IntrinsicAttributes<T> extends DOMAttributes<T> {
//       as?: string | Element;
//     }
//   }
// }
