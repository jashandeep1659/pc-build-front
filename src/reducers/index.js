import { combineReducers } from "redux";

const UserStatusProvider = (state = false, action) => {
    switch (action.type) {
        case "UserLoginChecker":
            return (state = action.payload);
        default:
            return state;
    }
};

export default combineReducers({
    dummyData: () => 1,
    UserStatusProvider,
});
