import styled, { css } from "styled-components";
import { white, grey } from "../../utils/colors";

export const Container = styled.div`
  margin-top: 65px;
  width: 100%;
  margin-bottom: 150px;
  text-align: left;
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  padding: 0 15px;
  height: 64px;
  display: flex;
  flex-direction: row;
  font-weight: 400;
  width: 100%;
  justify-content: space-evenly;
  text-align: left;
  background-color: ${white};
  align-items: center;
  ${(props) =>
    props.header &&
    css`
      font-weight: 100;
    `};
`;

export const Cell = styled.div`
  text-align: justify;
  width: 100%;
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `};
  b{
    display: flex;
    color: #1EDEAA;
  }
  span{
    font-size: 12px;
    color: ${grey};
  }
`;