import React, { useState } from "react"

/*
1. 컴포넌트의 이름은 반드시 대문자로 시작하여야 합니다.
2. 컴포넌트는 다른 컴포넌트가 사용할 수 있도록 export 해주어야 합니다.
3. 컴포넌트가 다른 컴포넌트를 사용하려면 import 하여야 합니다.
*/

//JSX
//1. CamelCse 원칙: className
//2. js : {}
//3. css, style : {{}} + object

//1. 가정문: if-else, switch // 삼항 연산자
//2. 반복문: for // map

function Upload() {
  const [Content, setContent] = React.useState("");
  const [ContentList, setContentList] = React.useState([]);

  const onSubmit = () => {
    let tempArr =[...ContentList];
    tempArr.push(Content);
    setContentList([...tempArr]);
    setContent("");
  }
  /*
  1. 첫번째 인자 : 변수의 이름
  2. 두번째 인자 : state를 바꿔주는 함수
  3. useState 함수 인자 : state의 초기 type, 값

  state의 값이 바뀌어도 화면을 재렌더링(새로고침) 시킬 필요가 x

  1. state의 값을 바꿀때는 항상 setState 사용!
  2. setState를 html 태그의 on 속성 호출 : function(){}
  */
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
  </div>
  )
}

export default Test
