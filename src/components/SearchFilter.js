import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

const styles = (theme) => ({
  searchInput: {
    background: "#fff",
    borderRadius: "4px",
    "&:hover": {
      background: "#f6f6f7",
    },
    "&:focused": {
      background: "#f6f6f7",
    },
  },
});

class SearchFilter extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="search-filter">
        <Input
          id="input-with-icon-adornment"
          disableUnderline
          className={classes.searchInput}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(SearchFilter);

// <TextField id="standard-search" label="Search field" type="search" />

// background: white;
//     border: 1px solid;
//     border-radius: 4px;
