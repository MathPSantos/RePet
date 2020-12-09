import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DefaultContainer = styled(Link)`
    position: relative;

    border: none;
    border-radius: 16px;
    
    font-family: ${({ theme }) => theme.fonts.primary};

    cursor: pointer;
    transition: background .2s;

    &:focus {
        transform: translateY(5px);
    }

    &:after {
        content: '';

        position: absolute;
        top: 0;
        left: 0;

        border-radius: 16px;

        width: 100%;
        height: calc(100% + 5px);

        z-index: -1;
    }

    &:focus::after {
        display: none;
    }
`;