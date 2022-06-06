import 'tippy.js/dist/tippy.css';
// import './index.css';
import React from 'react';
import {
  ColorPickerToolbarDropdown,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createComboboxPlugin,
  createDeserializeCsvPlugin,
  createDeserializeDocxPlugin,
  createDeserializeMdPlugin,
  createExitBreakPlugin,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontFamilyPlugin,
  createFontSizePlugin,
  createFontWeightPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHorizontalRulePlugin,
  createImagePlugin,
  createIndentPlugin,
  createItalicPlugin,
  createJuicePlugin,
  createKbdPlugin,
  createLineHeightPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createMentionPlugin,
  createNodeIdPlugin,
  createNormalizeTypesPlugin,
  createParagraphPlugin,
  createPlateUI,
  createPlugins,
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
  HeadingToolbar,
  ImageToolbarButton,
  LineHeightToolbarDropdown,
  LinkToolbarButton,
  MARK_BG_COLOR,
  MARK_COLOR,
  MediaEmbedToolbarButton,
  MentionCombobox,
  Plate,
  PlateProps,
} from '@udecode/plate';
import { withStyledPlaceHolders } from './config/components/withStyledPlaceHolders';
import { CONFIG } from './config/config';
import { VALUES } from './config/values/values';
import {
  AlignToolbarButtons,
  BasicElementToolbarButtons,
  BasicMarkToolbarButtons,
  IndentToolbarButtons,
  ListToolbarButtons,
  MarkBallonToolbar,
  TableToolbarButtons,
} from './config/components/Toolbars';
import { FormatColorText } from '@styled-icons/material/FormatColorText';
import { Check } from '@styled-icons/material/Check';
import { FontDownload } from '@styled-icons/material/FontDownload';
import { Image } from '@styled-icons/material/Image';
import { LineWeight } from '@styled-icons/material/LineWeight';
import { Link } from '@styled-icons/material/Link';
import { OndemandVideo } from '@styled-icons/material/OndemandVideo';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';

export type IRichTextEditorProps = PlateProps;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    // target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function RichTextEditor(
  props: React.HtmlHTMLAttributes<HTMLDivElement>
) {
  console.log('RichTextEditor(props)', props);
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
    <div {...props}>
      <Plate
        id="playground"
        editableProps={CONFIG.editableProps}
        initialValue={VALUES['playground']}
        plugins={plugins}
      >
        <AppBar color="inherit">
          <Toolbar>
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
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <MarkBallonToolbar />

        <MentionCombobox items={CONFIG.mentionItems} />
      </Plate>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
