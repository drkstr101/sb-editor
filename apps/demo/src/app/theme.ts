import {
  CreateCSSProperties,
  createStyles,
  CSSProperties,
  PropsFunc,
} from '@mui/styles';
import { createTheme, Theme } from '@mui/material/styles';

type CSSValue = Record<string, any>;

interface SbEditorStyles {
  overrides?: {
    SbEditor?: {
      root?:
        | CSSProperties
        | CreateCSSProperties<CSSValue>
        | PropsFunc<CSSValue, CreateCSSProperties<CSSValue>>;
      container?:
        | CSSProperties
        | CreateCSSProperties<CSSValue>
        | PropsFunc<CSSValue, CreateCSSProperties<CSSValue>>;
      editorContainer?:
        | CSSProperties
        | CreateCSSProperties<CSSValue>
        | PropsFunc<CSSValue, CreateCSSProperties<CSSValue>>;
      editor?:
        | CSSProperties
        | CreateCSSProperties<CSSValue>
        | PropsFunc<CSSValue, CreateCSSProperties<CSSValue>>;
      error?:
        | CSSProperties
        | CreateCSSProperties<CSSValue>
        | PropsFunc<CSSValue, CreateCSSProperties<CSSValue>>;
      toolbar?:
        | CSSProperties
        | CreateCSSProperties<CSSValue>
        | PropsFunc<CSSValue, CreateCSSProperties<CSSValue>>;
      inlineToolbar?:
        | CSSProperties
        | CreateCSSProperties<CSSValue>
        | PropsFunc<CSSValue, CreateCSSProperties<CSSValue>>;
    };
  };
}

export const theme = createTheme();

export const styles = (theme: Theme & SbEditorStyles) =>
  createStyles({
    root: theme?.overrides?.SbEditor?.root || {
      maxHeight: '100vh',
    },
    container: theme?.overrides?.SbEditor?.container || {
      margin: theme.spacing(1, 0, 0, 0),
      position: 'relative',
      maxHeight: '100vh',
    },
    editorContainer: theme?.overrides?.SbEditor?.editorContainer || {
      position: 'relative',
      maxHeight: '100vh',
    },
    editor: theme?.overrides?.SbEditor?.editor || {
      margin: theme.spacing(1, 0, 0, 0),
      cursor: 'text',
      width: '100%',
      padding: theme.spacing(0, 0, 1, 0),
      overflowY: 'scroll',
      overflowX: 'hidden',
      fontFamily: theme.typography.body1.fontFamily,
      fontSize: theme.typography.body1.fontSize,
      '& figure': {
        margin: 0,
      },
    },
    error: theme?.overrides?.SbEditor?.error || {
      borderBottom: '2px solid red',
    },
    toolbar: theme?.overrides?.SbEditor?.toolbar || {},
    inlineToolbar: theme?.overrides?.SbEditor?.inlineToolbar || {
      maxWidth: '180px',
      position: 'absolute',
      padding: '5px',
      zIndex: 10,
    },
  });
