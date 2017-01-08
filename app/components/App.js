const React = require('react');
const _ = require('lodash/string');

function convertCase(s, convertType, lineType) {
  let lines = s.split("\n");
  switch(convertType) {
    case "camel-case":
      return lines.map(l => _.camelCase(l)).join('\n');
    case "kebab-case":
      return lines.map(l => _.kebabCase(l)).join('\n');
    case "lower-case":
      return lines.map(l => _.lowerCase(l)).join('\n');
    case "snake-case":
      return lines.map(l => _.snakeCase(l)).join('\n');
    case "start-case":
      return lines.map(l => _.startCase(l)).join('\n');
    case "upper-case":
      return lines.map(l => _.upperCase(l)).join('\n');
    default:
      return lines.join('\n');
  }
}

module.exports = React.createClass({
  getInitialState: function() {
    return {
      converted: '',
      convertType: 'camel-case',
      lineType: "multi-line"
    };
  },

  handleConvertTypeChange: function(e) {
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
        <div className="form-group row">
          <div className="row">
            <div className="col-sm-12">
              <textarea className="form-control" rows="10" id="unconverted" onChange={this.handleTextChange} placeholder="Type your text here." />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <select className="form-control" onChange={this.handleConvertTypeChange}>
                <option value="camel-case">Camel Case</option>
                <option value="kebab-case">Kebab Case</option>
                <option value="lower-case">Lower Case</option>
                <option value="snake-case">Snake Case</option>
                <option value="start-case">Start Case</option>
                <option value="upper-case">Upper Case</option>
              </select>
            </div>
          </div>
        </div>

        <hr />

        <div className="form-group row">
          <label>Output:</label>
          <pre>{this.state.converted}</pre>
        </div>
      </form>
    );
  }
});
