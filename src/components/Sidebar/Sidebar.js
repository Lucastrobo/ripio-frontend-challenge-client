import React from "react";

import { Container, List, Item } from './Sidebar.styles';

const Sidebar = () => {
  return (
    <Container>
      <List>
        <Item active>Panel</Item>
        <Item>Billetera</Item>
        <Item>Cotizaciones</Item>
        <Item>Créditos</Item>
        <Item>Exchange</Item>
        <Item>Launchpad</Item>
      </List>
    </Container>
  );
};

export default Sidebar;
