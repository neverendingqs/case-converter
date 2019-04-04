const React = require('react');
const _ = require('lodash/string');

function convertCase(s, convertType) {
  let lines = s.split("\n");
  switch(convertType) {
    case "atob":
      return atob(s);
    case "btoa":
      return btoa(s);
    case "uri-decode":
      return decodeURI(s);
    case "uri-decode-component":
      return decodeURIComponent(s);
    case "uri-encode":
      return encodeURI(s);
    case "uri-encode-component":
      return encodeURIComponent(s);
    case "camel-case":
      return lines.map(l => _.camelCase(l)).join('\n');
    case "capitalize":
      return lines.map(l => _.capitalize(l)).join('\n');
    case "deburr":
      return lines.map(l => _.deburr(l)).join('\n');
    case "escape":
      return lines.map(l => _.escape(l)).join('\n');
    case "escape-reg-exp":
      return lines.map(l => _.escapeRegExp(l)).join('\n');
    case "kebab-case":
      return lines.map(l => _.kebabCase(l)).join('\n');
    case "lower-case":
      return lines.map(l => _.lowerCase(l)).join('\n');
    case "lower-first":
      return lines.map(l => _.lowerFirst(l)).join('\n');
    case "snake-case":
      return lines.map(l => _.snakeCase(l)).join('\n');
    case "start-case":
      return lines.map(l => _.startCase(l)).join('\n');
    case "to-lower":
      return lines.map(l => _.toLower(l)).join('\n');
    case "to-upper":
      return lines.map(l => _.toUpper(l)).join('\n');
    case "trim":
      return lines.map(l => _.trim(l)).join('\n');
    case "trim-end":
      return lines.map(l => _.trimEnd(l)).join('\n');
    case "trim-start":
      return lines.map(l => _.trimStart(l)).join('\n');
    case "unescape":
      return lines.map(l => _.unescape(l)).join('\n');
    case "upper-case":
      return lines.map(l => _.upperCase(l)).join('\n');
    case "upper-first":
      return lines.map(l => _.upperFirst(l)).join('\n');
    default:
      return lines.map(l => _.escape(l)).join('\n');
  }
}

module.exports = React.createClass({
  getInitialState: function() {
    return {
      converted: '',
      convertType: 'camel-case'
    };
  },

  handleConvertTypeChange: function(e) {
    this.setState({
      convertType: e.target.value,
      converted: convertCase(this.refs.unconverted.value, e.target.value)
    });
  },

  handleTextChange: function(e) {
	  this.setState({
      converted: convertCase(e.target.value, this.state.convertType)
    });
  },
  
  handleCopyToClipboard: function(e) {
    e.preventDefault();
    this.refs.output.focus();
    this.refs.output.select();
    document.execCommand('copy');
  },

  render: function () {
    return (
      <form>
        <div className="form-group row">
          <div className="row">
            <div className="col-sm-12">
              <textarea className="form-control" rows="10" ref="unconverted" onChange={this.handleTextChange} placeholder="Type your text here." />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <select className="form-control" onChange={this.handleConvertTypeChange} defaultValue="encoding-header">
                <option value="encoding-header" disabled="disabled">-- Encode / Decode --</option>
                <option value="atob">Base64 Decode</option>
                <option value="btoa">Base64 Encode</option>
                <option value="uri-decode">URI Decode</option>
                <option value="uri-decode-component">URI Decode Component</option>
                <option value="uri-encode">URI Encode</option>
                <option value="uri-encode-component">URI Encode Component</option>
                <option value="lodash-header" disabled="disabled">-- Lodash Functions --</option>
                <option value="camel-case">camelCase</option>
                <option value="capitalize">capitalize</option>
                <option value="deburr">deburr</option>
                <option value="escape">escape</option>
                <option value="escape-reg-exp">escapeRegExp</option>
                <option value="kebab-case">kebabCase</option>
                <option value="lower-case">lowerCase</option>
                <option value="lower-first">lowerFirst</option>
                <option value="snake-case">snakeCase</option>
                <option value="start-case">startCase</option>
                <option value="to-lower">toLower</option>
                <option value="to-upper">toUpper</option>
                <option value="trim">trim</option>
                <option value="trim-end">trimEnd</option>
                <option value="trim-start">trimStart</option>
                <option value="unescape">unescape</option>
                <option value="upper-case">upperCase</option>
                <option value="upper-first">upperFirst</option>
              </select>
            </div>
          </div>
        </div>

        <hr />

        <div className="form-group row">
          <button
            className="btn btn-info btn-sm"
            onClick={e => this.handleCopyToClipboard(e)}
            style={{ marginBottom: '10px'}}
          >Copy Output to Clipboard</button>
          <textarea className="form-control" rows="10" ref="output" value={this.state.converted}></textarea>
        </div>
      </form>
    );
  }
});
