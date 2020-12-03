import { createGlobalStyle } from 'styled-components';

import Mplus_Bold from '../assets/fonts/Mplus/MPLUSRounded1c-Bold.ttf';
import Lato_Bold from '../assets/fonts/Lato/Lato-Bold.ttf';
import Lato_Regular from '../assets/fonts/Lato/Lato-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Mplus_Bold';
    font-style: bold;
    font-weight: 400;
    src: local('Mplus_Bold'), local('Mplus_Bold'),
      /* Modern Browsers */ url(${Mplus_Bold})
        format('truetype');
    }

    @font-face {
        font-family: 'Lato_Bold';
        font-style: bold;
        font-weight: 400;
        src: local('Lato_Bold'), local('Lato_Bold'),
        /* Modern Browsers */ url(${Lato_Bold})
            format('truetype');
    }

    @font-face {
        font-family: 'Lato_Regular';
        font-style: bold;
        font-weight: 400;
        src: local('Lato_Regular'), local('Lato_Regular'),
        /* Modern Browsers */ url(${Lato_Regular})
            format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        font-family: ${({ theme }) => theme.fonts.primary};
        background: ${({ theme }) => theme.colors.background.primary};
        overflow-x: hidden;
    }

    #root {
        width: 100%;
        min-height: 100vh;
    }
    
    button {
        border: none;
        background: none;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;