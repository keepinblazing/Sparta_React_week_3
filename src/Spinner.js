import React from "react";
import styled from "styled-components";
import {Eco} from "@material-ui/icons"

const Spinner = (props) => {


    return(
       (<Outter><Eco style = {{color : "white", fontSize : "150px"}}/></Outter>)


    )

};

const Outter = styled.div`

background-color : gray;
width : 100vw;
height : 100vh;
position: fixed;
top : 0;
left : 0;
display : flex;
align-items : center;
justify-content : center;



`;



export default Spinner