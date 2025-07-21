import React from "react"
import { Link } from 'react-router-dom';


function Heading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1>Hello, React!</h1>
      <Link to="/">Home</Link>
      <Link to="/upload">Upload</Link>
      <Link to="/list">list</Link>
    </div>
  )
}

export default Heading
