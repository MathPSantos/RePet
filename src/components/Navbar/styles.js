import styled from 'styled-components';

import { Outline } from '../Button';

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 2;

    background: ${({ scrolled, theme }) => scrolled && theme.colors.background.primary};

    box-shadow: ${({ scrolled, theme }) => scrolled && '0px 4px 4px rgba(0,0,0,0.15)'};
    transition: all .2s;
`;

export const Content = styled.nav`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    padding: 16px 20px;

    > img {
        width: 44px;
    }

    @media (min-width: 720px) {
        max-width: 1160px;
    }

`;

export const Navlinks = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    transform: ${({ active }) => active ? 'translateX(0);' : 'translateX(100%)'} ;

    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.colors.background.primary};

    transition: all .3s;
    z-index: 2;

    > ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        list-style: none;
    }

    > ul li + li {
        margin-top: 16px;
        margin-left: 0px;
        margin-bottom: 16px;
    }

    > ul li a {
        text-decoration: none;
        font: 800 20px ${({ theme }) => theme.fonts.primary}, sans-serif;
        color: ${({ theme, colored, scrolled, active }) => colored || scrolled || active ? theme.colors.typography.primary : theme.colors.typography.tertiary};
        transition: all .2s;
    }

    @media screen and (min-width: 720px) {
        position: relative;

        width: initial;
        height: initial;

        background: transparent;

        transform: translate(0);

        > ul {
            flex-direction: row;
        }

        > ul li + li {
            margin-top: 0;
            margin-left: 28px;
            margin-bottom: 0;
        }
    }
`;

export const Burguer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
    z-index: 2;

    > div {
        width: 26px;
        height: 3px;

        background-color: ${({ colored, scrolled }) => colored || scrolled ? '#313131' : '#FFF'}; 

        transition: all .3s;
    }

    > div + div {
        margin-top: 5px;
    }

    > div:nth-child(1) {
        ${({ active }) => active && 'transform: rotate(-45deg) translate(-6px, 5px);'}
    }

    > div:nth-child(2) {
        ${({ active }) => active && 'transform: translateX(100%); opacity: 0;'}
    }

    > div:nth-child(3) {
        ${({ active }) => active && 'transform: rotate(45deg) translate(-6px, -5px);'}
    }

    @media screen and (min-width: 720px) {
        display: none;
    }
`;

export const Button = styled(Outline)`
    display: ${({ nav }) => nav ? 'initial' : 'none'};

    @media screen and (min-width: 720px) {
        display: ${({ nav }) => !nav ? 'initial' : 'none'};
    }
`;