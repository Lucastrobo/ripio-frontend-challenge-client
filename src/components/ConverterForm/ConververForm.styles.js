import styled from "styled-components";
import { purple, lightPurple, lightGrey } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  img {
    height: 20px;
    margin: 0 20px;
  }
`;

export const Currency = styled.select`
  font-size: 40px;
  font-weight: 400;
  outline: none;
  border: none;
  text-align: center;
  background-color: ${lightGrey};
`;

export const Options = styled.option`
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  background-color: ${lightGrey};
`;

export const Amount = styled.input`
  font-size: 40px;
  border: 0px;
  border-bottom: 1px solid ${purple};
  width: 20%;
  margin: 0 20px;
  background-color: ${lightGrey};
  &:focus-visible {
    outline: none;
  }
`;

export const AmountSpan = styled.span`
  font-size: 40px;
  border: 0px;
  border-bottom: 1px solid ${purple};
  width: 20%;
  margin: 0 20px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:focus-visible {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 240px;
  height: 45px;
  border: 0px;
  font-weight: bold;
  background: linear-gradient(90deg, ${purple} 0%, ${lightPurple} 100%);
  border-radius: 22px;
  color: white;
  cursor: pointer;
`;