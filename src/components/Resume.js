import React, { Component } from "react";
import { Container, Grid, GridColumn, Icon, List } from "semantic-ui-react";

export default class Resume extends Component {
  render() {
    return (
      <Container>
        <Grid divided="vertically">
          <Grid.Row>
            <Container text textAlign="center">
              <h1 style={{ paddingTop: "5px", fontFamily: "helvetica" }}>
                Muhammad Randi
              </h1>
            </Container>
          </Grid.Row>
          <Grid.Column width={3}>
            <List>
              <List.Item icon="home" content="Tanggerang, Banten" />
              <List.Item
                icon="linkedin"
                content={
                  <a href="http://linkedin.com/in/fluxandi">
                    Muhammad Randi
                  </a>
                }
              />
              <List.Item
                icon="mail"
                content={
                  <a href="mailto:muhammad.randi@outlook.com">
                    Muhammad.randi@outlook.com
                  </a>
                }
              />
              <List.Item
                icon="linkify"
                content={
                  <a href="https://github.com/MuhammadRandi">
                    Github/MuhammadRandi
                  </a>
                }
              />
            </List>
          </Grid.Column>
          <Grid.Column floated="right" textAlign="right" fluid width={3}>
            <p style={{ fontSize: "14px" }}>
              Bandung,Jawa Barat <br /> +6281930100800
            </p>
          </Grid.Column>
          <Grid.Row>
            <Grid.Column width={2}>
              <h3>Interest</h3>
            </Grid.Column>
            
            <GridColumn width={12}>
              <p style={{ fontSize: "16px" }}>
                internet of things (Arduino), Computer Networking , Website
                Development (PWA,Responsive), Frontend Engineering
              </p>
            </GridColumn>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              <h3>Skills</h3>
            </Grid.Column>
            <GridColumn width={14}>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                Language/Framework and Tools :
              </p>
              C, PHP, JavaScipt, ReactJS, Semantic UI, Git/Github
            </GridColumn>
            <Grid.Column width={2}>
              <h3>Education</h3>
            </Grid.Column>
            <Grid.Column width={12}>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                Telkom University, Bandung
              </p>
              Informatics Engineering Diploma
            </Grid.Column>
            <Grid.Column width={2}>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>2015-2019</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
