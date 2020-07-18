import React from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { CardElement, Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import PaymentIcon from "@material-ui/icons/Payment";

const styles = (theme) => ({
  payButton: {
    color: "#fff",
  },
  cardElement: {
    marginBottom: "16px",
  },
  checkoutForm: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const { stripe, elements } = this.props;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  render() {
    const { stripe, classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={classes.checkoutForm}>
        <CardElement className={classes.cardElement} />
        <Button variant="contained" type="submit" className={classes.payButton} color="secondary" startIcon={<PaymentIcon />}>
          Pay
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(CheckoutForm);
