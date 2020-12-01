import styled from 'styled-components';

import { DefaultContainer } from '../Default/styles';

export const Container = styled(DefaultContainer)`
    padding: 12px 24px;

    background: ${({ theme }) => theme.colors.button.flat.background};
    border: 1px solid ${({ theme }) => theme.colors.button.flat.border};

    color: ${({ theme }) => theme.colors.button.flat.font};
    font-size: 16px;

    &:hover,
    &:focus {
        background: ${({ theme }) => theme.colors.button.flat.hover};
    }

    &:after {
        background: ${({ theme }) => theme.colors.button.flat.shadow};
    }

    @media screen and (min-width: 720px) {
        padding: 12px 28px;      
    }
`;