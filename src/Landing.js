import React from "react";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import AllUser from "./components/AllUser/AllUser";
import AddUser from "./components/AddUser/AddUser";
import EditUser from "./components/EditUser/EditUser";

const Landing = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="container mt-5">
        <Route path="/" exact>
          <AllUser />
        </Route>
        <Route path="/add-user">
          <AddUser />
        </Route>
        <Route path="/edit/:id">
          <EditUser />
        </Route>
      </div>
      {/* <nav className="navbar  navbar-dark bg-dark text-center footer ">
        <div className="text-white text-center">
                  Md|Mubasheer
          <br />
          © 2021.All Rights reserved.
        </div>
      </nav> */}
    </div>
  );
};

export default Landing;
