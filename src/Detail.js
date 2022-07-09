import React from "react";
import {useHistory} from "react-router-dom";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { deleteBucket, updateBucket } from "./redux/module/bucket";

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

    <button onClick={()=> {dispatch(updateBucket(bucket_index))}}>완료하기</button>    

    <button onClick={()=> {dispatch(deleteBucket(bucket_index));
         history.goBack();}}>삭제하기</button>    
        </div>
    )
   
};






export default Detail;
