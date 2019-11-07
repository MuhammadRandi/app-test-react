import React from "react";
import MenuProps from "./menu";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">      
      <MenuProps />
      <Container textAlign="center">
          Centered
      </Container>
    </div>
  );
}

export default App;
