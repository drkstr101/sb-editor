import { Theme } from '@mui/material/styles';
import {
  CreateCSSProperties,
  CSSProperties,
  PropsFunc,
  StyleRules,
  WithStyles,
} from '@mui/styles';
import { Value } from '@udecode/plate';
import { PlateEditor } from '@udecode/plate-core/dist/types/PlateEditor';

interface IStackbitEditorProps {
  id?: string;

  defaultValue?: Value;

  onSave?: (value: Value) => void;
  onChange?: (value: Value) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

type StyleObj = Record<string, string | number | Record<string, any>>;

export interface IStackbitEditorStyles {
  overrides?: {
    StackbitEditor?: {
      root?:
        | CSSProperties
        | CreateCSSProperties<StyleObj>
        | PropsFunc<StyleObj, CreateCSSProperties<StyleObj>>;
      container?:
        | CSSProperties
        | CreateCSSProperties<StyleObj>
        | PropsFunc<StyleObj, CreateCSSProperties<StyleObj>>;
      editorContainer?:
        | CSSProperties
        | CreateCSSProperties<StyleObj>
        | PropsFunc<StyleObj, CreateCSSProperties<StyleObj>>;
      editor?:
        | CSSProperties
        | CreateCSSProperties<StyleObj>
        | PropsFunc<StyleObj, CreateCSSProperties<StyleObj>>;
      error?:
        | CSSProperties
        | CreateCSSProperties<StyleObj>
        | PropsFunc<StyleObj, CreateCSSProperties<StyleObj>>;
      toolbar?:
        | CSSProperties
        | CreateCSSProperties<StyleObj>
        | PropsFunc<StyleObj, CreateCSSProperties<StyleObj>>;
      inlineToolbar?:
        | CSSProperties
        | CreateCSSProperties<StyleObj>
        | PropsFunc<StyleObj, CreateCSSProperties<StyleObj>>;
    };
  };
}

declare const StackbitEditorStyles: (
  theme: Theme & IStackbitEditorStyles
) => StyleRules<
  Record<string, any>,
  | 'error'
  | 'toolbar'
  | 'root'
  | 'container'
  | 'editor'
  | 'editorContainer'
  | 'placeHolder'
  | 'inlineToolbar'
>;

export type StackbitEditorProps = IStackbitEditorProps &
  WithStyles<typeof StackbitEditorStyles>;

export type StackbitEditorRef = PlateEditor<Value>;
