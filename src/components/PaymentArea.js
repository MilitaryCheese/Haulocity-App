import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Checkbox } from "@material-ui/core/Checkbox";
import ShoppingCartItem from "./ShoppingCartItem";
import TextField from "@material-ui/core/TextField";
import CheckoutForm from "./../components/CheckoutForm";

import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements, ElementsConsumer } from "@stripe/react-stripe-js";

const styles = (theme) => ({
  headerTypography: {
    marginBottom: "16px",
  },
  prodArea: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    fontSize: "0.7rem",
  },
});

class PaymentArea extends Component {
  render() {
    const { classes } = this.props;
    const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

    return (
      <div className={classes.prodArea}>
        <Typography variant="h6" className={classes.headerTypography}>
          Payment
        </Typography>
        <Elements stripe={stripePromise}>
          <ElementsConsumer>{({ stripe, elements }) => <CheckoutForm stripe={stripe} elements={elements} />}</ElementsConsumer>
        </Elements>
      </div>
    );
  }
}

export default withStyles(styles)(PaymentArea);

// <Typography variant="h6" className={classes.headerTypography}>
//           Card Details
//         </Typography>
//         <form className={classes.root} noValidate autoComplete="off">
//           <TextField id="standard-basic" label="Name on card" fullWidth />
//           <TextField id="standard-basic" label="Card number" type="number" fullWidth />
//         </form>
