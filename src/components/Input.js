import React, { Component } from 'react';

class Input extends Component {  
  render() {
	return (
    	<input type="text" className="form-control" onChange={this.props.onChange}/>
    );
  }
}

export default Input;