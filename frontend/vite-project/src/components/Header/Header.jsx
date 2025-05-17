import React from "react";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "../Header/Header.css"
import logo from "../../assets/images/freepik__background__28356.png"



export function Header() {
  return (
    <div className="header-main-container">
      <div className="logo-section">
       <img src="public\logo.png" width={110} height={120}/>
      </div>
      <div className="nav-section">
        <nav>
          <ul>
            <li>
              <FaUserCircle size={24} color="White"/>
            </li>
            <li>
              <FaRegHeart size={24} color="White" />
            </li>
            <li>
              <IoMdCart size={24} color="White" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
