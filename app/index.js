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
            <h1 className="text-center" style={{marginBottom: '50px'}}>Markdown Previewer</h1>
            <div className="container">
                <div style={{display: 'inline-block'}}>
                    <textarea placeholder="Type markdown here" rows="30" cols="80" onChange={this.handleInputChange}></textarea>
                </div>
                <div style={{display: 'inline-block', marginLeft: '20px'}}>
                    <div dangerouslySetInnerHTML={this.getMarkdown()}></div>
                </div>
            </div>
        </div>
    )
  }
});

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('app'));