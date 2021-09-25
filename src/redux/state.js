import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesNumber: 2 },
                { id: 2, message: 'Its my first post', likesNumber: 4 },
                { id: 3, message: 'Great news!', likesNumber: 8 }
            ],
            newPostText: ''
        },

        messagesPage: {
            dialogs: [
                { id: 1, name: 'Marina' },
                { id: 2, name: 'Antosha' },
                { id: 3, name: 'Jenya' },
                { id: 4, name: 'Katya' },
                { id: 5, name: 'Igor' }
            ],
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How is your IT-kamasutra?' },
                { id: 3, message: 'Yo!' },
                { id: 4, message: 'Wow)' },
                { id: 5, message: 'I have great news)' },
            ],
            newMessageBody: "",
        },

        sidebar: {
            friends: [
                { id: 1, name: 'Marina', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg' },
                { id: 2, name: 'Sveta', avatar: 'https://i.pinimg.com/originals/c6/62/e5/c662e5cffc1754902f414a8593673c15.jpg' },
                { id: 3, name: 'Irina', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg' },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageCreator = (body) => (
    {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    })
window.store = store;
export default store;

