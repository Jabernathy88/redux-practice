import React from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="content">
      <h2 className="bg-info text-white m-0 p-3">Hello from App.js</h2>
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;