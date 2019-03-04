import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <Label basic color="red" pointing>
          {error}
        </Label>
      );
    }
  };
  renderInput = ({ label, input, meta }) => {
    return (
      <Form.Field>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </Form.Field>
    );
  };

  onSubmit = formValues => {
    const { createStream, reset } = this.props;
    createStream(formValues)
    .then(() => {
      reset("streamCreate");
    })
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form widths={"equal"} onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="title" label="Enter Title" component={this.renderInput} />
        <Field
          name="description"
          label="Enter Description"
          component={this.renderInput}
        />
        <Button primary>Submit</Button>
      </Form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrapped);
