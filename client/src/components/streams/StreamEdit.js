import React, { Component } from "react";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../actions";

class StreamEdit extends Component {
  
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchStream(id);
  }

  render() {
    if(!this.props.stream) {
      return <div>Loading...</div>
    }
    return <div>{this.props.stream.title}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { editStream, fetchStream }
)(StreamEdit);
