var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');

var MarkdownPreviewer = React.createClass({
  getInitialState: function() {
    return {
        textString: ""
    }
  },
  handleInputChange: function(e) {
    this.setState({
        textString: e.target.value
    });
  },
  getMarkdown: function() {
    return {__html: marked(this.state.textString)}
  },

  render: function(){
    return (
        <div className="container">
            <h1 className="text-center">Markdown Previewer</h1>
            <div className="col-sm-8 col-sm-offset-2" style={{background: "pink"}}>
                <div className="col-sm-6">
                    <textarea rows="20" cols="50" onChange={this.handleInputChange}></textarea>
                </div>
                <div className="col-sm-6 preview-area" style={{background: "blue"}} dangerouslySetInnerHTML={this.getMarkdown()}>
                </div>
            </div>
        </div>
    )
  }
});
ReactDOM.render(<MarkdownPreviewer />, document.getElementById('app'));