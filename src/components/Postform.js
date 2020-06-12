import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

 class Postform extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = (e) => this.setState({[e.target.name] : e.target.value});

    onSubmit = (e) => { 
        e.preventDefault(); 

        const post = {
            title: this.state.title,
            body: this.state.body
        };

    this.props.createPost(post);   

    this.setState({
        title: '',
        body: ''
    });
    }
    
    render() {
        return (
            <div>
                <h1> Add Post </h1>
                <form onSubmit={this.onSubmit}>
                    <label> Title: </label> <br />
                    <input 
                    type = 'text' 
                    name = 'title'
                    vaue = {this.state.title}
                    onChange = {this.onChange}
                    />
                    <br />
                    <label> Body: </label><br />
                    <textarea
                    name = 'body'
                    value = {this.state.body}
                    onChange = {this.onChange}
                    />
                    <br />
                    <button type='submit'> Submit </button>
                </form>
            </div>
        )
    }
}
Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null, { createPost })(Postform)