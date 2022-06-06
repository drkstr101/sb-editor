import 'tippy.js/dist/tippy.css';
// import './index.css';

import React from 'react';
import {
  createPlateUI,
  HeadingToolbar,
  Plate,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodePlugin,
  createExitBreakPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createKbdPlugin,
  createImagePlugin,
  createItalicPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  createComboboxPlugin,
  createMentionPlugin,
  createIndentPlugin,
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
  createDeserializeMdPlugin,
  createDeserializeCsvPlugin,
  createNormalizeTypesPlugin,
  createFontSizePlugin,
  createHorizontalRulePlugin,
  createPlugins,
  createDeserializeDocxPlugin,
  createJuicePlugin,
  createLineHeightPlugin,
  createCodeBlockPlugin,
  createFontFamilyPlugin,
  createFontWeightPlugin,
  ColorPickerToolbarDropdown,
  MARK_COLOR,
  MARK_BG_COLOR,
  LineHeightToolbarDropdown,
  LinkToolbarButton,
  ImageToolbarButton,
  MediaEmbedToolbarButton,
  MentionCombobox,
} from '@udecode/plate';
import { withStyledPlaceHolders } from './config/components/withStyledPlaceHolders';
import { CONFIG } from './config/config';
import { VALUES } from './config/values/values';
import {
  BasicElementToolbarButtons,
  ListToolbarButtons,
  IndentToolbarButtons,
  BasicMarkToolbarButtons,
  AlignToolbarButtons,
  TableToolbarButtons,
  MarkBallonToolbar,
} from './config/components/Toolbars';
import { FormatColorText } from '@styled-icons/material/FormatColorText';
import { Check } from '@styled-icons/material/Check';
import { FontDownload } from '@styled-icons/material/FontDownload';
import { Image } from '@styled-icons/material/Image';
import { LineWeight } from '@styled-icons/material/LineWeight';
import { Link } from '@styled-icons/material/Link';
import { OndemandVideo } from '@styled-icons/material/OndemandVideo';

const RichTextEditor = () => {
  let components = createPlateUI();
  components = withStyledPlaceHolders(components);

  const plugins = createPlugins(
    [
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createImagePlugin(),
      createHorizontalRulePlugin(),
      createLineHeightPlugin(CONFIG.lineHeight),
      createLinkPlugin(),
      createListPlugin(),
      createTablePlugin(),
      createMediaEmbedPlugin(),
      createCodeBlockPlugin(),
      createAlignPlugin(CONFIG.align),
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createHighlightPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createFontBackgroundColorPlugin(),
      createFontFamilyPlugin(),
      createFontColorPlugin(),
      createFontSizePlugin(),
      createFontWeightPlugin(),
      createKbdPlugin(),
      createNodeIdPlugin(),
      createIndentPlugin(CONFIG.indent),
      createAutoformatPlugin(CONFIG.autoformat),
      createResetNodePlugin(CONFIG.resetBlockType),
      createSoftBreakPlugin(CONFIG.softBreak),
      createExitBreakPlugin(CONFIG.exitBreak),
      createNormalizeTypesPlugin(CONFIG.forceLayout),
      createTrailingBlockPlugin(CONFIG.trailingBlock),
      createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
      createComboboxPlugin(),
      createMentionPlugin(),
      createDeserializeMdPlugin(),
      createDeserializeCsvPlugin(),
      createDeserializeDocxPlugin(),
      createJuicePlugin(),
    ],
    {
      components,
    }
  );

  return (
    <Plate
      id="playground"
      editableProps={CONFIG.editableProps}
      initialValue={VALUES['playground']}
      plugins={plugins}
    >
      <HeadingToolbar>
        <BasicElementToolbarButtons />
        <ListToolbarButtons />
        <IndentToolbarButtons />
        <BasicMarkToolbarButtons />
        <ColorPickerToolbarDropdown
          pluginKey={MARK_COLOR}
          icon={<FormatColorText />}
          selectedIcon={<Check />}
          tooltip={{ content: 'Text color' }}
        />
        <ColorPickerToolbarDropdown
          pluginKey={MARK_BG_COLOR}
          icon={<FontDownload />}
          selectedIcon={<Check />}
          tooltip={{ content: 'Highlight color' }}
        />
        <AlignToolbarButtons />
        <LineHeightToolbarDropdown icon={<LineWeight />} />
        <LinkToolbarButton icon={<Link />} />
        <ImageToolbarButton icon={<Image />} />
        <MediaEmbedToolbarButton icon={<OndemandVideo />} />
        <TableToolbarButtons />
      </HeadingToolbar>

      <MarkBallonToolbar />

      <MentionCombobox items={CONFIG.mentionItems} />
    </Plate>
  );
};

export default RichTextEditor;
