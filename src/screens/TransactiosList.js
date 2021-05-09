import React from "react";
import { Card, CardBody, Container } from "reactstrap";
import Loading from "../components/Loading";
import useTransactions from "../hooks/useTransactions";

const TransactiosList = () => {
  const { error, isPending, transactions } = useTransactions(
    "https://rocky-sea-55948.herokuapp.com/api/v1/transactions"
  );
  return (
    <Container>
      <h1 className="text-center text-white bg-dark">List of Transactions</h1>
      {isPending && <Loading />}
      {error && <h2>error</h2>}
      {transactions &&
        transactions.map((t) => (
          <Card className="m-2" key={t._id}>
            <CardBody
              style={{
                borderLeft:
                  t.amount > 0 ? "10px solid green" : "10px solid red",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
              }}
            >
              <span>{t.text}</span>
              <span>{t.createdAT}</span>
              <span>GH₵{t.amount}.00</span>
            </CardBody>
          </Card>
        ))}
    </Container>
  );
};

export default TransactiosList;
