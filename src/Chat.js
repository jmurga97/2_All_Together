import React, { Component } from 'react';
import MessageBox from './MessageBox.js'
import MessageInput from './MessageInput.js'

class Chat extends Component {
  
  	
	render(){
      
        const {user, onAddMessage, messages} = this.props
        console.log(user)
    	return(
        	<div >
          		<div className="chat-window">
           			<h2>Super Awesome Chat</h2>
            	<div className="name sender">{user.username}</div>
				<MessageBox user = {user} messages = {messages} />
				<MessageInput user = {user} onAddMessage = {onAddMessage}/>
				</div>
          	</div>
        )
    }
}

export default Chat;