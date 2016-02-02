import { Router, Route, Link, browserHistory } from 'react-router'
import React from "react"
import App from "./app.js"
import Posts from "./views/posts.jsx"
import PostEdit from "./views/post-edit.jsx"

module.exports = (
  <Router history={browserHistory}>
    <Route handler={App}>
      <Route handler={Posts} path="/"/>
      <Route handler={PostEdit} path="edit/:id"/>
    </Route>
  </Router>
)
