import React, { useState } from 'react'

function Upload() {
  const [Content, setContent] = React.useState("");
  const [ContentList, setContentList] = React.useState([]);

  const onSubmit = () => {
    let tempArr =[...ContentList];
    tempArr.push(Content);
    setContentList([...tempArr]);
    setContent("");
  }

  return (
    <div>
      <input
        type="text"
        value={Content}
        onChange={(e) => {setContent(e.currentTarget.value)
        }}
    />
    <button
      onClick={() => {
        onSubmit();
      }}
      style={{ marginTop: "1rem"}}
    >
      제출!
    </button>
  </div>
  )
}

export default Upload
