import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8000/posts").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });
      }
    });
  }

  deletePost = (id) => {
    axios.delete(`http://localhost:8000/post/delete/${id}`).then(res => {
      alert('Post deleted successfully');
      this.retrivePosts();
    });
  }

  render() {
    return (
      <div className="container">
        <p>All Posts</p>

        <table className="table hover table-striped table-bordered table-sm mt-5" width={"100%"} cellSpacing={1} cellPadding={1} border={0}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
              <th scope="col">Description</th>
              <th scope="col">Posts Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  {/* Use Link instead of a */}
                  <Link to={`/post/${post._id}`} style={{ textDecoration: "none" }}>
                    {post.topic}
                  </Link>
                </td>
                <td>{post.description}</td>
                <td>{post.postCategory}</td>
                <td>
                  <Link className="btn btn-warning" to={`/edit/${post._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </Link>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deletePost(post._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/add" className="btn btn-success" style={{ float: "right" }}>
          Create New Post
        </Link>
      </div>
    );
  }
}
