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
        </ProgressBar>
    )
}



const ProgressBar = styled.div`
background : #eee;
width :100%;
height : 40px;




`;

const HiLite = styled.div`
transition : 1s width;
background-color : orange;
width : ${(props)=> props.width};
height : 40px;

`;


export default Progress;

