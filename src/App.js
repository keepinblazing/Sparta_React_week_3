import React from "react";
import BucketList from "./BucketList";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import NotFound from "./Notfound";
import { useDispatch, useSelector} from "react-redux";
import { createBucket, loadBucketFB, addBucketFB} from "./redux/module/bucket";
import Progress from "./Progress";
import {db} from "./firebase";
import {collection, getDoc, getDocs, addDoc, updateDoc} from 'firebase/firestore';
import { async } from "@firebase/util";
import Spinner from "./Spinner";




function App() {
  const text = React.useRef(null);
  const dispatch = useDispatch();
  const is_loaded = useSelector(state => state.bucket.is_loaded);

  React.useEffect( () => {
    dispatch(loadBucketFB());
  }, []);

  const addBucketList = () => {   
    dispatch(addBucketFB({ text: text.current.value, completed: false }));
  };
  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress />
        <Line />
        <Switch>
          <Route path="/" exact>
            <BucketList/>
          </Route>
          <Route path="/detail/:index">
            <Detail />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
      {!is_loaded && <Spinner />}
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
