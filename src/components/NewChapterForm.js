import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewChapterForm extends React.Component {
  state = {
    pk: 0,
    book: "",
    words: 0,
    created_date: "1/1/2022",
  };

  componentDidMount() {
    if (this.props.chapter) {
      const { pk, book, words, created_date } = this.props.chapter;
      this.setState({ pk, book, words, created_date });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.book]: e.target.value });
  };

  createChapter = (e) => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editChapter = (e) => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form
        onSubmit={this.props.chapter ? this.editChapter : this.createChapter}
      >
        <FormGroup>
          <Label for="book">Book Name:</Label>
          <Input
            type="text"
            name="book"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.book)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="words">Words:</Label>
          <Input
            type="number"
            name="words"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.words)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="created_date">Created:</Label>
          <Input
            type="date"
            name="created_date"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.created_date)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewChapterForm;
