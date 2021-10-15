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
    let stateCopy;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            stateCopy = {
                ...state,
                newMessageBody: action.body,
            };
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };
            return stateCopy;
        }
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
