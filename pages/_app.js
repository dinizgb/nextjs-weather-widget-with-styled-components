import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    background: #f5f6fe;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #000;
  }
  main {
    min-height: calc(100vh - 125px);
  }
  *{
    margin: 0;
    -webkit-transition: 0.25s;
    -moz-transition: 0.25s;
    -o-transition: 0.25s;
    -ms-transition: 0.25s;
    transition: 0.25s;
    &:hover {
      -webkit-transition: 0.2s;
      -moz-transition: 0.2s;
      -o-transition: 0.2s;
      -ms-transition: 0.2s;
      transition: 0.2s;
    }
  }
  .container {
    max-width: 1024px;
    padding: 0 6rem;
    margin: 0 auto;
    height: 100%;
    position: relative;
    @media (max-width: 1100px) {
      padding: 0;
    }
  }
  .row{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .space-between{
    justify-content: space-between;
  }
`

const theme = {
  colors: {
    primary: '#000',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
