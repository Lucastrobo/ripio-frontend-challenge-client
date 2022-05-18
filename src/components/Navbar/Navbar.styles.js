import styled from "styled-components";
import { lightGrey } from "../../utils/colors";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: ${lightGrey};
`;

export const Logo = styled.img`
  height: 40px;
  display: block;
  margin-left: 30px
`;

export const Icon = styled.img`
  height: 32px;
  margin: 2px 10px;
`;
