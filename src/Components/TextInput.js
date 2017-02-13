import React, { Component } from 'react';

class TextInput extends Component {

  static propTypes = {
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    onChange: React.PropTypes.func.isRequired,
  }

  constructor(props){
    super(props);
    this.state = {
      value: this.props.value,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  }

  handleChange(e){
    this.setState({value:e.target.value})
  }

  handleBlur(e){
    this.props.onChange(e.target.value);
  }

  handleKeyPress(e){
    const pattern = /^[0-9.,]+$/;
    if (e.key === 'Enter') {
        this.props.onChange(e.target.value);
      }
    else if (!pattern.test(e.key)) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div className="range">
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default TextInput;
