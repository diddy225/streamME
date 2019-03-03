import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import GoogleAuth from './GoogleAuth'

class Header extends Component {
  state = { activeItem: "STREAMIE" };

  handleClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu pointing secondary>
        <Menu.Item
          name="STREAMIE"
          as={Link}
          to={"/"}
          active={activeItem === "STREAMIE"}
          onClick={this.handleClick}
          position={"left"}
        />

        <Menu.Item
          name="All Streams"
          icon={'computer'}
          as={Link}
          to={"/"}
          active={activeItem === "All Streams"}
          onClick={this.handleClick}
          position={"right"}
        />
        <GoogleAuth />
      </Menu>
    );
  }
}

export default Header;
