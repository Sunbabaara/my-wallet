import React from "react";
import Chart from "react-apexcharts";
import { Card, Col, Row } from "reactstrap";
import useTransactions from "../hooks/useTransactions";
import Loading from "./Loading";

const Charts = () => {
  const { error, isPending, transactions } = useTransactions(
    "https://rocky-sea-55948.herokuapp.com/api/v1/transactions"
  );

  if (isPending) return <Loading />;
  if (error) return <h1>OOPS!!! something went wrong</h1>;

  const dataamount = transactions.map((t) => t.amount);
  const datatext = transactions.map((t) => t.text);
  //income results
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => (acc += t.amount), 0);
  // .toFixed(2);
  //expense results
  const expenses =
    transactions
      .filter((t) => t.amount < 0)
      .reduce((acc, t) => (acc += t.amount), 0) * -1;
  //   .toFixed(2);

  const Balance = income - expenses;
  // .toFixed(2);

  return (
    <>
      <Row className="mb-5">
        <Col>
          <Card className="bg-success  text-center text-white">
            <h1>Income</h1>
            <h1>GH₵{income.toFixed(2)}</h1>
          </Card>
        </Col>
        <Col>
          <Card className="bg-danger text-center text-white">
            <h1>Expenses</h1>
            <h1>GH₵{expenses.toFixed(2)}</h1>
          </Card>
        </Col>
        <Col>
          <Card className="bg-info text-center text-white">
            <h1>Balance</h1>
            <h1>GH₵{Balance.toFixed(2)}</h1>
          </Card>
        </Col>
      </Row>
      <Card className="bg-white mb-4">
        <Row>
          <Col lg={8}>
            <Chart
              options={{
                fill: {
                  type: "gradient",
                  gradient: {
                    shade: "dark",
                    gradientToColors: ["#FDD835"],
                    shadeIntensity: 1,
                    type: "horizontal",
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100],
                  },
                },
                chart: {
                  id: "basic-bar",
                },
                xaxis: {
                  categories: [...datatext],
                },
              }}
              series={[
                {
                  name: datatext,
                  data: [...dataamount],
                },
              ]}
              type="bar"
              height="250"
            />
          </Col>
          <Col lg={4}>
            <Chart
              options={{ labels: ["Balance", "Expenses", "Income"] }}
              series={[Balance, expenses, income]}
              type="donut"
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Charts;
