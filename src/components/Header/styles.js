import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  background: #191620;
  padding: 0 30px;
`;

export const Content = styled.div`
  margin: 0 auto;

  height: 64px;
  max-width: 900px;

  display: flex;

  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #666;
    }

    & > a {
      max-height: 43px;

      font-weight: bold;
      color: ${colors.red};
      opacity: 0.7;

      transition: 0.2s;

      &:hover {
        opacity: 1;
        transform: translateY(-2px);
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  margin-right: 10px;
  margin-left: 20px;
  padding-left: 20px;

  border-left: 1px solid #666;

  a {
    display: flex;
    align-items: center;

    transition: transform 0.2s;

    strong {
      text-align: right;

      font-size: 16px;
      color: ${colors.red};
      opacity: 0.85;

      transition: opacity 0.2s;
    }

    &:hover {
      transform: scale(1.03);

      strong {
        opacity: 1;
      }
    }
  }

  img {
    margin-left: 10px;

    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
