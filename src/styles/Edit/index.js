import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  margin: 40px auto 0;

  padding: 0 40px;

  width: 100%;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: ${colors.red};
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      padding: 15px 0px;

      background: ${colors.red};
      color: #fff;
      font-weight: bold;

      border-radius: 4px;
      border: 0;

      transition: background 0.2s;
      &:hover {
        background: ${darken(0.05, colors.red)};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    .react-datepicker-wrapper > div {
      display: inline;

      > input {
        width: 100%;
      }
    }
  }
`;
