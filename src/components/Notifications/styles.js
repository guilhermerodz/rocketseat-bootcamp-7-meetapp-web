import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import PerfectScrollbar from 'react-perfect-scrollbar';

import colors from '~/styles/colors';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;

  background: none;
  border: 0;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

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

const listWidth = 320;
export const NotificationList = styled.div.attrs(props => ({
  className: props.visible ? 'active' : '',
}))`
  position: absolute;
  width: ${listWidth}px;

  left: calc(50% - ${listWidth / 2}px);
  top: calc(100% + 30px);

  background: #fff;
  border-radius: 12px;
  padding: 15px 5px;

  display: none;
  transition: opacity 0.3s ease-out;
  opacity: 0;
  height: 0;

  &.active {
    display: block;
    opacity: 1;
    height: auto;
  }

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

const notificationStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${colors.text};

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const Notification = styled.div`
  ${notificationStyle}
`;

export const LinkedNotification = styled(Link)`
  ${notificationStyle}

  transition: transform .3s, background .3s;
  border-radius: 4px;

  &:hover {
    transform: translateY(-2px);
    background: #ededed;
  }
`;

export const NotificationPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  margin-right: 10px;
`;

export const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 16px;
    line-height: 18px;
  }

  & > div {
    margin-top: 3px;

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
`;
