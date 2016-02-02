import { Router, Route, Link, browserHistory } from 'react-router'
import React from "react"
import {render} from "react-dom"
import Posts from "./views/posts.jsx"
import PostEdit from "./views/post-edit.jsx"
var jquery = require("jquery")
require('bootstrap-loader');

render(
  (
    <Router history={browserHistory}>
      <Route component={Posts} path="/"/>
      <Route component={PostEdit} path="edit/:id"/>
    </Router>
  ),
  document.getElementById("main")
)
