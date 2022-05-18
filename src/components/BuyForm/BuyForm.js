import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as Actions from "../../redux/actions";
import { fixLocaleString } from '../../utils/helpers';
import { 
  Dialog,
  Content,
  Form,
  Title,
  InputContainer,
  Input,
  Button
} from './BuyForm.styles';

const BuyForm = () => {
  const dispatch = useDispatch();
  const { rates, buy } = useSelector((state) => state.remote);
  const { user_currencies: userCurrencies, local_currency: localCurrency } =
    useSelector((state) => state.metadata);
  const [from] = useState(Object.keys(userCurrencies)[5]);
  const [fromValue, setFromValue] = useState(0);
  const [to] = useState(buy.ticker);
  const [calculated, setCalculated] = useState(0);
  
  const symbol = localCurrency.ticker + localCurrency.symbol;

  const onClickConvert = () => {
    const fromRate = rates.find(
      (item) => item.ticker === `${from}_${localCurrency.ticker}`
    );
    dispatch(Actions.handeConver(from, to, fromValue, calculated, fromRate, true));
    dispatch(Actions.setDialog(false));
  };

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

  const handleChange = (value) => {
    calculate();
    setFromValue(value);
  }

  useEffect(() => {
    calculate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, to, fromValue, calculated]);

  return (
    <Dialog>
      <Content>
        <Form>
          <Title>Tu saldo en pesos para compra es de: <b>{symbol + fixLocaleString(userCurrencies['ARS'], "es-AR", 5)}</b></Title>
          <InputContainer>
            <Input onChange={(e) => {handleChange(e.target.value)}} type="number" placeholder="Monto en pesos" />
          </InputContainer>
            <Button onClick={onClickConvert}>Comprar</Button>
        </Form>
      </Content>
    </Dialog>
  );
};

export default BuyForm
