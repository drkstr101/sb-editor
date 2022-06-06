import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_H1,
  ELEMENT_IMAGE,
  ELEMENT_LI,
  ELEMENT_LINK,
  ELEMENT_OL,
  ELEMENT_PARAGRAPH,
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TR,
  ELEMENT_UL,
  TElement,
  TImageElement as ImageElement,
  TLinkElement as LinkElement,
  TTableElement as TableElement,
  TText,
} from '@udecode/plate';

/**
 * Text
 */

export type IEmptyText = {
  text: '';
};

export interface IMarkedText extends TText {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  underline?: boolean;
}

/**
 * Inline Elements
 */

export interface ILinkElement extends LinkElement {
  type: typeof ELEMENT_LINK;
  children: IMarkedText[];
}

export type IInlineElement = ILinkElement;
export type IInlineDescendant = IInlineElement | IMarkedText;
export type IInlineChildren = IInlineDescendant[];

/**
 * Blocks
 */

export interface IParagraphElement extends TElement {
  type: typeof ELEMENT_PARAGRAPH;
  children: IInlineChildren;
}

export interface IBulletedListElement extends TElement {
  type: typeof ELEMENT_UL;
  children: IListItemElement[];
}

export interface INumberedListElement extends TElement {
  type: typeof ELEMENT_OL;
  children: IListItemElement[];
}

export interface IListItemElement extends TElement {
  type: typeof ELEMENT_LI;
  children: IInlineChildren;
}

export interface IHeadingElement extends TElement {
  type: typeof ELEMENT_H1;
  children: IInlineChildren;
}

export interface IImageElement extends ImageElement {
  type: typeof ELEMENT_IMAGE;
  children: [IEmptyText];
}

export interface IQuoteElement extends TElement {
  type: typeof ELEMENT_BLOCKQUOTE;
  children: IInlineChildren;
}

export interface ITableElement extends TElement, TableElement {
  type: typeof ELEMENT_TABLE;
  children: ITableRowElement[];
}

export interface ITableRowElement extends TElement {
  type: typeof ELEMENT_TR;
  children: ITableCellElement[];
}

export interface ITableCellElement extends TElement {
  type: typeof ELEMENT_TD;
  children: INestableBlock[];
}

export type INestableBlock =
  | IParagraphElement
  | IImageElement
  | IBulletedListElement
  | INumberedListElement
  | IQuoteElement;
export type IRichTextBlock = IHeadingElement | ITableElement | INestableBlock;

export type IRichTextValue = IRichTextBlock[];
