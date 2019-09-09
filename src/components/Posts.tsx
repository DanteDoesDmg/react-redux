import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction'
import {singlePost} from './Interfaces';


class Posts extends Component {
    props:any
    render(){
        const postItems = this.props.posts.map((post:singlePost)=>(
            <div key={post.id}>
                <h4 className='App_postTitle'>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ))
        return(
            <div className='App_posts'>
            <h1>Posts</h1>
            {postItems}
            </div>
        )
    }
}


const mapStateToProps = (state:any) =>({
    posts: state.posts.items
})
export default connect(mapStateToProps, {fetchPosts})(Posts)