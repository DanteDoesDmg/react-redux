import React, {Component} from 'react'


export default class PostForm extends Component {

    render(){
        return(
            <div>
                <h1>Write a Post</h1>
                <form className='App_newPost'>
                    <label>Title:
                        <input type='text' placeholder='Name your post'/>
                    </label>
                    <label>Text:
                        <textarea name='body'/>
                    </label>

                </form>
            </div>
        )
    }
}