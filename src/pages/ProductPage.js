import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Breadcrumb from "../components/Breadcrumb";
import ProductArea from "../components/ProductArea";
import Container from "@material-ui/core/Container";

const crumbsList = [
  { link: "/", label: "Home" },
  { link: "/bikes/1", label: "Bikes List" },
  { link: "/product/abc", label: "Product ABC" },
];
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "12px 48px",
    height: "90vh",
  },
  backgroundShadeContainer: {
    width: "40%",
    height: "90vh",
    background: "red",
    width: "40%",
    height: "90vh",
    background: theme.palette.primaryGradient.main,
    zIndex: "-1",
    position: "absolute",
  },
  productPage: {
    position: "relative",
  },
}));

function ProductPage(props) {
  const productID = props.match.params.id;

  const classes = useStyles(theme);
  return (
    <div className={classes.productPage}>
      <Header />
      <div className={classes.backgroundShadeContainer}></div>
      <Container maxWidth="lg" className={classes.container}>
        <ProductArea productID={productID} />
      </Container>
      <Footer />
    </div>
  );
}

export default ProductPage;
