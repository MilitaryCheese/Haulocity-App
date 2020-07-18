import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundImage: "url(https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1608&q=80)",
    top: "0",
    position: "fixed",
    zIndex: "-1",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  centerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
    color: "#fff",
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div className="home-page">
      <Header />
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.centerContainer}>
          <Typography variant="h3">Haulocity</Typography>
          <Typography variant="h6">Find Your Ride Here</Typography>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
