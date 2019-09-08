import React, {Component, ChangeEvent} from 'react'


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
    
    render(){
        return(
            <div>
                <h1>Write a Post</h1>
                <form className='App_newPost'>
                    <label>Title:
                        <input name= 'title' type='text' placeholder='Name your post' onChange={this.onChange} value={this.state.title}/>
                    </label>
                    <label>Text:
                        <textarea name='body' onChange={this.onChange}/>
                    </label>
                </form>
            </div>
        )
    }
}