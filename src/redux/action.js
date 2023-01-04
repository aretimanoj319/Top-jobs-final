import axios from "axios";

export const loadUsers = () => {
    return function(dispatch){
        axios.get('http://localhost:3001/user').then(res => {
            dispatch({
                type: 'GET_USERS',
                payload: res.data
            });
        })
        .catch(error => console.log(error));
    }
}

// export const applyJobs = (info) => {
//     return function(dispatch){
//         axios.post('http://localhost:3001/applied',info).then(res => {
//             dispatch({
//             type: 'POST_USERS',
//             payload: res.data
//         })
//         })
//         .catch(error => console.log(error));
//     }
// }
