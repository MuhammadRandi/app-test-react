import React, { Component } from "react";
import { Menu, Image, Responsive, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuProps extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Container textAlign="center">
          <Menu.Item
            as={Link}
            to="/main"
            name="Muhammad Randi"
            active={activeItem === "Muhammad Randi"}
            onClick={this.handleItemClick}
          >
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/tom.jpg"
            />
            <Responsive minWidth={550}>Muhammad Randi</Responsive>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/project"
            name="Project"
            active={activeItem === "Project"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/resume"
            name="Resume"
            active={activeItem === "Resume"}
            onClick={this.handleItemClick}
          />
        </Container>
      </Menu>
    );
  }
}
