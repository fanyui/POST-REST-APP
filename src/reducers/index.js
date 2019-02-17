import { combineReducers } from 'redux'

import authedUser from './authedUser'
import users from './user'
import posts from './post'

import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
	authedUser,
	users, 
	posts,
	loadingBar: loadingBarReducer,
})