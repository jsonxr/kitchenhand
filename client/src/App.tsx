import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

import Routes from './Routes';
import history from './history';

import validate from 'validate.js';
import validators from './common/validators';

validate.validators = {
  ...validate.validators,
  ...validators,
};

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routes />
          {/* <Header />
          <Route path="/" exact component={Home} />
          <Route path="/calendar" exact component={Calendar} /> */}
          {/* <Route path="/" exact component={StreamList} />
        <Route path="/streams" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/:id/edit" exact component={StreamEdit} />
        <Route path="/streams/:id/delete" exact component={StreamDelete} />
        <Route path="/streams/:id/show" exact component={StreamShow} /> */}
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
