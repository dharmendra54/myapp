import React from "react";
import Feeds from "./Feeds";
import Post from "./Post";
import Albums from './Albums'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Routr() {
  return (
    <div>
      <Router>
        <Link to="/">Feeds</Link> | <Link to="/post">Post</Link> | <Link to="/albums">Album</Link>
        <Routes>
            <Route path="/" index element={<Feeds/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
            <Route path="/albums" element={<Albums/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
