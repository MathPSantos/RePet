import styled from 'styled-components';

export const DefaultSec = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DefaultCon = styled.div`
    width: 100%;
    max-width: 1160px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 124px 20px;

    @media screen and (min-width: 720px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const LandingSec = styled(DefaultSec)`
    background: ${({ theme }) => theme.colors.background.secondary};
`;

export const LandingCon = styled(DefaultCon)`
    padding: 0px 20px 0px 20px;
    height: 100vh;
    max-height: 900px;
    
    z-index: 1;

    > p {
        margin-top: 32px;
    }

    > button {
        margin-top: 32px
    }

    @media screen and (min-width: 720px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Section = styled(DefaultSec)`
    position: relative;
    background: ${({ theme, color }) => color === 'green' ? theme.colors.background.secondary : theme.colors.background.primary};

    > img {
        position: absolute;
        bottom: 0;
        left: 0;

        display: none;

        width: 100%;
    }

    @media screen and (min-width: 720px) {
        > img {
            display: block;
        }
    }
`;

export const SectionCon = styled(DefaultCon)`
    flex-direction: column-reverse;
    align-items: center;

    > img {
        width: 100%;
    }

    @media screen and (min-width: 720px) {
        flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};

        padding-top: 90px;
        padding-bottom: 180px;

        > img {
            max-width: 500px;
        }
    }
`;

export const TextContainer = styled.div`
    width: 100%;
    margin-top: 80px;

    @media screen and (min-width: 720px) {
        width: 448px;
        margin-top: 0;
    }
`;
