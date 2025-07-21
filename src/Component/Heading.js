import React from "react"

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
      <Link to="/upload">Home</Link>
      <Link to="/list">Home</Link>
    </div>
  )
}

export default Heading
