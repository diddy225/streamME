import React, { Component } from "react";
import _ from 'lodash'
import { connect } from "react-redux";
import StreamForm from './StreamForm'
import { editStream, fetchStream } from "../../actions";

class StreamEdit extends Component {
  
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchStream(id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues)
  }

  render() {
    console.log(this.props)
    if(!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm 
          initialValues={_.pick(this.props.stream, 'title', 'description')} 
          onSubmit={this.onSubmit} 
        />
      </div>
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
  { editStream, fetchStream }
)(StreamEdit);
