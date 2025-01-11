import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;

  }
  body{
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100%;
    margin: 0px;
    padding: 0px;
    background-color:grey;

  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar{
    display:none; 
  }
`;

export default GlobalStyles;
