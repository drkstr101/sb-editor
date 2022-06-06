import {
  getPlateActions,
  getPlateEditorRef,
  getPlateSelectors,
  getTEditor,
  useEditorRef,
  useEditorState,
  usePlateEditorRef,
  usePlateEditorState,
  usePlateSelectors,
} from '@udecode/plate';
import { IRichTextValue } from './ast';
import { IRichTextEditor } from '../rich-text-editor.types';

export const getRichTextEditor = (editor: IRichTextEditor) =>
  getTEditor<IRichTextValue, IRichTextEditor>(editor);

export const useRichTextEditorRef = () =>
  useEditorRef<IRichTextValue, IRichTextEditor>();

export const useRichTextEditorState = () =>
  useEditorState<IRichTextValue, IRichTextEditor>();

export const useRichTextPlateEditorRef = (id?: string) =>
  usePlateEditorRef<IRichTextValue, IRichTextEditor>(id);

export const getRichTextPlateEditorRef = (id?: string) =>
  getPlateEditorRef<IRichTextValue, IRichTextEditor>(id);

export const useRichTextPlateEditorState = (id?: string) =>
  usePlateEditorState<IRichTextValue, IRichTextEditor>(id);

export const useRichTextPlateSelectors = (id?: string) =>
  usePlateSelectors<IRichTextValue, IRichTextEditor>(id);

export const getRichTextPlateSelectors = (id?: string) =>
  getPlateSelectors<IRichTextValue, IRichTextEditor>(id);

export const getRichTextPlateActions = (id?: string) =>
  getPlateActions<IRichTextValue, IRichTextEditor>(id);
