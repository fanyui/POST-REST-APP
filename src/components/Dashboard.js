import React, { Component } from 'react';
import  { connect } from 'react-redux'
import Post from './Post'

class Dashboard extends Component {

  componentDidMount() {
  }
  render() {

    return (
      <div>
		Dashboard
		<h3 className='center'> All Posts </h3>
		<ul className= 'dashboard-list'>
			{
				this.props.postIds.map((id) => (
					<li key={id} >
						<Post id={id} />
					</li>
				))

				
			}
		</ul>
      </div>
    );
  }
}
    function mapStateToProps({ posts}) {
	    return {
	      postIds: Object.keys(posts).sort((a,b) => posts[b].createAt - posts[a].createAt)
	    }
	  }

export default connect(mapStateToProps)(Dashboard);
