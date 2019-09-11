import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction'
import { singlePost } from '../Interfaces';
import { AppState } from '../reducers'


class Posts extends Component {
    UNSAFE_componentWillMount() {
        this.props.fetchPosts()
    }
    props: any
   UNSAFE_componentWillReceiveProps(nextProps:any){
        if(nextProps.newPost){
            nextProps.newPost.id = this.props.posts.length + 1;
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const postItems = this.props.posts.map((post: singlePost) => (
            <div key={post.id}>
                <h4 className='App_postTitle'>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div className='App_posts'>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}


const mapStateToProps = (state: AppState) => ({
    posts: state.posts.items,
    newPost:state.posts.item
})
export default connect(mapStateToProps, { fetchPosts })(Posts)