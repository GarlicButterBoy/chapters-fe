import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ChapterList from "./ChapterList";
import NewChapterModal from "./NewChapterModal";
import axios from "axios";
import { API_URL } from "../constants";

class Home extends Component {
  state = {
    chapters: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getChapters = () => {
    axios.get(API_URL).then((res) => this.setState({ chapters: res.data }));
  };

  resetState = () => {
    this.getChapters();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ChapterList
              chapters={this.state.chapters}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewChapterModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Home;
