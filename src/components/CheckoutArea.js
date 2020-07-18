import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Checkbox } from "@material-ui/core/Checkbox";
import ShoppingCartItem from "./ShoppingCartItem";

const styles = (theme) => ({
  headerTypography: {
    fontWeight: 600,
    marginBottom: "16px",
  },
  prodArea: {
    display: "flex",
  },
  button: {
    fontSize: "0.7rem",
  },
});

class CheckoutArea extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="product-area">
        <Typography variant="h5" className={classes.headerTypography}>
          Shopping Cart
        </Typography>
        <div className={classes.chartItemList}>
          <ShoppingCartItem />
          <ShoppingCartItem />
          <ShoppingCartItem />
        </div>
        <Button variant="outlined" color="primary" className={classes.button} startIcon={<KeyboardBackspaceIcon />}>
          Continue Shopping
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(CheckoutArea);
