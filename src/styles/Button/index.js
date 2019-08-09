import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const createButton = (color = colors.red, hoverColor) => styled.button`
  padding: 10px;

  background: ${color};
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  border-radius: 4px;
  border: 0;

  transition: background 0.2s;
  &:hover {
    background: ${hoverColor || darken(0.05, color)};
  }
`;
