import {
  TText,
  TElement,
  PlateEditor,
  TReactEditor,
  ENode,
  ENodeEntry,
  EElement,
  EElementEntry,
  EText,
  ETextEntry,
  EElementOrText,
  EDescendant,
  EMarks,
  PluginOptions,
  Decorate,
  DecorateEntry,
  DOMHandler,
  InjectComponent,
  InjectProps,
  KeyboardHandler,
  OnChange,
  OverrideByKey,
  PlatePlugin,
  PlatePluginInsertData,
  PlatePluginProps,
  PlateProps,
  SerializeHtml,
  WithOverride,
} from '@udecode/plate-core';
import { TLinkElement, ELEMENT_LINK } from '@udecode/plate-link';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { ELEMENT_UL, ELEMENT_OL, ELEMENT_LI } from '@udecode/plate-list';
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@udecode/plate-heading';
import { ELEMENT_IMAGE, TImageElement } from '@udecode/plate-image';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import {
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TR,
  TTableElement,
} from '@udecode/plate-table';

/**
 * Text
 */

export type EmptyText = {
  text: '';
};

export interface RichText extends TText {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  subscript?: boolean;
  superscript?: boolean;
}

/**
 * Inline Elements
 */

export interface SbLinkElement extends TLinkElement {
  type: typeof ELEMENT_LINK;
  children: RichText[];
}

export type SbInlineElement = TLinkElement;
export type SbInlineDescendant = SbInlineElement | RichText;
export type SbInlineChildren = SbInlineDescendant[];

/**
 * Blocks
 */

export interface SbParagraphElement extends TElement {
  type: typeof ELEMENT_PARAGRAPH;
  children: SbInlineChildren;
}

export interface SbBulletedListElement extends TElement {
  type: typeof ELEMENT_UL;
  children: SbListItemElement[];
}

export interface SbNumberedListElement extends TElement {
  type: typeof ELEMENT_OL;
  children: SbListItemElement[];
}

export interface SbListItemElement extends TElement {
  type: typeof ELEMENT_LI;
  children: SbInlineChildren;
}

export interface SbH1Element extends TElement {
  type: typeof ELEMENT_H1;
  children: SbInlineChildren;
}

export interface SbH2Element extends TElement {
  type: typeof ELEMENT_H2;
  children: SbInlineChildren;
}

export interface SbH3Element extends TElement {
  type: typeof ELEMENT_H3;
  children: SbInlineChildren;
}

export interface SbH4Element extends TElement {
  type: typeof ELEMENT_H4;
  children: SbInlineChildren;
}

export interface SbH5Element extends TElement {
  type: typeof ELEMENT_H5;
  children: SbInlineChildren;
}

export interface SbH6Element extends TElement {
  type: typeof ELEMENT_H6;
  children: SbInlineChildren;
}

export type SbHeadingElement =
  | SbH1Element
  | SbH2Element
  | SbH3Element
  | SbH4Element
  | SbH5Element
  | SbH6Element;

export interface SbImageElement extends TImageElement {
  type: typeof ELEMENT_IMAGE;
  children: [EmptyText];
}

export interface SbQuoteElement extends TElement {
  type: typeof ELEMENT_BLOCKQUOTE;
  children: SbInlineChildren;
}

export interface SbTableElement extends TTableElement {
  type: typeof ELEMENT_TABLE;
  children: SbTableRowElement[];
}

export interface SbTableRowElement extends TElement {
  type: typeof ELEMENT_TR;
  children: SbTableCellElement[];
}

export interface SbTableCellElement extends TElement {
  type: typeof ELEMENT_TD;
  children: SbNestableBlock[];
}

export type SbNestableBlock =
  | SbHeadingElement
  | SbParagraphElement
  | SbImageElement
  | SbBulletedListElement
  | SbNumberedListElement
  | SbQuoteElement;

export type SbBlock = SbTableElement | SbNestableBlock;

export type SbValue = SbBlock[];

/**
 * Editor types
 */

export type SbEditor = PlateEditor<SbValue> & { typescript: boolean };
export type SbReactEditor = TReactEditor<SbValue>;
export type SbNode = ENode<SbValue>;
export type SbNodeEntry = ENodeEntry<SbValue>;
export type SbElement = EElement<SbValue>;
export type SbElementEntry = EElementEntry<SbValue>;
export type SbText = EText<SbValue>;
export type SbTextEntry = ETextEntry<SbValue>;
export type SbElementOrText = EElementOrText<SbValue>;
export type SbDescendant = EDescendant<SbValue>;
export type SbMarks = EMarks<SbValue>;
export type SbMark = keyof SbMarks;

/**
 * Plate types
 */

export type SbDecorate<P = PluginOptions> = Decorate<P, SbValue, SbEditor>;
export type SbDecorateEntry = DecorateEntry<SbValue>;
export type SbDOMHandler<P = PluginOptions> = DOMHandler<P, SbValue, SbEditor>;
export type SbInjectComponent = InjectComponent<SbValue>;
export type SbInjectProps = InjectProps<SbValue>;
export type SbKeyboardHandler<P = PluginOptions> = KeyboardHandler<
  P,
  SbValue,
  SbEditor
>;
export type SbOnChange<P = PluginOptions> = OnChange<P, SbValue, SbEditor>;
export type SbOverrideByKey = OverrideByKey<SbValue, SbEditor>;
export type SbPlatePlugin<P = PluginOptions> = PlatePlugin<
  P,
  SbValue,
  SbEditor
>;
export type SbPlatePluginInsertData = PlatePluginInsertData<SbValue>;
export type SbPlatePluginProps = PlatePluginProps<SbValue>;
export type SbPlateProps = PlateProps<SbValue, SbEditor>;
export type SbSerializeHtml = SerializeHtml<SbValue>;
export type SbWithOverride<P = PluginOptions> = WithOverride<
  P,
  SbValue,
  SbEditor
>;
