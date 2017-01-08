const React = require('react');
const _ = require('lodash/string');

function convertCase(s, convertType) {
  switch(convertType) {
    case "camel-case":
      return _.camelCase(s);
    case "kebab-case":
      return _.kebabCase(s);
    case "lower-case":
      return _.lowerCase(s);
    case "snake-case":
      return _.snakeCase(s);
    case "start-case":
      return _.startCase(s);
    case "upper-case":
      return _.upperCase(s);
    default:
      return s;
  }
}

module.exports = React.createClass({
  getInitialState: function() {
    return {
      converted: '',
      convertType: 'camel-case'
    };
  },

  handleSelectionChange: function(e) {
    this.setState({
      convertType: e.target.value,
      converted: convertCase(this.state.converted, e.target.value)
    });

  },

  handleTextChange: function(e) {
	  this.setState({
      converted: convertCase(e.target.value, this.state.convertType)
    });
	},

  render: function () {
    return (
      <div>
        <input type="text" id="unconverted" onChange={this.handleTextChange} />
        <select onChange={this.handleSelectionChange}>
          <option value="camel-case">Camel Case</option>
          <option value="kebab-case">Kebab Case</option>
          <option value="lower-case">Lower Case</option>
          <option value="snake-case">Snake Case</option>
          <option value="start-case">Start Case</option>
          <option value="upper-case">Upper Case</option>
        </select>
        <h1>{this.state.converted}</h1>
      </div>
    );
  }
});
