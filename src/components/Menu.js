import React, { Component } from "react";
import MenuItem from "./MenuItem";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <MenuItem />
        <MenuItem />
      </div>
    );
  }
}

export default Menu;
