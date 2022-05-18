import React from "react";
import { useSelector, useDispatch } from "react-redux";
import propTypes from "prop-types";

import * as Actions from "../../redux/actions";
import { fixLocaleString } from '../../utils/helpers';
import defaultImg from "../../img/default.svg";
import { 
    Container, 
    WrapperHead, 
    Leyend, 
    Button, 
    WrapperBody, 
    Image,
    Row
} from './Card.styles';

const Card = ({ ticker, amount }) => {
  const dispatch = useDispatch();
  const { local_currency } = useSelector((state) => state.metadata);
  const { currencies, rates } = useSelector((state) => state.remote);
  
  const currency = currencies.find((item) => item.ticker === ticker);
  const { buy_rate } = rates.find((item) => item.ticker === `${ticker}_${local_currency.ticker}`) || 0;
  const symbol = '≈ ' + local_currency.ticker + local_currency.symbol;

  const onClickBuy = (currencyName, buyRate, amount) => () => {
    dispatch(Actions.setDialog(true));
    dispatch(Actions.setBuy({'ticker': ticker, 'currency_name': currencyName, 'buy_rate': buyRate, 'amount': amount}));
  }

  return (
    <Container>
      <WrapperHead>
        <Leyend>{`Cuenta ${currency.name}`}</Leyend>
        {currency.ticker !== 'ARS' &&(
          <Button
            onClick={onClickBuy(currency.name, buy_rate, amount)}
          >
            Comprar
          </Button>
        )}
      </WrapperHead>
      <WrapperBody>
        <Image
          src={currency.url_images.image_svg}
          onError={(event) => (event.target.src = defaultImg)}
        />
        <span>
          { fixLocaleString(amount, "es-AR", 5) }
        </span>
        <span> {ticker}</span>
      </WrapperBody>
      <Row>
        <Leyend>
          {symbol + fixLocaleString(buy_rate * amount, "es-AR", 2)}
        </Leyend>
      </Row>
    </Container>
  );
};

Card.propTypes = {
  ticker: propTypes.string,
  amount: propTypes.number,
  imgUrl: propTypes.string,
};

export default Card;
