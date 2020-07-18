import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from "../theme";

import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ButtonBase from "@material-ui/core/ButtonBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = (theme) => ({
  button: {
    fontSize: "0.7rem",
    marginTop: "-34px",
  },
  configSelector: {
    marginLeft: "5%",
  },
  itemIcon: {
    width: "4rem",
  },
  configSelectItemFocus: {
    background: theme.palette.secondary.main,
  },
  configSelectItem: {
    border: "1px solid #eee",
    borderRadius: "4px",
    marginRight: "4px",

    "&:hover": {
      background: theme.palette.primaryGradient.main,
    },
    "&:focus": {
      background: theme.palette.primaryGradient.main,
    },
    "& .MuiTouchRipple-root span": {
      // backgroundColor: "red!important",
      opacity: 0.3,
    },
  },

  configSelectorArea: {
    display: "flex",
    alignItems: "flex-start",
  },

  configSubtitle: {
    marginTop: "16px",
  },

  configSelectOption: {
    borderRadius: "4px 4px 0px 0px",
    marginRight: "4px",
    display: "flex",
    flexDirection: "column",

    "&:hover": {
      background: "#ede8e8",
      borderBottom: "1px solid #fd746f",
    },
    "&:focus": {
      background: "#ede8e8",
      borderBottom: "1px solid #fd746f",
    },
    "& .MuiTouchRipple-root span": {
      opacity: 0.3,
    },
  },
  selectButtonLabel: {
    fontSize: "0.7rem",
    margin: "4px 0",
  },
  selectionList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

class ConfigSelector extends Component {
  constructor(props) {
    super(props);
    this.onSelectorClick = this.onSelectorClick.bind(this);
  }

  onSelectorClick(e) {
    e.preventDefault();
    console.log(e.target.classList);
    e.target.classList.toggle("configSelectItemFocus");
  }
  render() {
    const { classes } = this.props;
    var checked = false;

    return (
      <div className={classes.configSelector}>
        <Button variant="outlined" color="primary" className={classes.button} startIcon={<KeyboardBackspaceIcon />}>
          Back
        </Button>
        <Typography variant="h6" gutterBottom>
          Configure the Bike
        </Typography>

        <div className={classes.configSelectorArea}>
          <ButtonBase onClick={this.onSelectorClick} className={classes.configSelectItem} TouchRippleProps={{ classes: classes.rippleButtonBase }}>
            <img className={classes.itemIcon} src={require("./../images/parts/wheels/wheel-1.svg")} />
          </ButtonBase>
          <ButtonBase onClick={this.onSelectorClick} className={classes.configSelectItem} TouchRippleProps={{ classes: classes.rippleButtonBase }}>
            <img className={classes.itemIcon} src={require("./../images/parts/spoke/spoke-2.svg")} />
          </ButtonBase>
          <ButtonBase onClick={this.onSelectorClick} className={classes.configSelectItem} TouchRippleProps={{ classes: classes.rippleButtonBase }}>
            <img className={classes.itemIcon} src={require("./../images/parts/handles/handle-3.svg")} />
          </ButtonBase>
          <ButtonBase onClick={this.onSelectorClick} className={classes.configSelectItem} TouchRippleProps={{ classes: classes.rippleButtonBase }}>
            <img className={classes.itemIcon} src={require("./../images/parts/seats/seat-1.svg")} />
          </ButtonBase>
        </div>

        <Typography className={classes.configSubtitle} variant="subtitle2">
          Wheel
        </Typography>
        <div className={classes.configSelectorArea}>
          <ButtonBase onClick={this.onSelectorClick} className={classes.configSelectOption} TouchRippleProps={{ classes: classes.rippleButtonBase }}>
            <img className={classes.itemIcon} src={require("./../images/parts/wheels/wheel-1.svg")} />
            <Typography className={classes.selectButtonLabel} variant="outline">
              Default
            </Typography>
          </ButtonBase>
          <ButtonBase onClick={this.onSelectorClick} className={classes.configSelectOption} TouchRippleProps={{ classes: classes.rippleButtonBase }}>
            <img className={classes.itemIcon} src={require("./../images/parts/wheels/wheel-2.svg")} />
            <Typography className={classes.selectButtonLabel} variant="outline">
              Smooth
            </Typography>
          </ButtonBase>
          <ButtonBase onClick={this.onSelectorClick} className={classes.configSelectOption} TouchRippleProps={{ classes: classes.rippleButtonBase }}>
            <img className={classes.itemIcon} src={require("./../images/parts/wheels/wheel-3.svg")} />
            <Typography className={classes.selectButtonLabel} variant="outline">
              Jumper
            </Typography>
          </ButtonBase>
          <ButtonBase onClick={this.onSelectorClick} className={classes.configSelectOption} TouchRippleProps={{ classes: classes.rippleButtonBase }}>
            <img className={classes.itemIcon} src={require("./../images/parts/wheels/wheel-4.svg")} />
            <Typography className={classes.selectButtonLabel} variant="outline">
              Expert
            </Typography>
          </ButtonBase>
        </div>

        <Typography className={classes.configSubtitle} variant="subtitle2">
          Selected Configurations
        </Typography>
        <List dense={true}>
          <ListItem className={classes.selectionList}>
            <ListItemText primary="Wheel: Default" />
            <ListItemText primary="Spoke: 4x Type" />
            <ListItemText primary="Handles: General" />
            <ListItemText primary="Seat: Wide 2cm" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(ConfigSelector);
