import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';

interface ComponentProps {
  isSignedIn?: boolean;
}

class LoggedIn extends React.Component<ComponentProps> {
  render() {
    if (!this.props.isSignedIn) {
      return null;
    }
    return <div>{this.props.children}</div>;
  }
}

const mapStateToProps = (state: AppState): ComponentProps => ({
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps)(LoggedIn);
