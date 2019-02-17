import React , { Component } from 'react'

import { connect } from  'react-redux'

import { handleAddComment } from './../actions/comment'

class Comment extends Component {
	state = {
		description: "",

	}

	handleChange = (e)=>{

		const description = e.target.value

		this.setState(() => ({
			description 
		}));
	}

	handleSubmit = (e) => {

		e.preventDefault()
		const { description} = this.state
		console.log("something wierd is happening")
		const {postId, dispatch } = this.props
		dispatch(handleAddComment(postId, description))
		//add post to store


		 this.setState({
		 	description: '' 
		 });
	}

	render(){
		const { description } = this.state
		// redirect to home view if submited
		const postLeft = 103 - description.length
		return (
			<div> 
				<h3 className = 'center'> Add Comment</h3>
				<form className='new-tweet' onSubmit={this.handleSubmit}>
				<br />
				<textarea
				placeholder = 'Say something ...  '
				onChange = {this.handleChange}
				className="textarea"
				maxLength={280}
				/>
				{postLeft <= 100 && (
					<div className= 'tweet-length'> 
					{postLeft}

					</div>
				)}

				<button
					onClick={this.handleSubmit}
					className= 'btn'
					type='submit'
					disabled={description === ''} >
					submit
				</button>
				</form>
			</div>
		)
	}

}

	export default connect() (Comment)