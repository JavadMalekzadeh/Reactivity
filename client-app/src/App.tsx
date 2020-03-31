import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import "./App.css";
import { cars } from "./demo";
import { CarItem } from "./CarItem";
import axios from "axios";

class App extends Component {
  state = {
    Values: []
  };
  componentDidMount() {
    axios.get("http://localhost:5000/weatherforecast").then(response =>
      this.setState({
        Values: response.data
      })
    );
  }
  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.Values.map((val: any) => (
            <List.Item key={val.id}>{val.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
