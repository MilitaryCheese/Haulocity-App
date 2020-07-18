import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const styles = (theme) => ({
  footer: {
    background: "#f6f6f7",
    bottom: "0",
    position: "fixed",
    width: "100vw",
    display: "flex",
    justifyContent: "flex-end",
    padding: "8px 48px",
    boxShadow: "unset",
    borderRadius: "unset",
  },
  footerIcon: {
    marginLeft: theme.spacing(5),
    fontSize: "1.2rem",
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.footer}>
        <FacebookIcon className={classes.footerIcon} />
        <InstagramIcon className={classes.footerIcon} />
        <TwitterIcon className={classes.footerIcon} />
      </Paper>
    );
  }
}

export default withStyles(styles)(Footer);

// bottom: 0;
//     position: fixed;
//     width: 100vw;
