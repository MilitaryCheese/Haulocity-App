import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Product from "./Product";

const styles = (theme) => ({
  catalog: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

class Catalog extends Component {
  render() {
    const productList = this.props.products;
    const { classes } = this.props;

    return (
      <div className={classes.catalog}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default withStyles(styles)(Catalog);
