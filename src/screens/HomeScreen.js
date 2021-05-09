import React from "react";
import { Container } from "reactstrap";
import Charts from "../components/Charts";
import TransactiosList from "./TransactiosList";

const HomeScreen = () => {
  return (
    <Container>
      <Charts />
      <TransactiosList />
    </Container>
  );
};

export default HomeScreen;
