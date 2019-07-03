import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post);
  }

  render() {
    return (
      <div className="border-bottom border-info p-3">
        <h4>Add New Post</h4>
        <div className="col-11 col-md-6 m-0 p-0">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className="">Title: </label>
              <input
                onChange={this.onChange}
                id="inputPostTitle"
                className="form-control"
                type="text"
                name="title"
              />
            </div>
            <div className="form-group">
              <label className="">Body: </label>
              <textarea 
                onChange={this.onChange}
                id="inputPostBody"
                className="form-control"
                rows="3"
                name="body"
                value={this.state.body}
              />
            </div>
            <button className="btn btn-success" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
