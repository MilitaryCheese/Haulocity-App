import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Route, withRouter } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";

import { Link } from "react-router-dom";

const styles = (theme) => ({
  shoppingCartImg: {
    height: "10vh",
  },
  shoppingCartItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #eee",
    marginBottom: "8px",
    paddingBottom: "8px",
  },
  itemInfo: {
    width: "70%",
  },
});

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.shoppingCartItem}>
        <img src={require("./../images/products/bike-img-8.png")} className={classes.shoppingCartImg} />
        <div className={classes.itemInfo}>
          <Typography variant="h6" className={classes.itemName}>
            E-Motion
          </Typography>
          <Typography variant="body2" className={classes.itemName}>
            Wheels: Default | Spoke: General
          </Typography>
        </div>
        <IconButton color="primary" aria-label="Cancel Item">
          <CancelIcon />
        </IconButton>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Product));
