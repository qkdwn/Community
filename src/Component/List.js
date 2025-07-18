import React, { useState } from 'react'

function List() {

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
      {ContentList.map((ContentVisibilityAutoStateChangeEvent, idx)=> {
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