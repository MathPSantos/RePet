import styled from "styled-components";

export const MedalsContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  grid-auto-columns:160px;

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
