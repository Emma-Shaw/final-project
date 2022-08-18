import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-dark-wine: #780000;
        --color-bright-red: #C1121F;
        --color-cool-navy: #003049;
        --color-chill-blue: #669BBC;
        --color-calm-beige: #FDF0D5;
        --font-body: "Montserrat", Arial, Helvetica, sans-serif;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        background: var(--color-calm-beige);
        font-family: var(--font-body);
        color: var(--color-cool-navy);
    }
    ol, ul, li {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    h1 {
        color: var(--color-cool-navy);
        font-size: 25px;
    }
    h2 {
        color: var(--color-chill-blue);
        font-size: 22px;
    }
    h3 {
        color: var(--color-bright-red);
        font-size: 20px;
    }
    button {
        width: 150px;
        height: 45px;
        font-size: 20px;
        color: var(--color-calm-beige);
        background: var(--color-bright-red);
        border: none;
        border-radius: 30px;
        font-family: var(--font-body);

        &:hover {
            cursor: pointer;
            opacity: 0.5; // to replace with animation
        }
    }
`;

export default GlobalStyle;