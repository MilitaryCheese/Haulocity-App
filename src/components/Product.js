import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Route, withRouter } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";

import { Link } from "react-router-dom";

import bike1 from "./../images/products/bike-img-2.jpg";

const styles = (theme) => ({
  productArea: {
    background: "#f9f7fa",
    boxShadow: "unset",
    transition: "transform .4s",
    transition: "0.4s",
    // background: "linear-gradient(to bottom, #49537b 0%,#5d5577 100%)",
    margin: "2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "4px",
    // color: "#fff",
    width: "21%",
    minWidth: "150px",
    "&:hover": {
      background: "linear-gradient(to bottom, #49537b 0%,#5d5577 100%)",
      color: "#fff",
      boxShadow: "0px 8px 9px -5px rgba(0,0,0,0.2), 0px 15px 22px 2px rgba(0,0,0,0.14), 0px 6px 28px 5px rgba(0,0,0,0.12)",
      transform: "scale(1.2)",
    },
  },
  imageArea: {
    background: "pink",
    width: "110%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "4px",
  },
  prodImage: {
    width: "100%",
    borderRadius: "4px",
  },
  infoHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "8px 16px",
  },
  priceLabel: {
    fontSize: "0.5rem",
    color: "rgba(255, 255, 255, 0.5)",
  },
  addButton: {
    color: "#fff",
  },
  prodDescription: {
    padding: "8px 16px",
    fontSize: "0.7rem",
    textAlign: "justify",
  },
  prodTitle: {
    margin: "4px 0",
  },
});

class Product extends Component {
  constructor(props) {
    super(props);
    this.linktoprod = this.linktoprod.bind(this);
  }

  linktoprod() {
    this.props.history.push("/product/abc");
  }

  render() {
    const { classes } = this.props;

    return (
      <ButtonBase onClick={this.linktoprod} className={classes.productArea}>
        <Typography variant="subtitle2" className={classes.prodTitle}>
          Bike X2S
        </Typography>
        <div className={classes.imageArea}>
          <img className={classes.prodImage} src={require("./../images/products/bike-img-3.jpg")} width="500px" />
        </div>
        <div className={classes.infoHeader}>
          <div className={classes.priceArea}>
            <Typography variant="caption" className={classes.priceLabel}>
              Price
            </Typography>
            <Typography variant="body2">$234.99</Typography>
          </div>
          <Button variant="contained" className={classes.addButton} color="secondary">
            <Link to="/product/abc" className={classes.menuItem}>
              +
            </Link>
          </Button>
        </div>
        <Typography variant="body2" className={classes.prodDescription}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
        </Typography>
      </ButtonBase>
    );
  }
}

export default withRouter(withStyles(styles)(Product));
