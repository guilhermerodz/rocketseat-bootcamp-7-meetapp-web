import styled, { css } from 'styled-components';

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

  ${props =>
    props.animate &&
    css`
      animation: slide 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}

  @keyframes slide {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slide-up {
    0% {
      transform: translateY(1000%);
      opacity: 0;
    }

    60% {
      opacity: 0.3;
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-up-out {
    0% {
      transform: translateY();
      opacity: 1;
    }

    40% {
      opacity: 0.3;
    }

    100% {
      opacity: 0;
      transform: translateY(-1000%);
    }
  }

  > header {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div > button + button {
      margin-left: 10px;
    }

    h1 {
      text-shadow: 4px 4px rgba(0, 0, 0, 0.7);
    }

    > div {
      display: flex;

      .canceled-tag {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-left: 10px;

        padding: 6px 10px;

        border-radius: 5px;

        background: rgba(0, 0, 0, 0.1);
        color: #fff;
        font-size: 16px;
      }
    }
  }

  > nav > ul {
    margin-top: 20px;
  }

  > .banner {
    margin-top: 20px;
    border-radius: 10px;

    width: 100%;
    max-height: 250px;

    overflow: hidden;

    box-shadow: 0 5px rgba(0, 0, 0, 0.3);

    img {
      width: 100%;

      transition: transform 0.5s;

      transform-origin: center;
      &:hover {
        transform: scale(1.1);

        cursor: crosshair;
      }
    }
  }

  > .info {
    margin-top: 20px;

    &,
    h3 {
      font-size: 18px;
      font-weight: normal;
    }

    > footer {
      margin-top: 20px;

      font-size: 15px;

      display: flex;
      flex-direction: column;

      > .details {
        opacity: 0.7;

        display: flex;

        justify-content: space-between;
        align-items: center;

        > div {
          display: flex;
          align-items: center;

          > a {
            color: #fff;

            border-bottom: 2px dotted rgba(255, 255, 255, 0.2);

            &:hover {
              opacity: 0.7;
            }
          }

          > svg {
            margin-right: 5px;
          }
        }
      }

      > .powered {
        margin-top: 20px;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        > strong {
          margin-left: 10px;
          font-size: 20px;
        }

        > img {
          margin-left: 10px;

          width: 30px;
          height: 30px;

          border-radius: 50%;

          &:hover {
            cursor: crosshair;
          }
        }
      }

      > .subscribe {
        margin-top: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        > ul.subscribers {
          display: flex;
          justify-content: flex-end;
          align-items: center;

          > li {
            position: relative;

            width: 25px;
            height: 25px;

            transition: transform 0.3s, margin 0.3s;

            & + li {
              margin-left: 5px;
            }

            &:hover {
              transform: scale(1.3);

              margin: 0 10px;

              > .subscriber-tooltip {
                visibility: visible;
              }
            }

            > img {
              width: 100%;
              height: 100%;

              border-radius: 50%;

              &:hover {
                cursor: crosshair;
              }
            }

            > .rest {
              border: 0;
              background: none;

              color: #fff;
            }
          }
        }
      }
    }
  }
`;

export const GrayButton = styled(createButton('#525252'))``;

export const RedButton = styled(createButton(colors.red))``;

export const BlueButton = styled(createButton('#4DBAF9'))``;

export const CancellationModal = styled.div`
  color: #fff;

  display: ${props => (props.open ? 'block' : 'none')}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 3; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  > .content {
    background-color: ${colors.cancel};
    margin: 100px auto;
    padding: 20px;
    border: 0;
    border-radius: 10px;

    width: max-content; /* Could be more or less, depending on screen size */

    header {
      > .close {
        margin-left: 10px;

        background: transparent;
        border: 0;

        float: right;

        transition: transform 0.3s;

        &:hover,
        &:focus {
          cursor: pointer;

          transform: scale(1.5);
        }
      }
    }

    > div {
      margin-top: 20px;
      margin-top: 20px;

      display: flex;
      justify-content: center;
      align-items: center;

      > button {
        margin: 0 10px;
      }
    }
  }
`;

export const SubscribersModal = styled.div.attrs(props => ({
  className: props.subModalOut ? 'out' : '',
}))`
  color: #fff;

  display: ${props => (props.open ? 'block' : 'none')}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 3; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  > .content {
    background-color: ${colors.cancel};
    margin: 100px auto;
    padding: 20px;
    border: 0;
    border-radius: 10px;

    width: max-content; /* Could be more or less, depending on screen size */

    header {
      > .close {
        margin-left: 20px;

        background: transparent;
        border: 0;

        float: right;

        transition: transform 0.3s;

        &:hover,
        &:focus {
          cursor: pointer;

          transform: scale(1.5);
        }
      }
    }

    > footer {
      margin-top: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      > button {
        padding-top: 6px;

        border: 0;
        background: transparent;
      }
    }

    > .subs {
      overflow: hidden;
      width: 100%;

      > ul {
        margin-top: 20px;
        margin-top: 20px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > li {
          width: 100%;

          display: flex;
          justify-content: flex-start;
          align-items: center;

          animation: slide-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

          > span {
            margin-left: 10px;
            font-size: 14px;
          }

          & + li {
            margin-top: 10px;
            padding-top: 10px;

            border-top: 1px solid rgba(255, 255, 255, 0.2);
          }

          > img {
            width: 30px;
            height: 30px;

            border-radius: 50%;
          }
        }
      }

      > .no-subs {
        margin-top: 20px;

        display: flex;
        flex-direction: column;

        align-items: center;

        > span {
          max-width: 200px;
        }
      }
    }
  }

  &.out > .content > .subs > ul > li {
    animation: slide-up-out 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;
