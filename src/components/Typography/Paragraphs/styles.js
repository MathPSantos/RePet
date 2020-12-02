import styled from 'styled-components';

export const Paragraph = styled.p`
  font-family: ${({ theme, bold }) => bold ? theme.fonts.tertiary : theme.fonts.secondary};
  color: ${({ theme, color }) => color === 'white' ? theme.colors.typography.tertiary : theme.colors.typography.secondary};
  font-size: ${({ size }) => size === 'sm' ? '18px' : '20px'};

  text-align: ${({ align }) => align ? align : 'left' };

  @media screen and (min-width: 720px) {
    text-align: ${({ resAlign }) => resAlign ? resAlign : 'left'};
  }
`