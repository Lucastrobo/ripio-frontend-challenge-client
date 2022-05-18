import styled from "styled-components";
import { purple, grey, white } from "../../utils/colors";

export const Container = styled.div`
  height: 160px;
  max-width: 352px;
  border-radius: 6px;
  background-color: ${white};
  box-shadow: 0px 0px 50px 0px #0000000b;
  margin: 10px 30px 0 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  animation: 1s linear fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const WrapperHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Leyend = styled.span`
  color: ${grey};
  font-size: 16px;
  font-weight: 400;
`;

export const Button = styled.div`
  color: ${purple};
  cursor: pointer;
`;

export const Row = styled.div`
  margin: 0 auto;
`;

export const WrapperBody = styled.div`
  margin: 0 auto;
  font-size: 32px;
`;

export const Image = styled.img`
  height: 35px;
  vertical-align: bottom;
  margin-right: 10px;
}
`;