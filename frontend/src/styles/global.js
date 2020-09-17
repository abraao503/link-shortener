import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif; 
  }

  h1 {
    font-family: 'Roboto Slab', serif;
  }

  input, button {
    font-family: 'Roboto', sans-serif; 
  }

  :root {
    --color-red: #AA1423;
    --color-orange: #FF6E14;
    --color-border: #D2D2D2;
    --color-supporting-text: #777;
    --color-background-and-line: #EEE;
  }
`;