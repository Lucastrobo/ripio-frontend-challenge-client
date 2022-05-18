import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as Actions from "../../redux/actions";
import { fixLocaleString } from '../../utils/helpers';
import conversorImg from "../../img/conversor.svg";
import { 
    Container,
    Currency,
    Options,
    Amount,
    AmountSpan,
    Button
} from './ConververForm.styles';

const ConverterForm = () => {
  const dispatch = useDispatch();
  const { currencies, rates } = useSelector((state) => state.remote);
  const { user_currencies: userCurrencies, local_currency: localCurrency } =
    useSelector((state) => state.metadata);
  const [from, setFrom] = useState(Object.keys(userCurrencies)[0]);
  const [fromValue, setFromValue] = useState(0);
  const [to, setTo] = useState(currencies[2].ticker);
  const [calculated, setCalculated] = useState(0);

  const calculate = (e) => {
    const fromRate = rates.find((item) => item.ticker === `${from}_${localCurrency.ticker}`).buy_rate;
    const currentValue = e ? e.target.value : fromValue ? fromValue : 0;
    if (e && e.target.value) {
       setFromValue(e.target.value);
    }
    if (to === localCurrency.ticker) {
      setCalculated(fromRate * currentValue);
    } else {
      const toRate = rates.find(
        (item) => item.ticker === `${to}_${localCurrency.ticker}`
      ).buy_rate;
      setCalculated((fromRate * currentValue) / toRate);
    }
  };

  const onClickCurrency = (value, selection) => {
    if(selection === "from"){
      setFrom(value)
    }
    if(selection === "to"){
      setTo(value)
    }
  }

  const onClickConvert = () => {
    const fromRate = rates.find(
      (item) => item.ticker === `${from}_${localCurrency.ticker}`
    );
    dispatch(Actions.handeConver(from, to, fromValue, calculated, fromRate, false));
  };

  useEffect(() => {
    calculate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, to, fromValue, calculated]);

  return (
    <Container>
      <Currency
        value={from}
        onChange={(e) => {onClickCurrency(e.target.value, 'from')}}
      >
        {Object.keys(userCurrencies).map(
          (item, index) =>
            item !== localCurrency.ticker &&
            item !== to && (
              <Options key={index} value={item}>
                {item}
              </Options>
            )
        )}
      </Currency>
      <Amount 
        defaultValue={0} 
        type="number" 
        onChange={calculate} 
      />
      <img 
        alt="arrow" 
        src={conversorImg} 
      />
      <Currency
        value={to}
        onChange={(e) => {onClickCurrency(e.target.value, 'to')}}
      >
        {currencies.map(
          (item) =>
            item.ticker !== from &&
            item.ticker !== localCurrency.ticker && (
              <Options key={item.ticker} value={item.ticker}>
                {item.ticker}
              </Options>
            )
        )}
      </Currency>
      <AmountSpan>
        {fixLocaleString(calculated, "es-AR", 5)}
      </AmountSpan>
      <Button 
        onClick={onClickConvert}>Convertir</Button>
    </Container>
  );
};

export default ConverterForm;
