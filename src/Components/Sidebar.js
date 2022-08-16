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
import { FiMenu } from "react-icons/fi";
import sideBarBg from "../Assests/bg1.jpeg";
import { Route, Routes, Link } from "react-router-dom";

import { FiMessageCircle } from "react-icons/fi";

export default function Sidebar({ image, collapsed, handleToggleSidebar }) {
  return (
    <ProSidebar className="sidebar" image={sideBarBg} collapsed={collapsed}>
      <SidebarHeader>
        <Menu>
          {collapsed ? (
            <MenuItem
              onClick={handleToggleSidebar}
              icon={<FiMenu />}
            ></MenuItem>
          ) : (
            <MenuItem
              onClick={handleToggleSidebar}
              icon={<MdMenuOpen />}
            ></MenuItem>
          )}
        </Menu>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            suffix={<p>New</p>}
            icon={<Icons img={dashboardIcon} alt="Dashboard" />}
          >
            Dashboard
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<Icons img={profileIcon} alt="Profile" />}>
            Profile
            <Link to="/profile" />
          </MenuItem>

          <MenuItem icon={<FiMessageCircle size={20} />}>
            Message
            <Link to="/message" />
          </MenuItem>

          <MenuItem icon={<FaHeart />}>
            Favourite
            <Link to="/favourite" />
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </ProSidebar>
  );
}
