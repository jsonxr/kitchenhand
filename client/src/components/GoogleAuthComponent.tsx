import React from 'react';

interface CustomWindow extends Window {
  gapi: any;
}
declare let window: CustomWindow;
window.gapi = window.gapi || {};

interface GoogleProfile {
  token: string;
  userId: string;
  email: string;
  imageUrl?: string;
  givenName: string;
  familyName: string;
  name: string;
}

type OnAuthChangeFunction = (token?: string) => void;

interface GoogleAuthComponentProps {
  clientId: string;
  scope: string;
  onAuthChange: OnAuthChangeFunction;
  isSignedIn?: boolean;
  picture?: string;
  email?: string;
}

class GoogleAuthComponent extends React.Component<GoogleAuthComponentProps> {
  static defaultProps = {
    scope: 'email',
  };

  onSignInClick = () => {
    const googleAuthInstance = window.gapi.auth2.getAuthInstance();
    googleAuthInstance.signIn();
  };
  onSignOutClick = () => {
    const googleAuthInstance = window.gapi.auth2.getAuthInstance();
    googleAuthInstance.signOut();
  };

  onAuthChange = () => {
    const googleAuthInstance = window.gapi.auth2.getAuthInstance();
    const isSignedIn = googleAuthInstance.isSignedIn.get();
    if (isSignedIn) {
      console.log('isSignedIn: true', googleAuthInstance);
      const currentUser = googleAuthInstance.currentUser.get();
      const token = currentUser.getAuthResponse().id_token;
      this.props.onAuthChange(token);
    } else {
      this.props.onAuthChange();
    }
  };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: this.props.clientId,
          scope: this.props.scope,
        })
        .then(() => {
          const googleAuthInstance = window.gapi.auth2.getAuthInstance();
          googleAuthInstance.isSignedIn.listen(this.onAuthChange);
          this.onAuthChange();
        });
    });
  }

  render() {
    // We don't know if they are signed in or who they are yet....
    if (this.props.isSignedIn === undefined) {
      console.log('return checking');
      return <div>Checking...</div>;
    }

    // We know they are not signed in
    if (!this.props.isSignedIn) {
      return (
        <button className="ui item" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }

    // User is signed in

    return (
      <button className="ui item" onClick={this.onSignOutClick}>
        <img className="ui avatar image" src={this.props.picture} alt={this.props.email} />
        Sign Out
      </button>
    );
  }
}

export default GoogleAuthComponent;
