import React, { Component } from 'react';
import  { connect } from 'react-redux'
import Post from './Post'

import Comment from './Comment'

class PostPage extends Component {

  componentDidMount() {
  }
  render() {
  	const { id } = this.props.match.params
  	const { post } = this.props
console.log("the post is id "+id + " end"+JSON.stringify(post))
    return (
      <div>
		Dashboard
		<h3 className='center'> All Posts </h3>
		<ul className= 'dashboard-list'>
			{
				this.props.postIds.map((temp) => {
					if(temp===id+""){
						return <li key={temp} >
								<Post id={id+1} />
							</li>
					}
				}
					
			)	
			}
			<Comment postId={id} />
			<p>
			</p>
			
		</ul>
      </div>
    );
  }
}
    function mapStateToProps({ posts}, props) {
    	  	const { id } = props.match.params

	    return {
	    	post: posts[props.match.params.id],
	      postIds: Object.keys(posts).sort((a,b) => posts[b].createAt - posts[a].createAt),
	      id
	      // postIds: ["1", "2"]
	    }
	  }

export default connect(mapStateToProps)(PostPage);
