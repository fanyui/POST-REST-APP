import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import  { connect } from 'react-redux'

import Dashboard from './components/Dashboard'
import NewPost from './components/NewPost'
import Nav from './components/Nav'
import PostPage from './components/PostPage'

import LoadingBar from 'react-redux-loading'
import { handleInitialData } from './actions/shared'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
      <Fragment > 
        <LoadingBar />
        <div className='container'>
        <Nav />
          {this.props.loading === true ?
              null
            : <div>
              <Route path ='/' exact component={ Dashboard} />
              <Route path = '/new' component = { NewPost }/>
              <Route path = '/post/:id' component = { PostPage }/>
            </div>
          }
        </div>
        </Fragment>
      </Router>
    );
  }

}
    function mapStateToProps({ posts}) {
      return {
        postIds: Object.keys(posts).sort((a,b) => posts[b].createAt - posts[a].createAt)
      }
    }
// function mapStateToProps ({authedUser}) {
//   return (
//     loading: authedUser === null
//   )
// }

export default connect(mapStateToProps)(App);
// export default App;
