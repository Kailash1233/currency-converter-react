import { StyledLabel, LabelText } from "./styled";

const Label = ({ text, content }) => {
  return (
    <StyledLabel>
      <LabelText>{text}</LabelText>
      {content}
    </StyledLabel>
  );
};

export default Label;
