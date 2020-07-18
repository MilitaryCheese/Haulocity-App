import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import theme from "../theme";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Breadcrumb from "../components/Breadcrumb";
import CheckoutArea from "../components/CheckoutArea";
import PaymentArea from "../components/PaymentArea";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "12px 48px",
    height: "90vh",
  },
  checkoutPage: {
    position: "relative",
  },
  gridSenior: {
    background: "pink",
  },
  gridJunior: {
    background: "yellow",
    border: "2px solid red",
  },
}));

function CheckoutPage(props) {
  const classes = useStyles(theme);

  return (
    <div className={classes.checkoutPage}>
      <Header />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <CheckoutArea />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PaymentArea />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
