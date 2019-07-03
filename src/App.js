import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

// const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div id="content">
        <h2 className="bg-info text-white m-0 p-3">Hello from App.js</h2>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;