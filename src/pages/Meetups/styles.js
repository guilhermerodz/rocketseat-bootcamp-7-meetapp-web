import styled from 'styled-components';
import { lighten } from 'polished';

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

    strong {
      font-size: 23px;

      opacity: 0.5;
      transition: opacity 0.3s;

      & + strong {
        padding-left: 15px;
        margin-left: 15px;
        border-left: 1px solid #eee;
      }

      &.active {
        opacity: 1;
      }

      &:hover {
        cursor: pointer;
      }
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

export const Meetup = styled.li`
  & + li {
    margin-top: 10px;
  }

  > a {
    color: #fff;

    display: flex;
    flex-direction: column;

    border-radius: 10px;

    padding: 15px 20px;
    background: ${colors.dark};

    transition: background 0.2s, transform 0.13s;

    .meetup-crop {
      transform: scaleY(0);

      width: 100%;
      height: 0;

      overflow: hidden;

      border-radius: 10px;

      transition: background 0.2s, transform 0.5s, height 0.5s;

      img {
        width: 100%;

        opacity: 0;

        transform-origin: top;

        transition: opacity 0.5s;
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 18px;
      }

      date {
        opacity: 0.6;
      }
    }

    &:hover {
      background: ${lighten(0.01, colors.dark)};
      transform: translateY(-2px);

      .meetup-crop {
        transform: scaleY(1);

        height: 150px;

        display: block;

        margin-bottom: 15px;

        img {
          opacity: 1;
        }
      }

      cursor: pointer;
    }
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
