import {
  createPlateEditor,
  CreatePlateEditorOptions,
  createPluginFactory,
  NoInfer,
  PlatePlugin,
} from '@udecode/plate';
import { IRichTextEditor } from '../rich-text-editor.types';
import { PluginOptions } from '@babel/core';
import { IRichTextValue } from './ast';

/**
 *
 * @param options
 */
export const createRichTextPlateEditor = (
  options: CreatePlateEditorOptions<IRichTextValue, IRichTextEditor> = {}
) => createPlateEditor<IRichTextValue, IRichTextEditor>(options);

/**
 *
 * @param defaultPlugin
 */
export const createRichTextPluginFactory = <P = PluginOptions>(
  defaultPlugin: PlatePlugin<NoInfer<P>, IRichTextValue, IRichTextEditor>
) => createPluginFactory(defaultPlugin);
