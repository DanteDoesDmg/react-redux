import React, {Component} from 'react';
import {singlePost} from './Interfaces';
export default class Posts extends Component {
    
    constructor(props:object){
        super(props);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>this.setState({posts:data}))
    }
    state={
        posts:[],
    }

    render(){
        const postItems = this.state.posts.map((post:singlePost)=>(
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