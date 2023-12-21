import { styled } from "styled-components";

export const Wrapper = styled.main`
  color: ${({ theme }) => theme.color.silver};
  font-family: "Roboto", sans-serif;
  max-width: 600px;
  margin: 0 auto;
`;
