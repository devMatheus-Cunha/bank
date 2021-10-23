import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F1E9;
    --green-picpay: #11c76f;
    --green-picpay-light: #77D284;
    --green-picpay-dark: #263224;
    
    --blue-light: #365AD6;
    /* --text-title: #223324; */
    --white: #ffffff;
    
    --text-title: #858383
    --text: #525151
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  
  body {
    background: var(--green-picpay-dark);
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif !important;
  }
  
  body, input, textarea, button {
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 94%;
    max-width: 576px;
    background: var(--background);
    padding: 2.5rem;
    position: relative;
    border-radius: 0.24rem;
  }
  
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
