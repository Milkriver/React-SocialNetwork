import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesNumber: 2 },
            { id: 2, message: 'Its my first post', likesNumber: 4 }
        ],
        newPostText: 'it-kamasutra.com'
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
        ]
    },

    sidebar: {
        friends: [
            { id: 1, name: 'Marina', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg' },
            { id: 2, name: 'Sveta', avatar: 'https://i.pinimg.com/originals/c6/62/e5/c662e5cffc1754902f414a8593673c15.jpg' },
            { id: 3, name: 'Irina', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg' },
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesNumber: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;