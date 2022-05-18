import * as Const from "../utils/constants";
import { toast } from "react-toastify";
import { fixLocaleString } from '../utils/helpers';
import axios from "axios";

const setRates = (rates) => {
  return { type: Const.UPDATE_RATES, rates };
};

export const getRates = () => {
  return { type: Const.GET_RATES };
};

export const getCurrencies = () => {
  return { type: Const.GET_CURRENCIES };
};
const setCurrencies = (currencies) => {
  return { type: Const.UPDATE_CURRENCIES, currencies };
};

const setLoading = (loading) => {
  return { type: Const.UPDATE_LOADING, loading };
};

const setSuccess = (success) => {
  return { type: Const.UPDATE_SUCCESS, success };
};

export const setUser_currencies = (currencies) => {
  return { type: Const.UPDATE_USER_CURRENCIES, currencies };
};

export const setUserSingleCurrency = (currency) => {
  return { type: Const.UPDATE_USER_SINGLE_CURRENCY, currency };
};

export const addMovement = (movement) => {
  return { type: Const.ADD_MOVEMENT, movement };
};

export const setDialog = (dialog) => {
  return { type: Const.UPDATE_DIALOG, dialog };
};

export const setBuy = (buy) => {
  return { type: Const.UPDATE_BUY, buy };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      dispatch(getRates());
      dispatch(getCurrencies());
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
      const [{ data: rates }, { data: currencies }] = await axios.all([
        axios.get(Const.ratesAPI),
        axios.get(Const.currenciesAPI),
      ]);
      let allRates = [
        {
          ticker: "ARS_ARS",
          sell_rate: "1",
          buy_rate: "1",
          variation: "-3.1",
        },
        ...rates,
      ]
      dispatch(setRates(allRates));
      dispatch(setCurrencies(currencies));
      dispatch(setSuccess(true));
    } catch (e) {
      console.log(e);
      dispatch(setSuccess(false));
    }
    dispatch(setLoading(false));
  };
};

export const handeConver = (from, to, fromValue, calculated, fromRate, transaction) => {
  return async (dispatch, getState) => {
    const { buy } = getState().remote;
    const { user_currencies, local_currency, commission } = getState().metadata;
    if (!!transaction ? 
        parseInt(fromValue) : 
          fromValue  <= [user_currencies[from]]) {
          dispatch(
            setUserSingleCurrency({
              [from]: user_currencies[from] - fromValue,
              [to]: user_currencies[to]
                ? user_currencies[to] + calculated
                : calculated,
            })
          );
      dispatch(
        addMovement({
          date: new Date().toLocaleDateString(),
          operation: !!transaction ? `Compra de ${buy.ticker}` : 'Conversión',
          method: "Ripio wallet",
          state: "Completado",
          charge: `${local_currency.ticker} ${local_currency.symbol}
            ${fixLocaleString(fromRate.buy_rate * fromValue * commission, "es-AR", 5)}`,
          localeAmount: `${local_currency.ticker} ${local_currency.symbol} 
            ${fixLocaleString(fromValue * fromRate.buy_rate, "es-AR", 5)}`,
          ticker: `${fixLocaleString(!!transaction ? calculated : fromValue, "es-AR", 5)} ${!!transaction ? buy.ticker : from}`,
        })
      );
    } else {
      toast.error(`No tienes suficiente ${from} para realizar la operación`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        theme: "colored",
        progress: undefined,
      });
    }
  };
};
