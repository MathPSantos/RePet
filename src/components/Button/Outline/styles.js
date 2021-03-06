import styled from "styled-components";

import { DefaultContainer } from "../Default/styles";

export const Container = styled(DefaultContainer)`
  padding: 8px 24px;

  background: ${({ theme }) => theme.colors.button.outline.background};
  border: 1px solid ${({ theme }) => theme.colors.button.outline.border};

  color: ${({ theme }) => theme.colors.button.outline.font};
  font-size: 12px;
  display: ${({ nav }) => (nav ? "initial" : "none")};

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.button.outline.hover};
  }

  &:after {
    background: ${({ theme }) => theme.colors.button.outline.shadow};
  }

  @media screen and (min-width: 720px) {
    display: ${({ nav }) => (!nav ? "initial" : "none")};
  }
`;
