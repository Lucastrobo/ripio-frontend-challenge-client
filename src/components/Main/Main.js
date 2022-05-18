import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../../redux/actions";

import Header from "../Header";
import ConverterForm from "../ConverterForm";
import Balance from "../Balance";
import History from "../History";
import BuyForm from "../BuyForm";
import { Container, Loader } from './Main.styles';

const Main = () => {
  const { success, dialog } = useSelector((state) => state.remote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.fetchData());
  }, [dispatch]);
  
  if (!!success) {
    return (
      <Container>
        <Header
          title={"Mi billetera"}
          subtitle={
            "En tu billetera vas a poder almacenar todas tus criptomonedas que compres en Ripio"
          }
        >
        </Header>
        <ConverterForm/>
        <Balance/>
        <History/>
        {!!dialog && (
          <BuyForm/>
        )}
      </Container>
    );
  } else  {
    return <Loader />;
  }
};

export default Main;
