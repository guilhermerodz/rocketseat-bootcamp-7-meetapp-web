import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

import colors from '~/styles/colors';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;

  background: none;
  border: 0;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #fff;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;

  left: calc(50% - 130px);
  top: calc(100% + 30px);

  background: #fff;
  border-radius: 12px;
  padding: 15px 5px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;

    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #fff;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.text};

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 16px;
    line-height: 18px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    time {
      font-size: 14px;
      opacity: 0.7;
    }

    button {
      font-size: 14px;
      border: 0;
      background: none;
      opacity: 0.8;
    }

    ${props =>
      props.unread &&
      css`
        & button::after {
          content: '';
          display: inline-block;
          margin-left: 10px;
          width: 8px;
          height: 8px;
          background: ${colors.red};
          border-radius: 50%;
        }
      `}
  }
`;
