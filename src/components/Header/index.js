import React from "react";
//mport './styles.css';
import logo from "../imagem/logo.svg"
import avatar from "../imagem/avatar.png"
import home from "../imagem/home.svg"
import notification from "../imagem/notification.svg"
import message from "../imagem/message.svg"

function Header() {
  return (
    <header id="main-header">
      <div className="content">
        <nav>
          <ul>
            <li><img src={home} alt="Home"></img>Home</li>
            <li><img src={notification} alt="Home"></img>Notifications</li>
            <li><img src={message} alt="Home"></img>Messages</li>
          </ul>
        </nav>
        <img src={logo} alt="Logo twitter"></img>
        <div className="side">

          <input type="text" placeholder="Search on Twitter"></input>
          <img src={avatar} alt="Avatar"></img>
          <button>Tweet</ button>
        </div>
      </div>
    </header>



  );
}



export default Header;