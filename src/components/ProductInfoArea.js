import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import theme from "../theme";

const styles = (theme) => ({
  productInfoArea: {
    width: "50%",
    marginRight: "1%",
    paddingRight: "10%",
    // background: "pink",
    color: "#fff",
  },
  prodBottomArea: {
    display: "flex",
    justifyContent: "space-around",
  },
  addToCartBtn: {
    color: "#fff",
  },
  prodImage: {
    borderRadius: "4px",
    width: "90%",
    margin: "5%",
  },
  imageArea: {
    display: "flex",
    alignItems: "center",
    width: "120%",
    borderRadius: "4px",
    background: "#fff",
    margin: "34px 0",
  },
  priceLabel: {
    fontSize: "0.7rem",
    color: "rgba(255, 255, 255, 0.5)",
  },
  priceValue: {
    fontSize: "1rem",
  },
});

class ProductInfoArea extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.productInfoArea}>
        <div className={classes.imageArea}>
          <img className={classes.prodImage} src={require("./../images/products/bike-img-7.jpg")} />
        </div>
        <div className={classes.prodBottomArea}>
          <div className={classes.priceArea}>
            <Typography variant="caption" className={classes.priceLabel}>
              Price
            </Typography>
            <Typography variant="body2" className={classes.priceValue}>
              $234.99
            </Typography>
          </div>
          <Button variant="contained" className={classes.addToCartBtn} color="secondary">
            + Add to Cart
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles(theme))(ProductInfoArea);
