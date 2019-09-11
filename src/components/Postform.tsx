import React, { Component, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction';
import { any } from 'prop-types';

class PostForm extends Component {

    props={
        createPost: Function()
    };

    state = {
        title: '',
        body: '',
    }

    onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body,
        };

        this.props.createPost(post)

    }

    render() {
        return (
            <div>
                <h1>Write a Post</h1>
                <form className='App_newPost' onSubmit={this.onSubmit}>
                    <label>Title:
                        <input name='title' type='text' placeholder='Name your post' onChange={this.onChange} value={this.state.title} />
                    </label>
                    <label>Text:
                        <textarea name='body' onChange={this.onChange} />
                    </label>
                    <button type='submit'>Add post</button>
                </form>
            </div>
        )
    }
}


export default connect(null, { createPost })(PostForm)