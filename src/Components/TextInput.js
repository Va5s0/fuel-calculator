import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';

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
      id: "",
      showResults: false
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
    const pattern = /^[0-9]+\.[0-9]+$|^[0-9]+$/;
    if (!pattern.test(e.target.value)) {
     this.setState({id: "highlight", showResults: true});
    }
    else {
      this.setState({id: "", showResults: false});
    }
  }

  handleKeyPress(e){
    if(e.key === 'Enter'){
      this.props.onChange(e.target.value);
      const pattern = /^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]*\.[0-9]*[1-9][0-9]*)$/;
      if (!pattern.test(e.target.value)) {
       e.preventDefault();
       this.setState({id: "highlight", showResults: true});
      }
      else {
        this.setState({id: "", showResults: false});
      }
    }
  }

  render() {
    return (
      <div className="range">
        { this.state.showResults ? <ErrorMessage /> : null }
        <input
          id={this.state.id}
          type='text'
          value={this.state.value}
          format='0.0'
          onChange={this.handleChange.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default TextInput;
