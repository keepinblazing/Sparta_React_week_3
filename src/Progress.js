import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
    const bucket_list = useSelector((state) => state.bucket.list)
    let count = 0;
    bucket_list.map((v, i) => {
        if(v.completed){
            count ++
        }

    })
    return(
        <ProgressBar>
            <HiLite width={(count/bucket_list.length)*100 + "%"}/>
            <Circle/>
        </ProgressBar>
    )
}



const ProgressBar = styled.div`
background : #eee;
width :100%;
height : 20px;
display : flex;
border-radius : 10px;
align-items : center;

`;

const HiLite = styled.div`
transition : 1s width;
background-color : black;
width : ${(props)=> props.width};
height : 20px;
border-radius 10px;

`;


const Circle = styled.div`
height : 30px;
width : 30px;
background : white;
border : 5px solid black;
border-radius : 50%;
margin : 0px 0px 0px -20px;

`;


export default Progress;

