export type {
  IRichTextValue,
  IRichTextBlock,
  IEmptyText,
  IMarkedText,
  IBulletedListElement,
  IListItemElement,
  IHeadingElement,
  IImageElement,
  INumberedListElement,
  IInlineElement,
  ILinkElement,
  IParagraphElement,
  IQuoteElement,
  IInlineChildren,
  IInlineDescendant,
  ITableElement,
  ITableCellElement,
  ITableRowElement,
  INestableBlock,
} from './lib/ast';

export {
  getRichTextPlateActions,
  getRichTextPlateSelectors,
  getRichTextPlateEditorRef,
  useRichTextEditorRef,
  useRichTextEditorState,
  getRichTextEditor,
  useRichTextPlateEditorRef,
  useRichTextPlateEditorState,
  useRichTextPlateSelectors,
} from './lib/hooks';

export {
  createRichTextPlateEditor,
  createRichTextPluginFactory,
} from './lib/utils';

export { default as RichTextEditor } from './rich-text-editor';
