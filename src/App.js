import React, { Component } from 'react';
import Header from './components/header'
import Headline from './components/headline'

import './app.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <section className="main">
          <Headline header="Posts" desc="click the button to render posts" />
        </section>
      </div>
    );
  }
}

export default App;
