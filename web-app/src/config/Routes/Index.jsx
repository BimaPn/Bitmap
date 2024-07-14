import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Landing, Login, Register } from "../../pages/Index"

const Links = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  )
}

export default Links
