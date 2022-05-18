import React from "react";

import logo from "../../img/logo.svg";
import help from "../../img/help.svg";
import user from "../../img/user.svg";
import notification from "../../img/notification.svg";

import { Container, Logo, Icon } from './Navbar.styles';

const Nabvar = () => {
  return (
    <Container>
        <Logo src={logo} />
      <div>
        <Icon src={help} />
        <Icon src={notification} />
        <Icon src={user} />
      </div>
    </Container>
  );
};

export default Nabvar;
