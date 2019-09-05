import React, {Component} from 'react'


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
        return(
            <div>
            <h1>Posts</h1>
            </div>
        )
    }
}