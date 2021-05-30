import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat.js'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

/*const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];*/

class App extends Component {
  state = {
  	messages: []
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };
  
  addMessage = (message) => {
  	this.setState((prevState) =>({
    	messages: [...prevState.messages,message]
    }))
  }
  
  render() {
    console.log(this.state.messages)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<div className = "container">
			<Chat user = {users[0]} onAddMessage={this.addMessage} messages={this.state.messages}/>
			<Chat user = {users[1]} onAddMessage={this.addMessage} messages={this.state.messages}/>
		</div>
		</div>
	)
	}
}

export default App;