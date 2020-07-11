import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      color: var(--white);
  }

  html, body, #root {
      max-height: 100vh;
      max-width: 100vw;

      height: 100%;
      width: 100%;
  }
  *, button, input {
      border: 0;
      background: none;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }

  html {
      background: var(--primary);
  }
  :root {
      --primary: #000;
      --secondary: #112;
      --search: #222;
      --white: #EEE;
      --gray: #888;
      --outline: #333;
      --retweet: #0C7;
      --like: #E26;
      --twitter: #3AF;
      --twitter-dark-hover: #011;
      --twitter-light-hover: #39D;
  }
`;