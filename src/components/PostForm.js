import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <div className="border-bottom border-info p-3">
        <h4>Add New Post</h4>
        <div className="col-11 col-md-6 m-0 p-0">
          <form>
            <div className="form-group">
              <label for="inputPostTitle">Title: </label>
              <input
                onChange={this.onChange}
                id="inputPostTitle"
                className="form-control"
                type="text"
                name="title"
              />
            </div>
            <div className="form-group">
              <label for="inputPostBody">Body: </label>
              <textarea id="inputPostBody" className="form-control" rows="3" name="body" />
            </div>
            <button className="btn btn-success" type="submit">Submit</button>
          </form>
        </div>

        
      </div>
    );
  }
}

export default PostForm;