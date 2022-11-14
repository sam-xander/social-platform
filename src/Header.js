import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";

import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

import { auth } from "./firebase";
import { logout, selectUser } from "./features/userSlice";
import logo from "./images/logo.png";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  const User = useSelector(selectUser);
  return (
    <header>
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={LocalFireDepartmentIcon} title="Latest" />
        <HeaderOption Icon={ChatIcon} title="Messages" />
        <HeaderOption Icon={NotificationsIcon} title="Alerts" />
        {User && (
          <button className="header__button" onClick={logoutOfApp}>
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
