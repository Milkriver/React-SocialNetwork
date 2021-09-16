import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messageElements = props.state.messages.map(message => <Message id={message.id} message={message.message} />)
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={newMessageElement} cols="30" rows="5"></textarea>
                <button onClick={addMessage}>Отправить сообщение</button>

            </div>

        </div>
    )

}

export default Dialogs;