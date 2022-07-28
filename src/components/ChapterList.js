import React, { Component } from "react";
import { Table } from "reactstrap";
import NewChapterModal from "./NewChapterModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ChapterList extends Component {
  render() {
    const chapters = this.props.chapters;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Book</th>
            <th>Words</th>
            <th>Started</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!chapters || chapters.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Oops, no chapters yet</b>
              </td>
            </tr>
          ) : (
            chapters.map((chapter) => (
              <tr key={chapter.pk}>
                <td>{chapter.book}</td>
                <td>{chapter.words}</td>
                <td>{chapter.created_date}</td>
                <td align="center">
                  <NewChapterModal
                    create={false}
                    chapter={chapter}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={chapter.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ChapterList;
