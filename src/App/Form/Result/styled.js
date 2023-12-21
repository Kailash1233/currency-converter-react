import { styled, css } from "styled-components";

export const Wrapper = styled.p`
  margin: 20px 5%;
  font-weight: bold;
  ${({ $hideResult }) =>
    $hideResult &&
    css`
      display: none;
    `};
`;

export const Text = styled.span`
  background: ${({ theme }) => theme.color.transparentGrey};
`;
