import React from "react";
import { useSelector } from "react-redux";

import { Total, Currency } from './TotalCount.styles';

const TotalCount = () => {
  const { local_currency: currency, user_currencies: userCurrencies } =
    useSelector((state) => state.metadata);
  const { rates } = useSelector((state) => state.remote);

  const totalizer = Object.keys(userCurrencies).reduce((acc, cur) => {
    const rate = rates.find(
      (rate) => rate.ticker === `${cur}_${currency.ticker}`,
    )
    acc += rate ? rate.buy_rate * userCurrencies[cur] : 0;
    return acc;
  }, 0);

  return (
    <div>
      <Total>
        {`${currency.symbol} ${totalizer.toLocaleString("es-AR")}`}
      </Total>
      <Currency> {currency.ticker}</Currency>
    </div>
  );
};

export default TotalCount;
