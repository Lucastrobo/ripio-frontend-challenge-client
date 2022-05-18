import styled from "styled-components";
import { purple, lightPurple } from "../../utils/colors";

export const Dialog = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

export const Content = styled.div`
  margin: 5rem auto;
  padding: 20px;
  width: 400px;
`;

export const Form = styled.div`
  background-color: #FAFAFA;
  border-radius: 20px;
  box-sizing: border-box;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.span`
  color: #000;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  b{
    color: #1EDEAA;
    font-size: 22px;
  }
`;

export const InputContainer = styled.div`
  padding: 0 45px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-size: 18px;
  height: 100%;
  outline: 0;
  width: 100%;
  border: 0px;
  border-bottom: 1px solid #7908FF;
  background-color: #FAFAFA;
`;


export const Button = styled.button`
  width: 270px;
  align-self: center;
  height: 45px;
  border: 0px;
  font-weight: bold;
  background: linear-gradient(90deg, ${purple} 0%, ${lightPurple} 100%);
  border-radius: 22px;
  color: white;
  cursor: pointer;
`;