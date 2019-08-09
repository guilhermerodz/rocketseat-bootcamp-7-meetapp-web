import styled from 'styled-components';

export const Container = styled.div`
  align-self: stretch;

  label {
    cursor: pointer;

    width: 100%;
    max-height: 26vw;
    overflow: hidden;

    display: block;

    margin-bottom: 10px;

    background: rgba(0, 0, 0, 0.05);
    transition: background 0.3s;

    border-radius: 4px;

    &:hover {
      background: rgba(0, 0, 0, 0.25);

      .overlay {
        opacity: 1;
        svg {
          transform: scale(1.2);
          opacity: 1;
        }
      }
    }

    .icon-add {
      padding: 50px 0px;

      display: flex;
      align-items: center;
      justify-content: center;

      z-index: 3;
    }

    img {
      width: 100%;
    }

    input {
      display: none;
    }
  }
`;
