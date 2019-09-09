import React, {Component, ChangeEvent, FormEvent} from 'react'


export default class PostForm extends Component {

    state={
        title: '',
        body:'',
    }
        
    onChange=(e:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
       
        const post = {
            title: this.state.title,
            body: this.state.body,
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(data => console.log(data));
       
    }
    
    render(){
        return(
            <div>
                <h1>Write a Post</h1>
                <form className='App_newPost' onSubmit={this.onSubmit}>
                    <label>Title:
                        <input name= 'title' type='text' placeholder='Name your post' onChange={this.onChange} value={this.state.title}/>
                    </label>
                    <label>Text:
                        <textarea name='body' onChange={this.onChange}/>
                    </label>
                    <button type='submit'>Add post</button>
                </form>
            </div>
        )
    }
}