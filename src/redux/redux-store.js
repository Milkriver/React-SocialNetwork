import { combineReducers, createStore } from "redux";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: UsersReducer,
});

let store = createStore(reducers);

export default store;
