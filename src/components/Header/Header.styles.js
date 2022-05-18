import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 100px;
  align-items: flex-start;
  margin: 20px 0;
  height: 100px;
`;

export const Title = styled.h2`
  margin: 5px 0;
`;

export const TitleWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  span {
    font-weight: 600;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;