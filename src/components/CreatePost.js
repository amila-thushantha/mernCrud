import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    topic: '',
    description: '',
    postCategory: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/post/save', post)
      .then(res => {
        if (res.data.success) {
          alert('Post created successfully!');
          navigate('/'); // go back to home page
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-success text-white">
          <h3>Create New Post</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="topic" className="form-label">Topic</label>
              <input
                type="text"
                className="form-control"
                id="topic"
                name="topic"
                value={post.topic}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="4"
                value={post.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="postCategory" className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                id="postCategory"
                name="postCategory"
                value={post.postCategory}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-success me-2">Create Post</button>
            <Link to="/" className="btn btn-secondary">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
