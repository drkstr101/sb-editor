import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RichTextEditorProps {}

const StyledRichTextEditor = styled.div`
  color: pink;
`;

export function RichTextEditor(props: RichTextEditorProps) {
  return (
    <StyledRichTextEditor>
      <h1>Welcome to RichTextEditor!</h1>
    </StyledRichTextEditor>
  );
}

export default RichTextEditor;
