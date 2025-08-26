import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function PostDetails() {
  const { id } = useParams(); // get id from URL
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`/post/${id}`)
      .then(res => {
        if (res.data.success) {
          setPost(res.data.post);
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h3>Post Details</h3>
        </div>
        <div className="card-body">
          <p><strong>Topic:</strong> {post.topic}</p>
          <p><strong>Description:</strong> {post.description}</p>
          <p><strong>Category:</strong> {post.postCategory}</p>
          <Link to="/" className="btn btn-secondary mt-3">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
