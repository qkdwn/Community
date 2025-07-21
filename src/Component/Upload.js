import React, { useState } from 'react'

function Upload(props) {
  const [Content, setContent] = React.useState("");

  const onSubmit = () => {
    let tempArr =[...props.ContentList];
    tempArr.push(Content);
    props.setContentList([...tempArr]);
    setContent("");
  }

  return (
    <div>
      <input type="text" value={Content} onChange={(e) => {console.log(e.currentTarget.value)}}/> 
      <button onClick={()=> {onSubmit();}} style={{ marginTop: "1rem" }}>제출!</button>
  </div>
  )
}

export default Upload
