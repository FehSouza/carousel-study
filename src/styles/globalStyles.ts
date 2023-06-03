import { createGlobalStyle as css } from 'styled-components'

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;

    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }

  body {
    width: 100vw;
    height: 100vh;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
  }

  li {
    list-style: none;
  }
`
