import React, {useState} from 'react';
import s from './Modal.module.css';
import ModalChild from "./ModalChild";
import {connect} from "react-redux";
import {modalDisplayAC, changeModalSuccess} from "./ModalReducer";
import QuestionModal from "./questionModal";
import InputModal from "./inputModal";
import MessageModal from "./MessageModal";

type mstpType = {
    isModal: boolean,
    modal: string
}
type mdtpType = {
    modalDisplayAC: (isModal: boolean) => void
    changeModalSuccess: (modal: string) => void
}
type propsType = mstpType & mdtpType


class Modal extends React.Component<propsType> {
    state = {
        answer: 'yes',
        value: 'something'
    };

    showModal = (modal: string) => {
        this.props.modalDisplayAC(true)
        this.props.changeModalSuccess(modal)
    };
    showMovingModal = (modal: string) => {
        this.props.modalDisplayAC(false)
        this.props.changeModalSuccess(modal)
    };
    changeAnswer = (answer: string) => {
        this.setState({answer: answer})
    };
    changeValue = (value: string) => {
        this.setState({value})
    };


    render() {
        let forSimple = this.props.modal === "simple";
        let forQuestion = this.props.modal === "question";
        let forInput = this.props.modal === "input";


        let forMessage = this.props.modal === "message" ? "module-active" : "";
        let forSuccess = this.props.modal === "success";
        let forError = this.props.modal === "error";
        return (
            <div className={s.modal}>
                {!this.props.isModal ?
                    <div className={s.buttonBox}>
                        <button onClick={() => {this.showModal("simple")}}
                                >show simple Modal</button>
                        <div><button onClick={() => {this.showModal("question")}}
                                >show question Modal</button>
                        <span>{this.state.answer}</span></div>
                       <div><button onClick={() => {this.showModal('input')}}
                                >show input Modal</button>
                        <span>{this.state.value}</span></div>

                        <button onClick={() => {this.showMovingModal('message')}}
                        >show message Modal</button>
                       <div> <button onClick={() => {this.showModal('success')}}
                                >add success</button>
                        <button onClick={() => {this.showModal('error')}}
                                >add error</button></div>
                    </div>

                    : forSimple ?
                        <ModalChild content={'simple modal'}
                                    modalDisplayAC={this.props.modalDisplayAC}/>
                        : forQuestion ? <QuestionModal changeAnswer={this.changeAnswer}
                                                       modalDisplayAC={this.props.modalDisplayAC}/>
                            : forInput ?
                                <InputModal changeValue={this.changeValue}
                                            modalDisplayAC={this.props.modalDisplayAC}/>
                                : ''
                }
                {!this.props.isModal && forMessage ?
                    <MessageModal className={s.forMessage}/>

                    : ''
                }
            </div>
        );
    }

}


const mstp = (state: any): mstpType => ({
    isModal: state.modal.isModal,
    modal: state.modal.modal
})
export default connect(mstp, {modalDisplayAC, changeModalSuccess})(Modal);
