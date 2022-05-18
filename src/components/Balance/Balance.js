import React from "react";
import { useSelector } from "react-redux";

import Card from "../Card";
import { Container } from './Balance.styles';

const Balance = () => {
  const { user_currencies: userCurrencies } = useSelector(
    (state) => state.metadata
  );


  return (
    <Container>
      {Object.keys(userCurrencies).map((item, index) => (
        item === 'ARS' &&(
          <Card key={index} ticker={item} amount={userCurrencies[item]} />
        )
      ))}
      {Object.keys(userCurrencies).map((item, index) => (
        item !== 'ARS' &&(
          <Card key={index} ticker={item} amount={userCurrencies[item]} />
        )
      ))}
    </Container>
  );
};

export default Balance;
