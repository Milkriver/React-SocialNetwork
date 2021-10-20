const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // { id: 1, photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlB86wImVyNi1rj5SAKuoYl8Mj3TUltjXtGA=s900-c-k-c0xffffffff-no-rj-mo', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlB86wImVyNi1rj5SAKuoYl8Mj3TUltjXtGA=s900-c-k-c0xffffffff-no-rj-mo', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 3, photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlB86wImVyNi1rj5SAKuoYl8Mj3TUltjXtGA=s900-c-k-c0xffffffff-no-rj-mo', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
        // { id: 4, photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlB86wImVyNi1rj5SAKuoYl8Mj3TUltjXtGA=s900-c-k-c0xffffffff-no-rj-mo', followed: false, fullName: 'Antonie', status: 'Big Deal', location: { city: 'Saint-Petersburg', country: 'Russia' } },
        // { id: 5, photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlB86wImVyNi1rj5SAKuoYl8Mj3TUltjXtGA=s900-c-k-c0xffffffff-no-rj-mo', followed: true, fullName: 'Sofie', status: 'Happiness', location: { city: 'Vladivostok', country: 'Russia' } },
    ],
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] };
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default UsersReducer;
