import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: #139036;

  display: flex;   
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1160px;
  padding: 38px 20px;

  display: flex;   
  justify-content: space-between;
  align-items: center;

  > img {
    width: 32px;
  }

  > p {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.typography.tertiary};
    font-size: 12px;
  }

  @media screen and (min-width: 720px) {
    > p {
      font-size: 16px;
    }
  }
`; 