import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuthComponent from './GoogleAuthComponent';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { googleSignIn, signOut } from '../store/auth/actions';

interface ComponentProps {
  isSignedIn?: boolean;
  email?: string;
  picture?: string;
  googleSignIn: typeof googleSignIn;
  signOut: typeof signOut;
}

class Header extends React.Component<ComponentProps> {
  onAuthChange = (token?: string) => {
    if (token) {
      this.props.googleSignIn(token);
    } else {
      this.props.signOut();
    }
  };

  render() {
    return (
      <h1 className="ui secondary pointing menu">
        <Link to="/" className="item">
          Kitchen Hand
        </Link>
        <Link to="/calendar" className="item">
          Calendar
        </Link>
        <div className="right menu">
          <GoogleAuthComponent
            clientId="920655140387-e4cjiec83i5hpcv8hkc8l589hrih7hb1.apps.googleusercontent.com"
            isSignedIn={this.props.isSignedIn}
            picture={this.props.picture}
            onAuthChange={this.onAuthChange}
          />
        </div>
      </h1>
    );
  }
}

const mapStateToProps = (state: AppState): ComponentProps => ({
  isSignedIn: state.auth.isSignedIn,
  email: state.auth.currentUser ? state.auth.currentUser.email : undefined,
  picture: state.auth.currentUser ? state.auth.currentUser.picture : undefined,
  googleSignIn,
  signOut,
});

export default connect(
  mapStateToProps,
  { googleSignIn, signOut }
)(Header);
