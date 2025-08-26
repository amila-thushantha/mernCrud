import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // ✅ Correct import

export default class PostDetails extends Component {
  render() {
    return (
      <div>
        <h2>Post Details Page</h2>
        <Link to="/" style={{ textDecoration: "none"  , color: "DarkBlue"}}>Go Back to Home</Link>
      </div>
    );
  }
}
