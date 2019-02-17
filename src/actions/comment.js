import { saveComment } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const COMMENT = 'COMMENT'

export function addComment(comment) {
	return {
		type: COMMENT,
		comment,
	}
}

export function handleAddComment(postId, comment) {
	return (dispatch,getState) => {
		const { autheduser } = getState()

		dispatch(showLoading())
		return saveComment( postId, {
			comment, 
			author: autheduser,
			createAt: new Date(),
        	updateAt: new Date(),
		})
		.then((post) => dispatch(addComment(post)) )
		.then(() => dispatch(hideLoading()))
		
		
	}
}
