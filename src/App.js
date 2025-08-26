import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditePost from './components/EditePost';
import PostDetails from './components/PostDetails';
import NavBar from './components/NavBar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <NavBar />
        <div className='container'>
         
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<CreatePost />} />
            <Route path='/edit/:id' element={<EditePost />} />
            <Route path='/post/:id' element={<PostDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
