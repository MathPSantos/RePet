import styled from "styled-components";

export const MedalsContainer = styled.section`
  position: relative;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const MedalsContent = styled.div`
  width: 100%;
  max-width: 1160px;

  padding: 160px 20px 132px 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > p {
    margin-top: 8px;
  }

  @media screen and (min-width: 860px) {
    padding: 200px 20px 176px 20px;
  }
`;

const gutter = "20px";

export const MedalsList = styled.ul`
  width: 100%;

  margin-top: 40px;

  display: grid;
  grid-gap: calc(${gutter} / 2);
  grid-template-columns: 10px;
  grid-template-rows: 232px;
  grid-auto-flow: column;
  grid-auto-columns: 160px;

  overflow-x: scroll;
  scroll-snap-type: x proximity;

  &:before,
  &:after {
    content: "";
    width: 5px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  > li {
    width: 140px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > img {
      width: 100%;
    }

    > p {
      width: 100%;
      margin-top: 24px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.typography.primary};
    }
  }
`;

export const MedalInfo = styled.div`
  width: 100%;

  margin-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > img {
    width: 100%;
    max-width: 500px;
    margin-top: 60px;
    flex-grow: 1;
  }

  @media screen and (min-width: 860px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 40%;
    }
  }
`;

export const MedalInfoContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > h3 {
    margin-top: 28px;

    font-size: 24px;
    color: ${({ theme }) => theme.colors.typography.primary};
  }

  > p {
    margin-top: 8px;

    font-size: 15px;
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  @media screen and (min-width: 860px) {
    max-width: 564px;
    margin-right: 32px;

    > h3 {
      font-size: 28px;
    }

    > p {
      font-size: 18px;
    }
  }
`;

export const DetritosContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.background.secondary};
`;

export const DetritosContent = styled.div`
  width: 100%;
  max-width: 1160px;

  padding: 132px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  > img {
    width: 100%;
    max-width: 500px;
  }

  > h1:first-child, p {
    margin-right: auto;
  }

  > p {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 860px) {
    padding-top: 90px;
    padding-bottom: 160px;

    > img {
      max-width: 100%;
    }
  }
`;

