import { RECEIVE_POST, ADD_POST } from '../actions/post'

export default function posts(state = { }, action) {
	switch(action.type){
		case RECEIVE_POST: 
			return {
				...state,
				...action.posts,
			}


		case ADD_POST:
			const { post } = action

			return{
				...state,
				post,
			}
		default: 
			return state
	}
}