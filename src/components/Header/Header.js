import React from "react";
import PropTypes from "prop-types";

import Totalizer from "../TotalCount";
import { 
    Container,
    TitleWrapp,
    Title,
    Subtitle
} from './Header.styles';

const Header = ({ title, subtitle }) => {
  return (
    <Container>
      <TitleWrapp>
        <Title>{title}</Title>
        <span>{subtitle}</span>
      </TitleWrapp>
      <Subtitle>
        <Totalizer/>
      </Subtitle>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.object,
};

export default Header;
