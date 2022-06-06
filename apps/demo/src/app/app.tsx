import { ThemeProvider } from '@mui/material/styles';
import { RichTextEditor } from '@stackbit/rich-text-editor';
import { CssBaseline, Link, Typography } from '@mui/material';

import { theme } from './theme';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ padding: 1 }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://stackbit.com/">
        Stackbit, Inc.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// export type SbEditorState = PlatesStoreState<Value>;

// const StackbitEditor: ForwardRefRenderFunction<
//   StackbitEditorRef,
//   StackbitEditorProps
// > = ({ classes, ...props }, ref) => {
//   // const [state, setState] = useState<PlatesStoreState>({});
//   const [focus, setFocus] = useState(true);
//
//   return (
//     <div className={classes.root}>
//       <Container component="main" maxWidth="lg" className={classes.container}>
//         <Paper variant="outlined" className={classes.editorContainer}>
//           <Slide appear={false} direction="down" in={focus}>
//             <AppBar
//               position="absolute"
//               color="default"
//               elevation={0}
//               sx={{
//                 position: 'relative',
//                 borderBottom: (t) => `1px solid ${t.palette.divider}`,
//               }}
//             >
//               <Toolbar>
//                 <Typography variant="h6" color="inherit" noWrap>
//                   Stackbit Rich Text Editor Demo
//                 </Typography>
//               </Toolbar>
//             </AppBar>
//           </Slide>
//           {/*<Toolbar />*/}
//           <Box className={classes.editor}>
//             <RichTextEditor id="main" />
//           </Box>
//         </Paper>
//         <Copyright />
//       </Container>
//     </div>
//   );
// };

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RichTextEditor />
      <Copyright />
    </ThemeProvider>
  );
}

// export default withStyles(styles, { withTheme: true, name: 'StackbitEditor' })(
//   forwardRef(RichTextEditor)
// );
