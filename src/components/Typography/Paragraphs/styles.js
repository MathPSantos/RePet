import styled from 'styled-components';

export const Paragraph = styled.p`
  font-family: ${({ theme, bold }) => bold ? theme.fonts.tertiary : theme.fonts.secondary};
  color: ${({ theme, color }) => color === 'white' ? theme.colors.typography.tertiary : theme.colors.typography.secondary};
  font-size: ${({ size }) => size === 'sm' ? '18px' : '20px'};
`