import React from 'react';
import { Link } from 'react-router-dom';

import './SidebarChat.css'
import db from './firebase';
import { Avatar } from '@material-ui/core';
function SidebarChat({id, name, addNewChat}) {

const createChat = () => {
    const roomName = prompt("Please enter name For Chat");
    if(roomName) {
      //database comes in action
    db.collection("rooms").add({
      name: roomName,
    })
    }
};



  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div>
      <div className="sidebarChat">
      <Avatar  />
      <div className="sidebarChat_info">
        <h2>{name}</h2>
        <p>Last message...</p>
      </div>
      </div>
    </div>
    </Link>
  ):(
<div onClick={createChat} className="sidebarChat">
  <h3>Add New Chat</h3>

</div>
  )
}

export default SidebarChat
