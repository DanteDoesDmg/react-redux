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
        
        console.log(this.state.posts)
        return(
            <div className='App_posts'>
            <h1>Posts</h1></div>
        )
    }
}