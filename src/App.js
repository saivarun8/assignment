// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsDisplayScreen from './screens/PostsDisplayScreen';
import CreatePostScreen from './screens/CreatePostScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PostsDisplayScreen} />
        <Route path="/create" component={CreatePostScreen} />
      </Switch>
    </Router>
  );
}

export default App;
