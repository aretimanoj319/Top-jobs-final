
const initialState = {
    users: [],
    user: {},
    loading: false
};

const usersReducers = (state = initialState,action) => {
switch(action.type){
    case "GET_USERS":
        return {
            ...state,
            users: action.payload,
            loading: false
        }
        case "POST_USERS":
            return {
                ...state,
                users: action.payload,
                loading: false
            }
    default:
        return state;
}
}
export default usersReducers;