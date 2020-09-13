import React, { Component } from 'react';
import Header from './components/header'
import Headline from './components/headline'

import SharedButton from './components/button'
import ListItem from './components/listItem'

import { connect } from 'react-redux'
import { fetchPosts } from './actions'

import './app.scss'

const initialState = {
  hideBtn: false
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this)
  }

  // used this method for testing methods seperately
  exampleMethod_updatesState() {
    const {hideBtn} = this.state
    this.setState({
      hideBtn: !hideBtn
    })
  }
  fetch () {
    this.props.fetchPosts();
    this.exampleMethod_updatesState()
  }

  render() {

    const { posts } = this.props;
    const {hideBtn} = this.state

    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header></Header>
        <section className="main">
          <Headline header="Posts" desc="click the button to render posts" />
          
          
          {!hideBtn && (
            <SharedButton {...configButton}/>
          )}
          {posts.length > 0 && 
            <div>
              {posts.map((post, map) => {
                const {title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                }
                return (
                  <ListItem key={map} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect( mapStateToProps, {fetchPosts} )(App);
