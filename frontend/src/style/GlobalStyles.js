import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body{
  margin: 0;
  padding: 0;
  font-size: 16px;
  width: 100vw;
  height: 100vh;
  font-family: 'Roboto';
  background-img: url("/backloginsignup.jpg");
}

`;

export default GlobalStyles;