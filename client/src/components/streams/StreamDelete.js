import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import DeleteModal from "../../Modal";
import { Modal, Button, Icon } from "semantic-ui-react";
import history from "../../history";

class StreamDelete extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  renderActions = () => {
    const { id } = this.props.match.params;

    return (
      <Modal.Actions>
        <Button as={Link} to="/" color="red" inverted>
          <Icon name="remove" />
          Cancel
        </Button>
        <Button
          onClick={() => this.props.deleteStream(id)}
          color="green"
          inverted
        >
          <Icon name="checkmark" />
          Yes
        </Button>
      </Modal.Actions>
    );
  };

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete the stream?";
    }
    return (
      <p>{`Are you sure you want to delete the stream with title "${
        this.props.stream.title
      }"`}</p>
    );
  }

  render() {
    return (
      <DeleteModal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
