import { savePost, toogleLike } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POST = 'RECEIVE_POST'
export const ADD_POST = 'ADD_POST'
export const TOOGLE_LIKE = 'TOOGLE_LIKE'

function addPost( post ){
	return {
		type: ADD_POST,
		 post,

	}
}

function like(post){
	return {
		type: TOOGLE_LIKE,
		post,
	}
}

export function handleAddPost(title, description) {
	return (dispatch,getState) => {
		const { autheduser } = getState()

		dispatch(showLoading())
		return savePost({
			description, 
			title,
			author: autheduser,
			createAt: new Date(),
        	updateAt: new Date(),
        	comments: [],
        	likes: [],
		})
		.then((post) => dispatch(addPost(post)) )
		.then(() => dispatch(hideLoading()))
		
		
	}
}

export function handleToogleLike(post) {
	return(dispatch, getState) => {
		return toogleLike(post)
			.then((post) => dispatch(like(post)))
	}
}
export function receivePosts(posts) {
	return {
		type: RECEIVE_POST,
		posts,
	}
}