import React, { useState, useEffect } from "react"
import axios from "axios"

function List(props) {
  const [Text, setText] =useState("")
  useEffect(() => {

    let body = {
      text : "Hello",
    }
    
    axios
      .get("/api/test")
      .then((응답) => {
        console.log(응답)
        setText(응답.data.txt);
      })
      .catch((error) => {
        alert("요청실패")
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h3>List!</h3>
      <h3>{Text}</h3>
      {props.ContentList.map((content, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: "100%",
              marginLeft: "1rem",
            }}
          >
            내용 : {content}
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default List
