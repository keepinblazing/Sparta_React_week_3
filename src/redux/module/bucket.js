// bucket.js

// Actions
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';
const UPDATE = 'bucket/UPDATE';

const initialState = {
    list : [{text: "영화관 가기", completed: false},
            {text: "매일 책읽기", completed: false},
            {text: "수영 배우기", completed: false},
            {text: "코딩하기", completed: false},
    ],

};

// Action Creators
export function createBucket(bucket){

    return {type : CREATE, bucket};

}

export function deleteBucket(bucket_index){

  return {type : DELETE, bucket_index};

}

export function updateBucket(bucket_index){

  return {type : UPDATE, bucket_index};

}



// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "bucket/CREATE" : {
            const new_bucket_list = [...state.list, action.bucket];
            return {

                list : new_bucket_list

            };
        };
        case "bucket/DELETE" : {
            const new_bucket_list = state.list.filter((l, idx) => {
                return parseInt(action.bucket_index) !== idx;
            })
            return {list : new_bucket_list};

        }
        
        case "bucket/UPDATE" : {
            const new_bucket_list = state.list.map((v, i) => {
                if(parseInt(action.bucket_index) === i){
                    return {...v, completed: true};
                }else{
                    return v;
                }

            })
            return {list : new_bucket_list}


        }
        

    default: return state;
    }
}