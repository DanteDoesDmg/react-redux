import React, {Component} from 'react'


export default class Posts extends Component {
    
    constructor(props:object){
        super(props);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(res=>console.log(res))
    }

    render(){
        return(
            <div>
            <h1>Posts</h1>
            </div>
        )
    }
}