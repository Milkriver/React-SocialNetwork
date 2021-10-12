import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageCreator } from "../../redux/messagesPageReducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageCreator(body));
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
