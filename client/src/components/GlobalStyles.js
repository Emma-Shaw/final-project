import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-dark-wine: #780000;
        --color-bright-red: #C1121F;
        --color-cool-navy: #003049;
        --color-chill-blue: #669BBC;
        --color-calm-beige: #FFF8E8;
        --font-body: "Montserrat", Arial, Helvetica, sans-serif;
        --font-title: 'Pinyon Script', cursive;
        letter-spacing: 1px;
        width: 100%;
        height: 100%;
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
        letter-spacing: 1px;
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
    p {
        font-size: 15px;
    }
    h1 {
        color: var(--color-cool-navy);
        font-size: 40px;
        font-family: var(--font-title);
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
        height: 40px;
        font-size: 15px;
        color: var(--color-dark-wine);
        border: 2px solid var(--color-dark-wine);
        background: var(--color-calm-beige);
        font-family: var(--font-body);
        letter-spacing: 1px;

        &:hover {
            cursor: pointer;
            background: var(--color-dark-wine);
            color: var(--color-calm-beige);
        }
    }
    Link {
        text-decoration: none;
        color: var(--color-cool-navy);

        &:focus, &:active, &:visited, &:link, &:hover {
            text-decoration: none;
        }
    }
    input {
        width: 300px;
        padding: 10px;
        margin: 5px 0px;
        font-size: 15px;
        font-family: var(--font-body);
        background: var(--color-calm-beige);
        color: var(--color-dark-wine);
        border: 1px solid var(--color-cool-navy);

        ::placeholder{
            color: var(--color-cool-navy);
        };
    }
`;

export default GlobalStyle;