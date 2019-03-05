import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { List, Button } from "semantic-ui-react";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId && stream.userId !== null) {
      return (
        <List.Content floated="right">
          <Button as={Link} to={`/streams/delete/${stream._id}`} negative>
            Delete
          </Button>
          <Button as={Link} to={`/streams/edit/${stream._id}`} primary>
            Edit
          </Button>
        </List.Content>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <List.Item style={{ padding: "10px" }} key={stream._id}>
          {this.renderAdmin(stream)}
          <List.Icon verticalAlign="middle" size="large" name="video camera" />
          <List.Content>
            <List.Header>{stream.title}</List.Header>
            <List.Description>{stream.description}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
  }

  renderCreateButtons() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Button primary floated="right" as={Link} to="/streams/new">
            Create Stream
          </Button>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <List celled>{this.renderList()}</List>
        {this.renderCreateButtons()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
