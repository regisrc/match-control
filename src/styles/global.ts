import { createGlobalStyle } from "styled-components";
import teste from "../assets/teste.png";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }
    body {
      background: ${(props) => props.theme.colors.backgroundTheme};
      background-size: cover;
      color: ${(props) => props.theme.colors.primaryYellow};
      -webkit-font-smoothing: antialiased;
      max-width: 1280px;
      margin: 0 auto;
      
    }
    ::-webkit-scrollbar {
  width: 2px;
  height: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
    body,
    input,
    button {
      font-family: Poppins, serif;
      font-size: 16px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: bold;
    }
    button {
      cursor: pointer;
    }

    input::-webkit-calendar-picker-indicator{
    display: none;
}
input[type="date"]::-webkit-input-placeholder{ 
    visibility: hidden !important;
}
  `;
