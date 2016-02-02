var React = require("react")
var ReactMarkdown = require('react-markdown');
var Post = require('./post.jsx');

const Posts = React.createClass({
  getInitialState() {
    return({
      posts: [
        {
          id: 2,
          title: "El comer la fresas",
          author: "Janis Miezitis",
          body: "Hello.\n\n _This_ is markdown.\n It is fun\n### Love it or leave it.",
          current: true
        },
        {
          id: 1,
          title: "Is this a cool thing?",
          author: "Janis Miezitis",
          body: "I have been california dreaming of the things I used to know",
          current: false
        }
      ]
    }
  )
},

handleClickOnPost(childData) {
  this.state.currentBlogPostBody = childData.body;
  this.state.posts.map((o) => {
    if (o.id == childData.id) {
      o.current = true;
    } else {
      o.current = false;
    }
    return o;
  })
  this.setState(this.state)
},

getPosts() {
  return this.state.posts.map((p) => {
    return (
      <Post key={p.id} data={p} handleClickOnPost={this.handleClickOnPost.bind(null, p)} />
    )
  })
},

currentBlogPostBody() {
  return this.state.posts.find(p => {return p.current}).body
},

render(){
  return(
    <div className="row">
      <div className="col-md-6">
        <ul className="list-group">
          {this.getPosts()}
        </ul>
      </div>
      <div className="col-md-6">
        <ReactMarkdown source={this.currentBlogPostBody()} />
      </div>
    </div>
  )
}
});

module.exports = Posts;
