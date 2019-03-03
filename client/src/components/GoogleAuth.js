import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    const id =
      "728429381598-houmt0brio65so6kb1ofo2h3944l4tlm.apps.googleusercontent.com";
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: id,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return (
        <Button color="google plus" loading>
          Loading
        </Button>
      );
    } else if (this.props.isSignedIn) {
      return (
        <Button onClick={this.onSignOut} color="google plus">
          <Icon name="google" />
          sign out
        </Button>
      );
    } else {
      return (
        <Button onClick={this.onSignIn} color="google plus">
          <Icon name="google" />
          sign in with google
        </Button>
      );
    }
  }
  render() {
    return <div style={{ margin: "5px" }}>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
