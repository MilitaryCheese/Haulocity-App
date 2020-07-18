import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

class Breadcrumb extends Component {
  render() {
    const crumbs = this.props.crumbs;
    return (
      <div className="breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          {crumbs.map(({ link, label }, key) => (
            <Link color="inherit" to={link} key={key} onClick={handleClick}>
              {label}
            </Link>
          ))}
        </Breadcrumbs>
      </div>
    );
  }
}

function handleClick(event) {
  event.preventDefault();
  alert("You clicked a breadcrumb.");
}

export default Breadcrumb;
