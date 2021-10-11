import React from "react";
import { sendMessageCreator, updateNewMessageCreator } from "../../redux/messagesPageReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageCreator(body))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={store.getState().messagesPage} />
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;
