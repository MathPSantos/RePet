import styled from 'styled-components';

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme, color }) => color === 'green' ? theme.colors.typography.quaternary : color === 'white' ? theme.colors.typography.tertiary : theme.colors.typography.primary};
  font-size: ${({ size }) => size === 'sm' ? '27px' : '40px'};

  text-align: ${({ align }) => align ? align : 'left' };

  @media screen and (min-width: 720px) {
    text-align: ${({ resAlign }) => resAlign ? resAlign : 'left'};
    font-size: ${({ size }) => size === 'sm' && '36px' };
  }
`