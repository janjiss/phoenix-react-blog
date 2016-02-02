var React = require("react")
var ReactMarkdown = require('react-markdown');
const Post = React.createClass({
  render(){
    return(
      <li onClick={this.props.handleClickOnPost}  className="list-group-item">
        <span className="badge">{this.props.data.author}</span>
        {this.props.data.title}
      </li>
    )
  }
});


module.exports = Post
