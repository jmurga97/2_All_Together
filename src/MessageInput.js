import React, { Component } from 'react';

class MessageInput extends Component {
  	state = {
    	message: '',
    }
  
  	handleMessage = (event) => {
    	this.setState({message: event.target.value})
    }
  	isDisabled = () => this.state.message === ''
  	addInput = (event) => {
    	event.preventDefault()
      	this.props.onAddMessage({
        	username: this.props.user['username'],
          	text: this.state.message
        })
    }
	render(){
    	return(
        	<div>
              <form onSubmit={this.addInput} className="input-group">
                <input 
          			type="text" 
          			className="form-control" 
          			placeholder="Enter your message..." 
          			value={this.state.message}
  					onChange={this.handleMessage}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        )
    }
}

export default MessageInput;