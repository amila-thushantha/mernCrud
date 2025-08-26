import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AlertMessage from '../components/AlertMessage';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [alert, setAlert] = useState({ message: '', type: 'success' });

  const retrivePosts = () => {
    axios.get('/posts')
      .then(res => {
        if (res.data.success) setPosts(res.data.existingPosts);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    retrivePosts();
  }, []);

  // auto hide toast after 3 sec
  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => setAlert({ message: '' }), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const deletePost = (id) => {
    axios.delete(`/post/delete/${id}`)
      .then(res => {
        setAlert({ message: 'Post deleted successfully!', type: 'success' });
        retrivePosts();
      })
      .catch(err => setAlert({ message: 'Delete failed!', type: 'danger' }));
  };

  return (
    <div className="container mt-5">
      <AlertMessage message={alert.message} type={alert.type} onClose={() => setAlert({ message: '' })} />

      <h2>All Posts</h2>
      <table className="table table-striped table-bordered mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Topic</th>
            <th>Description</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><Link to={`/post/${post._id}`}>{post.topic}</Link></td>
              <td>{post.description}</td>
              <td>{post.postCategory}</td>
              <td>
                <Link className="btn btn-warning me-2" to={`/edit/${post._id}`}>Edit</Link>
                <button className="btn btn-danger" onClick={() => deletePost(post._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/add" className="btn btn-success mt-3 float-end">Create New Post</Link>
    </div>
  );
}
