import React from "react";
import { sendMessageCreator, updateNewMessageCreator } from "../../redux/messagesPageReducer";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import classes from './Dialogs.module.css'
import Message from "./Message/Message";

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={state}/>
    )

}

export default DialogsContainer;
