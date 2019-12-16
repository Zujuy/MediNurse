import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body{
  font-family: "Roboto";
  padding: 0;
  margin:0;
  width: 100%;
  height: 100%;
}

body{
  position: absolute;
}
`;

export default GlobalStyles;