import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(data => this.setState({posts: data}));
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div className="">
        Hello from Posts
        {postItems}
      </div>
    )
  };
};

export default Posts;