import React, { useState } from "react";

import {
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarHeader,
  Menu,
  SidebarFooter,
} from "react-pro-sidebar";
import Icons from "../Components/Icons";
import dashboardIcon from "../Assests/dashboard.png";
import profileIcon from "../Assests/profile.png";
import chatIcon from "../Assests/chat.png";
import { FaHeart, FaAddressBook, FaGithub } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { FiMenu, FiGithub } from "react-icons/fi";
import sideBarBg from "../Assests/bg1.jpeg";
import { Route, Routes, Link } from "react-router-dom";

import { FiMessageCircle } from "react-icons/fi";
import { fontSize, iconSize } from "../assets/fontSize";

export default function Sidebar({ image, collapsed, handleToggleSidebar }) {
  const [noMessage, setNoMessage] = useState(2);
  return (
    <ProSidebar
      className="sidebar"
      style={{ borderRadius: 90 }}
      collapsed={collapsed}
    >
      <SidebarHeader className="sidebarHeader">
        <Menu popperArrow={true}>
          {collapsed ? (
            <MenuItem
              onClick={handleToggleSidebar}
              icon={<FiMenu size={iconSize} />}
            ></MenuItem>
          ) : (
            <MenuItem
              onClick={handleToggleSidebar}
              icon={<MdMenuOpen size={iconSize} />}
            ></MenuItem>
          )}
        </Menu>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            style={{ fontSize }}
            icon={<Icons img={dashboardIcon} alt="Dashboard" />}
          >
            Dashboard
            <Link to="/" />
          </MenuItem>
          <MenuItem
            style={{ fontSize }}
            icon={<Icons img={profileIcon} alt="Profile" />}
          >
            Profile
            <Link to="/profile" />
          </MenuItem>

          <MenuItem
            suffix={
              <div style={{ position: "absolute", left: 150, bottom: 14 }}>
                {noMessage > 20 ? (
                  <p className="span">20+</p>
                ) : (
                  <p className="span">2</p>
                )}
              </div>
            }
            style={{ fontSize }}
            icon={<FiMessageCircle size={20} />}
          >
            <div
              style={{
                backgroundColor: "red",
                padding: 2,
                borderRadius: "50%",
                height: 10,
                width: 10,
                position: "absolute",
                bottom: 10,
                left: 45,
              }}
            ></div>
            Message
            <Link to="/message" />
          </MenuItem>

          <MenuItem style={{ fontSize }} icon={<FaHeart />}>
            Favourite
            <Link to="/favourite" />
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter className="sidebarFooter">
        <Menu iconShape="square">
          <MenuItem style={{ fontSize }} icon={<FiGithub />}>
            <div>
              <h3>Sophin Shrestha</h3>
              <p className="email">sophinstha123@gmail.com</p>
            </div>
          </MenuItem>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
}
