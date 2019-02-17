
import { getInnitalData } from '../utils/api'

import { receiveUsers } from './user'
import { receivePosts } from './post'

import { setAuthUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'


const AUTHED_ID = 'harisu'

export function handleInitialData() {
	return (dispatch)=>{
		dispatch(showLoading())
		const body = {
			name: 'harisu',
			school: 'gbhs ndu'
		}
			// dispatch( receiveUsers( body))
			// dispatch( receivePosts(body))
			// dispatch(setAuthUser(AUTHED_ID))
		return getInnitalData()
		.then((response) =>{
		// // .then(([ users, posts]) =>{

			dispatch( receiveUsers( response))
			dispatch( receivePosts(response))
			dispatch(setAuthUser(AUTHED_ID))
			dispatch(hideLoading())
		})
		.catch(err=>{
			console.log( "error occued"+ err)
			// 			dispatch( receiveUsers( body))
			// dispatch( receivePosts(body))
			// dispatch(setAuthUser(AUTHED_ID))
		})
	}
}