import styled from 'styled-components';

import { DefaultSec, DefaultCon } from '../Home/styles';

export const LandingSec = styled(DefaultSec)`
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const LandingCon = styled(DefaultCon)`
  flex-direction: column;
  padding: 200px 20px;

  @media screen and (min-width: 860px) {
    padding: 280px 20px;

    > h1, > p {
      max-width: 640px
    }

    > p {
      margin-top: 20px
    }
  }
`;      