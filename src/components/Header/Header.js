import React, { Component, Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Route, withRouter } from "react-router-dom";

import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#f6f6f7",
    color: "#000",
    boxShadow: "unset",
  },
  root: {
    flexGrow: 1,
  },
  toolBar: { padding: "0 48px" },
  headerIcon: {
    marginRight: theme.spacing(2),
  },
  menuItem: {
    color: "#000",
    marginRight: theme.spacing(5),
    textDecoration: "unset",
  },
  title: {
    flexGrow: 1,
    fontSize: "1rem",
  },
  LoginButton: {
    "&:hover": {
      backgroundColor: "unset",
    },
  },
}));

function Header(props) {
  const classes = useStyles();
  const logged = true;
  let history = useHistory();

  const handleCheckout = (e) => {
    history.push("/checkout");
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <DirectionsBikeIcon className={classes.headerIcon} />
        <Typography variant="subtitle2" className={classes.title}>
          Haulocity
        </Typography>
        <Typography variant="subtitle2">
          <Link to="/bikes/mountain-bikes" className={classes.menuItem}>
            Mountain Bikes
          </Link>
        </Typography>
        <Typography variant="subtitle2">
          <Link to="/bikes/road-bikes" className={classes.menuItem}>
            Road Bikes
          </Link>
        </Typography>
        {logged ? (
          <IconButton color="primary" aria-label="Shopping cart" onClick={handleCheckout}>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        ) : (
          <Button color="inherit" className={classes.LoginButton}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
