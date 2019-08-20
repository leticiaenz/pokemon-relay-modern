import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  margin: 5px;
`;

const Container = styled.header`
  display: flex;
  flex-direction: inline;
  background: #052f5f;
  width: 100%;
  padding: 8px;
`;

const Nav = () => (
  <Container>
    <img src={logo} alt="logo" />
    <Title>Pokemon</Title>
  </Container>
);

export default Nav;
