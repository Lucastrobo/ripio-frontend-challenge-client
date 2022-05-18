import * as Const from "../../utils/constants";

const initialState = {
  rates: [],
  currencies: [],
  loading: false,
  dialog: false,
  success: null,
  buy:[]
};

const RemoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case Const.UPDATE_RATES:
      return {
        ...state,
        rates: action.rates,
      };
    case Const.UPDATE_CURRENCIES:
      return {
        ...state,
        currencies: action.currencies,
      };
    case Const.UPDATE_DIALOG:
      return {
        ...state,
        dialog: action.dialog,
      }
    case Const.UPDATE_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case Const.UPDATE_SUCCESS:
      return {
        ...state,
        success: action.success,
      };
      case Const.UPDATE_BUY:
      return {
        ...state,
        buy: action.buy,
      }
    default:
      return state;
  }
};

export default RemoteReducer
