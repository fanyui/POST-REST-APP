import { COMMENT } from '../actions/comment'

export default function comment(state = { }, action) {
	switch(action.type){
		case COMMENT: 
			return state.map((post, index) => {
		        if (post.id === action.comment.id) {
		          return Object.assign({}, post, action.comment)
		        }
		        return post
		    })
		default: 
			return state
	}
}

