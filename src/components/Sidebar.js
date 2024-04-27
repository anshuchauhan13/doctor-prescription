import React from "react";
import logo from "../assets/logo.png";
import reg from "../assets/reg.png";
import file from "../assets/file.png";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-800 h-full text-white">
      <div>
        <img src={logo} className="w-48 mx-2 my-2" alt="logo"  ></img>
      </div>
      <br/>
      <br/>
      <ul >
        <li className="flex flex-row "> 
          <img src={reg} className="w-10 h-35 mx-2 "></img>
          <a href="">Patient Registration</a>
        </li>
        <br/>
        <li className="flex flex-row "> 
          <img src={reg} className="w-10 h-35 mx-2 "></img>
          <a href="">Appointment</a>
        </li>
        <br/>
        <li className="flex flex-row "> 
          <img src={reg} className="w-10 h-35 mx-2 "></img>
          <a href="">Patient List</a>
        </li>
        <br/>
        <li className="flex flex-row "> 
        <FaBook className="inline-block w-8 h-9 mr-6 mx-1.5 "/>
          <a href="">Reports</a>
        </li>
        <br/>
        <li className="flex flex-row "> 
          <img src={file} className="w-10 h-35 mx-2 "></img>
          <a href="">Upload Reports</a>
        </li>
        <br></br>
      
        <li className="flex flex-row my-36"> 
        <FaCircleArrowRight className="inline-block w-6 h-6 mr-2 " />
          <a href="">Sign Out</a>
        </li>
        
      </ul>
        
    </div>
  );
};

export default Sidebar;

