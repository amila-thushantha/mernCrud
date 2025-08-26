import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function EditPost() {
  const { id } = useParams(); // get post ID from URL
  const navigate = useNavigate();
  const [post, setPost] = useState({
    topic: '',
    description: '',
    postCategory: ''
  });

  // Fetch post details on mount
  useEffect(() => {
    axios.get(`/post/${id}`)
      .then(res => {
        if (res.data.success) {
          setPost(res.data.post);
        } else {
          alert('Post not found');
          navigate('/');
        }
      })
      .catch(err => console.error(err));
  }, [id, navigate]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/post/update/${id}`, post)
      .then(res => {
        if (res.data.success || res.data.success === "Updated Successfully") {
          alert('Post updated successfully!');
          navigate('/');
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-warning text-dark">
          <h3>Edit Post</h3>
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

            <button type="submit" className="btn btn-warning me-2">Update Post</button>
            <Link to="/" className="btn btn-secondary">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
