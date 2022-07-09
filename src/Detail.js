import React from "react";
import {useHistory} from "react-router-dom";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { deleteBucket, updateBucket } from "./redux/module/bucket";
import Button from "@material-ui/core/Button";

const Detail = (props) => {
    const params = useParams();
    const bucket_index = params.index;
    const index = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const bucket_list = useSelector((state) => state.bucket.list);
    
    console.log(bucket_index);
    return (
        <div>
    <h1>{bucket_list[bucket_index].text}</h1>

    <Button variant = "outlined" onClick={()=> {dispatch(updateBucket(bucket_index))}}>완료하기</Button>    

    <Button variant = "outlined" onClick={()=> {dispatch(deleteBucket(bucket_index));
         history.goBack();}}>삭제하기</Button>    
        </div>
    )
   
};






export default Detail;
