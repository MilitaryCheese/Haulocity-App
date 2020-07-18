import React, { Component } from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Breadcrumb from "../components/Breadcrumb";
import CatalogArea from "../components/CatalogArea";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

//should be a prop
const crumbsList = [
  { link: "/", label: "Home" },
  { link: "/bikes/1", label: "Bikes List" },
  { link: "/product/abc", label: "Product ABC" },
];
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "12px 48px",
    background: "#fff",
  },
}));

function CatalogPage(props) {
  const productType = props.match.params.type;
  const classes = useStyles();

  return (
    <div className="CatalogPage">
      <Header />
      <Container maxWidth="lg" className={classes.container}>
        <CatalogArea productType={productType} />
      </Container>
      <Footer />
    </div>
  );
}

export default CatalogPage;

// <Breadcrumb crumbs={crumbsList} />
