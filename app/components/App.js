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
      <form>
        <div class="form-group row">
          <select className="form-control" onChange={this.handleSelectionChange}>
            <option value="camel-case">Camel Case</option>
            <option value="kebab-case">Kebab Case</option>
            <option value="lower-case">Lower Case</option>
            <option value="snake-case">Snake Case</option>
            <option value="start-case">Start Case</option>
            <option value="upper-case">Upper Case</option>
          </select>
        </div>

        <div class="form-group row">
          <input className="form-control" type="text" id="unconverted" onChange={this.handleTextChange} placeholder="Type your text here." />
        </div>

        <hr />

        <div class="form-group row">
          <label>Output:</label>
          <pre>{this.state.converted}</pre>
        </div>
      </form>
    );
  }
});
