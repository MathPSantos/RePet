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
