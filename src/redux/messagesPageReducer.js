const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};


const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default: return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageCreator = (body) => (
    {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    })

export default messagesPageReducer;
