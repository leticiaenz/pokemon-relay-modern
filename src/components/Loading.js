import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  color: #155592;
`;

const Loader = () => (
  <Container className="fa-5x">
    <i className="fas fa-circle-notch fa-spin" />
  </Container>
);

export default Loader;
