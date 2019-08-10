import styled from 'styled-components';

import colors from '~/styles/colors';

import { createButton } from '~/styles/Button';

export const Container = styled.div`
  padding: 50px 40px;

  margin: 0 auto;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #fff;

  > header {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > strong {
      font-size: 23px;
    }

    > input {
      margin-right: 20px;

      background: ${colors.dark};
      border: 0;
      border-radius: 4px;

      padding: 10px;

      color: #fff;

      &::placeholder {
        opacity: 0.7;
      }
    }
  }

  > nav > ul {
    margin-top: 20px;
  }
`;

export const Button = styled(createButton())``;

export const Pagination = styled.footer`
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    padding-top: 6px;

    border: 0;
    background: transparent;
  }
`;

export const NoMeetups = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;

  align-items: center;

  > span {
    margin-top: 15px;

    max-width: 200px;
  }
`;
