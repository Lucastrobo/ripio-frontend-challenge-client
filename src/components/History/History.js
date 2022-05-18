import React from "react";
import { useSelector } from "react-redux";

import { 
    Container,
    Wrapper,
    Row,
    Cell
} from './History.styles';

const History = () => {
  const { history } = useSelector((state) => state.metadata);

  return (
    <Container>
      <h4>Mis movimientos</h4>
      <Wrapper>
        <Row header>
          <Cell>Fecha</Cell>
          <Cell>Tipo operación</Cell>
          <Cell>Método</Cell>
          <Cell>Estado</Cell>
          <Cell>Comisión</Cell>
          <Cell>Monto</Cell>
        </Row>
        {history.map((item, index) => (
          <Row key={index}>
            <Cell>{item.date}</Cell>
            <Cell>{item.operation}</Cell>
            <Cell>{item.method}</Cell>
            <Cell>{item.state}</Cell>
            <Cell>{`- ${item.charge.toLocaleString()}`}</Cell>
            <Cell>
              <b>{`+ ${item.ticker}`}</b>
              <span>{`≈ ${item.localeAmount}`}</span>
            </Cell>
          </Row>
        ))}
      </Wrapper>
    </Container>
  );
};

export default History;
