var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Test
      </div>
    )
  }
});
ReactDOM.render(<HelloWorld />, document.getElementById('app'));