const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users: [
        { id: 1, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
        { id: 2, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'} },
        { id: 3, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'} },
    ],
    newPostText: ''
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}


export default UsersReducer;
