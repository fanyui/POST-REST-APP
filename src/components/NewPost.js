import React , { Component } from 'react'

import { connect } from  'react-redux'
import { Redirect } from 'react-router-dom'

import { handleAddPost } from './../actions/post'

class NewPost extends Component {
	state = {
		description: "",
		title: "",
		toHome: false,

	}

	handleChange = (e)=>{

		const description = e.target.value

		this.setState(() => ({
			description
		}));
	}
	handleTitleChange = (e)=>{

		const title = e.target.value

		this.setState(() => ({
			title 
		}));
	}

	handleSubmit = (e) => {
				console.log("something wierd is happening"+ this.state.title)

		e.preventDefault()
		const { description, title } = this.state
		console.log("something wierd is happening")
		const { dispatch } = this.props
		dispatch(handleAddPost(title, description))
		//add post to store


		 this.setState({
		 	description: '', 
		 	toHome: true,

		 });
	}

	render(){
		const {toHome, description } = this.state
		// redirect to home view if submited
		if(toHome === true){
			return <Redirect to='/' />
		}
		const postLeft = 103 - description.length

		return (
			<div> 
				<h3 className = 'center'> Create a New Post</h3>
				<form className='new-tweet' onSubmit={this.handleSubmit}>
				<input placeholder="title " className="input" onChange={this.handleTitleChange} />
				<br />
				<textarea
				placeholder = 'Post Description  '
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

	export default connect() (NewPost)