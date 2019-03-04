import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { List } from "semantic-ui-react";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <List.Item key={stream._id}>
          <List.Icon verticalAlign='middle' size="large" name="video camera" />
          <List.Content>
            <List.Header>{stream.title}</List.Header>
            <List.Description>{stream.description}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <List celled>{this.renderList()}</List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    streams: Object.values(state.streams)
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
