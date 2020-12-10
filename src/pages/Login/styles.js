import styled from "styled-components";

import { Flat } from "../../components/Button";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 420px;

  margin: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > form {
    width: 100%;

    margin-top: 22px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .input-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      label {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.typography.quaternary};
      }

      input {
        width: 100%;
        margin-top: 8px;
        padding: 6px 14px;

        background: none;
        border: none;
        border-bottom: 3px solid #a3dfb4;

        font-size: 14px;
        color: #313131;
        font-family: ${({ theme }) => theme.fonts.tertiary};
      }
    }

    .input-group + .input-group {
      margin-top: 16px;
    }

    .form-actions {
      width: 100%;
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .remember-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      span { margin-left: 4px; }
    }
  }
`;

export const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavContent = styled.div`
  width: 100%;
  max-width: 1160px;

  padding: 40px 20px 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    width: 36px;
    height: 36px;
    background: ${({ theme }) => theme.colors.background.secondary};

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled(Flat)`
  width: 100%;
  text-align: center;

  margin-top: 42px;
`;
