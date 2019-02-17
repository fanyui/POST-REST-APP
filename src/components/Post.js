import React, { Component } from 'react';
import  { connect } from 'react-redux'
import { formatPost, formatDate }  from '../utils/helper'
import { Link } from 'react-router-dom'
//npm install react-icons
//npm install react-redux-loading

import {TiArrowBackOutline} from 'react-icons/ti' 
import {TiHeartOutline} from 'react-icons/ti'
import {TiHeartFullOutline} from 'react-icons/ti'


class Post extends Component {

	handleLike = (e) =>{
		e.preventDefault()
		//todo: handle like here
	}

  componentDidMount() {
  }
  render() {
  	const { post } = this.props

  	if (post === null) {
  		return <p> This post doesnot exist </p>
  	}
  	const {
  		title, description, createAt, comments, id, likes }  = post
  	
    return (
      <Link to={`/post/${id}`} className = "tweet">
      		<div className = "tweet-info">
	      		<div>
					<span> { title} </span>
					<div> {formatDate(createAt)} </div>
					<p> { description } </p>
				</div>
				<div className = 'tweet-icons'> 
					<TiArrowBackOutline className='tweet-icon' />
					<span> { comments.length !== 0 && comments.length} </span>

					<button className='heart-button' onClick={this.handleLike} >
					{likes === true ? <TiHeartOutline color = '#e0245e' className='tweet-icon' />
					:
						<TiHeartFullOutline className='tweet-icon' />
					}
					</button>
					<span> {likes.length}</span>
				</div>
			</div>
      </Link>
    );
  }
}
    function mapStateToProps({ authedUser, users,  posts}, {id}) {
    	const post = posts[id]
	    return {
	    	authedUser,
	    	post,
	    	// post : formatPost( post)
	    }
	  }

export default connect(mapStateToProps)(Post);

