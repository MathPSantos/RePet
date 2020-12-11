import styled from "styled-components";

import { DefaultSec, DefaultCon } from "../Home/styles";

export const LandingSec = styled(DefaultSec)`
  position: relative;
  background: ${({ theme }) => theme.colors.background.primary};

  > img {
    width: 100%;

    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;

    display: none;
  }

  @media screen and (min-width: 860px) {
    > img {
      display: block;
    }
  }
`;

export const LandingCon = styled(DefaultCon)`
  flex-direction: column;
  padding: 200px 20px;

  @media screen and (min-width: 860px) {
    padding: 280px 20px;

    > h1,
    > p {
      max-width: 640px;
    }

    > p {
      margin-top: 20px;
    }
  }
`;

export const RulesContainer = styled(LandingSec)`
  background: ${({ theme }) => theme.colors.background.secondary};
`;

export const RulesContent = styled.div`
  width: 100%;
  max-width: 1160px;
  padding: 132px 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > p {
      font-family: ${({ theme }) => theme.fonts.secondary};
      margin-top: 16px;
      margin-left: 28px;
      color: #fff;
      line-height: 30px;
    }

    > ul {
      margin-top: 16px;
      margin-left: 28px;

      > li {
        font-family: ${({ theme }) => theme.fonts.secondary};
        color: #fff;
        line-height: 30px;
      }
    }
  }

  div + div {
    margin-top: 32px;
  }

  @media screen and (min-width: 860px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 132px 20px 192px 20px;

    > div {
      width: 50%
    }

    > div:first-child {
      margin-right: 20px
    }
  }
`;

export const DetritosContainer = styled(LandingSec)``;

export const DetritosContent = styled.div`
  width: 100%;
  max-width: 1160px;

  padding: 132px 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  z-index: 1;

  > h1 {
    margin-bottom: 24px;
  }

  > img {
    width: 100%;
    max-width: 500px;
  }

  @media screen and (min-width: 860px) {
    padding-top: 90px;
    padding-bottom: 160px;

    > img {
      max-width: 100%;
    }
  }
`;

export const BannerContainer = styled(LandingSec)`
  background: ${({ theme }) => theme.colors.background.secondary};
`;

export const BannerContent = styled.div`
  width: 100%;
  max-width: 1160px;
  padding: 132px 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  z-index: 1;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      margin-bottom: 30px;
    }
  }

  div + div {
    margin-top: 41px;
  }

  @media screen and (min-width: 860px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 132px 20px 192px 20px;

    > div {
      width: 50%
    }

    > div:first-child {
      margin-right: 20px
    }
  }
`;
