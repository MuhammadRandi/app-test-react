import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";

export default class MenuProps extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fluid>
      <Menu.Item
          name="Muhammad Randi"
          active={activeItem === "Muhammad Randi"}
          onClick={this.handleItemClick}
        >
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/tom.jpg"
          />
          Muhammad Randi
        </Menu.Item>
        <Menu.Item
          name="Project"
          active={activeItem === "Project"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Resume"
          active={activeItem === "Resume"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
