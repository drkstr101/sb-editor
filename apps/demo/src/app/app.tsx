import { RichTextEditor } from '@stackbit/rich-text-editor';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <RichTextEditor />
    </StyledApp>
  );
}

export default App;
