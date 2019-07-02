import React from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="content">
      <h2 className="bg-secondary text-white p-3">Hello from App.js</h2>
      <div className="container-fluid">
        <PostForm />
        <Posts />
      </div>
    </div>
  );
}

export default App;