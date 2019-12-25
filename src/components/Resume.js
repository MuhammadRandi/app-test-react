import React, { Component } from "react";
import { Container, Grid, GridColumn, List } from "semantic-ui-react";

export default class Resume extends Component {
  render() {
    return (
      <Container>
        <Grid divided="vertically" centered>
          <Grid.Row>
            <Container text textAlign="center">
              <h1 style={{ fontFamily: "helvetica" }}>
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
                  <a href="http://linkedin.com/in/fluxandi">Muhammad Randi</a>
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
          <Grid.Column floated="right" textAlign="right" width={3}>
            <p style={{ fontSize: "14px" }}>
              Bandung,Jawa Barat <br /> +6281930100800
            </p>
          </Grid.Column>
          <Grid.Row>
            <Grid.Column width={2}>
              <h3>Interest</h3>
            </Grid.Column>

            <GridColumn width={14}>
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
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "right"
                }}
              >
                2015-2019
              </p>
            </Grid.Column>
            <Grid.Column width={2}>
              <h3>Experience</h3>
            </Grid.Column>
            <Grid.Column width={12}>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                PT. Industri Telekomunikasi Indonesia, Bandung
              </p>
              Product and Business Development Division
            </Grid.Column>
            <Grid.Column width={2}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "right"
                }}
              >
                Sept - Nov 2018
              </p>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                BKN Jawa Barat
              </p>
              Admin Verificator
            </Grid.Column>
            <Grid.Column width={2}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "right"
                }}
              >
                July - Aug 2018
              </p>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                PT. Telkom WITEL Jambi, Jambi
              </p>
              Digital Marketing Intern
            </Grid.Column>
            <Grid.Column width={2}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "right"
                }}
              >
                May - June 2016
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column width={2}>
              <h3>Activities</h3>
            </Grid.Column>
            <Grid.Column width={12}>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Digital Talent Scholarship Program, Polytechnic Bandung
              </p>
              Junior Network Administrator Training Program
                <li>Learning on maintaining computer network health,service
                    and activities. 
                   </li>
                   <li>
                     Troubleshooting, Routing & Switching, designing autonomus
                     system using Cisco&Mikrotik Router and Switch 
                   </li>
            </Grid.Column>
            <Grid.Column width={2}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "right"
                }}
              >
                2014
              </p>
            </Grid.Column>

            <Grid.Column width={2}>
              <h3>Awards</h3>
            </Grid.Column>
            <Grid.Column width={12}>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Regional Student Skill Competition, Jambi 2014
              </p>
              1st place on Network System Administrator
            </Grid.Column>
            <Grid.Column width={2}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "right"
                }}
              >
                2014
              </p>
            </Grid.Column>
            <Grid.Column width={2}>
              
            </Grid.Column>
            <Grid.Column width={12}>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                National Student Skill Competition, 2014
              </p>
              As a participant 
            </Grid.Column>
            <Grid.Column width={2}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "right"
                }}
              >
                2014
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
