import {
  AutoformatPlugin,
  CodeBlockElement,
  createPlateUI,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_HR,
  ELEMENT_IMAGE,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_PARAGRAPH,
  ELEMENT_TD,
  ELEMENT_TODO_LI,
  ExitBreakPlugin,
  IndentPlugin,
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  KEYS_HEADING,
  NormalizeTypesPlugin,
  PlatePlugin,
  ResetNodePlugin,
  SelectOnBackspacePlugin,
  SoftBreakPlugin,
  TrailingBlockPlugin,
  withProps,
} from '@udecode/plate';
import {
  ELEMENT_EXCALIDRAW,
  ExcalidrawElement,
} from '@udecode/plate-ui-excalidraw';
import { Partial } from 'rollup-plugin-typescript2/dist/partial';
import { EditableProps } from 'slate-react/dist/components/editable';
import { css } from 'styled-components';
import { IRichTextPlatePlugin } from '../rich-text-editor.types';
import { autoformatRules } from './autoformat';
import { MENTIONABLES } from './mentionables';

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
  defaultType: ELEMENT_PARAGRAPH,
};

interface Config {
  components: Record<string, any>;
  editableProps: EditableProps;

  align: Partial<IRichTextPlatePlugin>;
  autoformat: Partial<IRichTextPlatePlugin<AutoformatPlugin>>;
  exitBreak: Partial<IRichTextPlatePlugin<ExitBreakPlugin>>;
  forceLayout: Partial<IRichTextPlatePlugin<NormalizeTypesPlugin>>;
  indent: Partial<IRichTextPlatePlugin<IndentPlugin>>;
  lineHeight: Partial<IRichTextPlatePlugin>;
  mentionItems: any;
  resetBlockType: Partial<IRichTextPlatePlugin<ResetNodePlugin>>;
  selectOnBackspace: Partial<IRichTextPlatePlugin<SelectOnBackspacePlugin>>;
  softBreak: Partial<IRichTextPlatePlugin<SoftBreakPlugin>>;
  trailingBlock: Partial<IRichTextPlatePlugin<TrailingBlockPlugin>>;
}

export const CONFIG: Config = {
  editableProps: {
    // autoFocus: process.env.NODE_ENV !== 'production',
    autoFocus: false,
    spellCheck: false,
    placeholder: 'Type…',
    style: {
      padding: '15px',
    },
  },
  components: createPlateUI({
    [ELEMENT_CODE_BLOCK]: withProps(CodeBlockElement, {
      styles: {
        root: [
          css`
            background-color: #111827;
            code {
              color: white;
            }
          `,
        ],
      },
    }),
    [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
  }),

  align: {
    inject: {
      props: {
        validTypes: [
          ELEMENT_PARAGRAPH,
          ELEMENT_H1,
          ELEMENT_H2,
          ELEMENT_H3,
          ELEMENT_H4,
          ELEMENT_H5,
          ELEMENT_H6,
        ],
      },
    },
  },
  indent: {
    inject: {
      props: {
        validTypes: [
          ELEMENT_PARAGRAPH,
          ELEMENT_H1,
          ELEMENT_H2,
          ELEMENT_H3,
          ELEMENT_H4,
          ELEMENT_H5,
          ELEMENT_H6,
          ELEMENT_BLOCKQUOTE,
          ELEMENT_CODE_BLOCK,
        ],
      },
    },
  },
  lineHeight: {
    inject: {
      props: {
        defaultNodeValue: 'normal',
        validTypes: [
          ELEMENT_PARAGRAPH,
          ELEMENT_H1,
          ELEMENT_H2,
          ELEMENT_H3,
          ELEMENT_H4,
          ELEMENT_H5,
          ELEMENT_H6,
        ],
      },
    },
  },
  resetBlockType: {
    options: {
      rules: [
        {
          ...resetBlockTypesCommonRule,
          hotkey: 'Enter',
          predicate: isBlockAboveEmpty,
        },
        {
          ...resetBlockTypesCommonRule,
          hotkey: 'Backspace',
          predicate: isSelectionAtBlockStart,
        },
      ],
    },
  },
  trailingBlock: { type: ELEMENT_PARAGRAPH },
  softBreak: {
    options: {
      rules: [
        { hotkey: 'shift+enter' },
        {
          hotkey: 'enter',
          query: {
            allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
          },
        },
      ],
    },
  },
  exitBreak: {
    options: {
      rules: [
        {
          hotkey: 'mod+enter',
        },
        {
          hotkey: 'mod+shift+enter',
          before: true,
        },
        {
          hotkey: 'enter',
          query: {
            start: true,
            end: true,
            allow: KEYS_HEADING,
          },
        },
      ],
    },
  },
  selectOnBackspace: {
    options: {
      query: {
        allow: [ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED, ELEMENT_HR],
      },
    },
  },
  autoformat: {
    options: {
      rules: autoformatRules,
    },
  },
  mentionItems: MENTIONABLES,
  forceLayout: {
    options: {
      rules: [{ path: [0], strictType: ELEMENT_H1 }],
    },
  },
};
