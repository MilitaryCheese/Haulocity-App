import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import ProductInfoArea from "./ProductInfoArea";
import ConfigSelector from "./ConfigSelector";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  headerTypography: {
    marginTop: "34px",
    fontSize: "2rem",
    color: "#fff",
  },
  prodArea: {
    display: "flex",
  },
});

class ProductArea extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="product-area">
        <Typography variant="h5" className={classes.headerTypography}>
          E-Motion
        </Typography>
        <div className={classes.prodArea}>
          <ProductInfoArea />
          <ConfigSelector />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProductArea);
