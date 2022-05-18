import styled from "styled-components";
import { purple, lightPurple, lightGrey } from "../../utils/colors"

export const Container = styled.div`
  background-color: ${lightGrey};
  padding: 0 2rem;
  width: 100%;
`;

export const Loader = styled.div`
  width: 40px;
  height: 40px;
  margin: auto;
  background: linear-gradient(90deg, ${purple} 0%, ${lightPurple} 100%);
  border-radius: 100%;  
  animation: loader .5s infinite ease-in-out;
  @keyframes loader {
    0% { 
      -webkit-transform: scale(0);
      transform: scale(0);
    } 100% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
      opacity: 0;
    }
  }
`;