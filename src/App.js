import React from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import NotFound from "./Notfound";
import { useDispatch } from "react-redux";
import { createBucket, deleteBucket } from "./redux/module/bucket";
import Progress from "./Progress";

function App() {

  const [list, setList] = React.useState([
    "영화관 가기",
    "매일 책읽기",
    "수영 배우기",
  ]);
  const text = React.useRef(null);
  const dispatch = useDispatch();

  const addBucketList = () => {
    // 스프레드 문법! 기억하고 계신가요? :)
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    //setList([...list, text.current.value]);
    dispatch(createBucket({text: text.current.value, completed: false}));
  };



  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress/>
        <Line />
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <Switch>
          <Route path="/" exact>
            <BucketList list={list} />
          </Route>
          <Route path="/detail/:index">
            <Detail/>         
         </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
        <button onClick={()=> {window.scrollTo({top:0, left:0, behavior:"smooth"})}}>위로가기</button>
      </Container>
      {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
        
      </Input>
     
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid black;
  display : flex;

  & > *{

    padding : 5px;
  }

  & input {
    border : 1px solid #888;
    width : 70%;
    margin-right : 10px;
  }
  
  & input:focus {

    outline : none;
    border : 2px solid black;


  }

  & button {
    
    width : 30%;
   
    color : white;
    border : black;
    background : black;


  }

`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid black;

  & button {
   
    width : 30%;
    height: 30%;
    color : white;
    border : black;
    background : black;



  }
`;

const Title = styled.h1`
  color: black;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted black;
`;

export default App;
