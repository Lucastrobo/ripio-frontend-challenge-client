import styled, { css } from "styled-components";

import { purple, lightGrey, white } from "../../utils/colors";

export const Container = styled.div`
  height: 100%;
  width: 256px;
  background-color: ${white};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  width: 100%;
  height: 50px;
  padding-left: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;

  ${(props) =>
    props.active &&
    css`
      border-left: 5px solid ${purple};
      font-weight: bold;
    `};

  &:hover {
    background-color: ${lightGrey};
  }
`;