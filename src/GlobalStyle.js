import { createGlobalStyle } from "styled-components";
import background from "./images/currency.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background: url("${background}");
    font-size:18px;
  }

  input[type="number"]::-webkit-inner-spin-button {
    display: none;
  }
`;
