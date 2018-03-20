import React, { Component } from 'react';

import Accordion from './components/accordion';
import Alert from './components/alert';
import Avatar from './components/avatar';
import Badge from './components/badge';
import Breadcrumb from './components/breadcrumb';
import Button from './components/button';

import style from './App.scss';
import './global.css';

class App extends Component {
  render() {
    return (
      <div>
        <Accordion />
        <Alert />
        <Avatar />
        <Badge />
        <Breadcrumb />
        <Button />
      </div>
    );
  }
}

export default App;
