import React from "react";
import "./App.css";
import Nav from "./componants/nav/Nav";
import Home from "./componants/home/Home";
import About from "./componants/about/About";
import Dashboard from "./componants/dashboard/Dashboard";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user } = useAuth0();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <BrowserRouter>
          <Nav />
          <div className="app-body">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
