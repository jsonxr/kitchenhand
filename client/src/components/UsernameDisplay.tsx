import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { googleSignIn, signOut } from '../store/auth/actions';
import { User } from '../store/auth/models';

interface ComponentProps {
  isSignedIn?: boolean;
  currentUser?: User;
  googleSignIn: typeof googleSignIn;
  signOut: typeof signOut;
}

class UsernameDisplay extends React.Component<ComponentProps> {
  render() {
    const { currentUser } = this.props;
    const blah = currentUser ? currentUser.email : 'nope nope';
    return <div>email: {blah}</div>;
  }
}

const mapStateToProps = (state: AppState): ComponentProps => ({
  isSignedIn: false,
  currentUser: state.auth.currentUser,
  googleSignIn,
  signOut,
  //email: state.auth.currentUser ? state.auth.currentUser.email : 'nope'
});

export default connect(
  mapStateToProps,
  { googleSignIn, signOut }
)(UsernameDisplay);

//export default UsernameDisplay;
