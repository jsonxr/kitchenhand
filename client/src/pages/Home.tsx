import React from 'react';
import LoggedIn from '../components/LoggedIn';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        <LoggedIn>Logged In!</LoggedIn>
      </div>
    );
  }
}
