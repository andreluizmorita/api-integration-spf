import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,500,700,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    font-size: 14px;
  }

  body {
    background:#222;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #fff;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    position: relative;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
    color: #999999;
  }

  h2 {
    font-size: 1.71rem;
    font-weight: normal;
    color: #FAFAFA;
    margin-bottom: 30px;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    flex: 1;
  }

  .content-page {
    margin-top: 10px;
  }

  .album-items-enter {
    opacity: 0.01;
  }

  .album-items-enter.album-items-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .album-items-leave {
    opacity: 1;
  }

  .album-items-leave.album-items-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  @media (max-width: 768px) {
    html, body, #root {
      font-size: 16px;
    }
  }

  @media (max-width: 576px) {
    html, body, #root {
      font-size: 20px;
    }

    h2 {
      font-size: 1.1rem;
    }

    .flex-row {
      display: block;
    }
  }
`;

export const desktop = "1024px";
export const tablet = "768px";
export const mobile = "579px";
