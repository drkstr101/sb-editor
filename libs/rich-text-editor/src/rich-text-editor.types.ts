import { PluginOptions } from '@babel/core';
import {
  Decorate,
  DecorateEntry,
  DOMHandler,
  EDescendant,
  EElement,
  EElementEntry,
  EElementOrText,
  EMarks,
  ENode,
  ENodeEntry,
  EText,
  ETextEntry,
  InjectComponent,
  InjectProps,
  KeyboardHandler,
  OnChange,
  OverrideByKey,
  PlateEditor,
  PlatePlugin,
  PlatePluginInsertData,
  PlatePluginProps,
  PlateProps,
  SerializeHtml,
  TReactEditor,
  WithOverride,
} from '@udecode/plate';
import { IRichTextValue } from './lib/ast';

/**
 * Editor types
 */

export type IRichTextEditor = PlateEditor<IRichTextValue> & {
  typescript: boolean;
};
export type IRichTextReactEditor = TReactEditor<IRichTextValue>;
export type IRichTextNode = ENode<IRichTextValue>;
export type IRichTextNodeEntry = ENodeEntry<IRichTextValue>;
export type IRichTextElement = EElement<IRichTextValue>;
export type IRichTextElementEntry = EElementEntry<IRichTextValue>;
export type IRichText = EText<IRichTextValue>;
export type IRichTextEntry = ETextEntry<IRichTextValue>;
export type IRichElementOrText = EElementOrText<IRichTextValue>;
export type IRichTextDescendant = EDescendant<IRichTextValue>;
export type IRichTextMarks = EMarks<IRichTextValue>;
export type IRichTextMark = keyof IRichTextMarks;

/**
 * Plate types
 */

export type IRichTextDecorate<P = PluginOptions> = Decorate<
  P,
  IRichTextValue,
  IRichTextEditor
>;
export type IRichTextDecorateEntry = DecorateEntry<IRichTextValue>;
export type IRichTextDOMHandler<P = PluginOptions> = DOMHandler<
  P,
  IRichTextValue,
  IRichTextEditor
>;
export type IRichTextInjectComponent = InjectComponent<IRichTextValue>;
export type IRichTextInjectProps = InjectProps<IRichTextValue>;
export type IRichTextKeyboardHandler<P = PluginOptions> = KeyboardHandler<
  P,
  IRichTextValue,
  IRichTextEditor
>;
export type IRichTextOnChange<P = PluginOptions> = OnChange<
  P,
  IRichTextValue,
  IRichTextEditor
>;
export type IRichTextOverrideByKey = OverrideByKey<
  IRichTextValue,
  IRichTextEditor
>;
export type IRichTextPlatePlugin<P = PluginOptions> = PlatePlugin<
  P,
  IRichTextValue,
  IRichTextEditor
>;
export type IRichTextPlatePluginInsertData =
  PlatePluginInsertData<IRichTextValue>;
export type IRichTextPlatePluginProps = PlatePluginProps<IRichTextValue>;
export type IRichTextPlateProps = PlateProps<IRichTextValue, IRichTextEditor>;
export type IRichTextSerializeHtml = SerializeHtml<IRichTextValue>;
export type IRichTextWithOverride<P = PluginOptions> = WithOverride<
  P,
  IRichTextValue,
  IRichTextEditor
>;

export type RichTextEditorRef = React.Ref<HTMLDivElement>;

export type RichEditorProps = React.HtmlHTMLAttributes<HTMLDivElement>;
