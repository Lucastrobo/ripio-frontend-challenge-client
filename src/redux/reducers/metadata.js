import * as Const from "../../utils/constants";

const initialState = {
  local_currency: { ticker: "ARS", symbol: "$", name: "pesos" },
  user_currencies: {
    BTC: 0.328,
    DAI: 52,
    BAT: 200,
    ADA: 238.984,
    USDC: 800,
    ARS: 500000,
  },
  history: [],
  commission: 0.01,
};

const MetaDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Const.UPDATE_USER_CURRENCIES:
      return {
        ...state,
        user_currencies: action.currencies,
      };
    case Const.UPDATE_USER_SINGLE_CURRENCY:
      return {
        ...state,
        user_currencies: { ...state.user_currencies, ...action.currency },
      };
    case Const.ADD_MOVEMENT:
      return {
        ...state,
        history: [...state.history, action.movement],
      };
      default:
      return state;
  }
};

export default MetaDataReducer;
