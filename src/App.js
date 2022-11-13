import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const User = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      {!User ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* - Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
