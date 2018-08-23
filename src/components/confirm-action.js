
import React from 'react';
import Modal from './modal';
import ModalContainer from './modal-container';

class ConfirmAction extends React.Component {
    state = {
        open: false
    }
    toggleOpen = (open = !this.state.open) => {
        this.setState({open: open})
    }
    render() {
        let modal;
        
        if(this.state.open) {
            modal = <Modal 
            show={this.state.open} 
            modalLevel="3"
          >
            <ModalContainer
                header={<div className="modal-header br-red">Confirm<i className="material-icons white right" onClick={() => this.toggleOpen(false)}>cancel</i></div>}
                type="confirmAction"
                confirmTrue={this.props.confirmTrue}
                confirmFalse={() => this.toggleOpen(false)}
            />
          </Modal>
        }
        return (
            <div>
                <div onClick={() => this.toggleOpen(true)}>
                    {this.props.children}
                </div>
                {modal}
            </div>
        )
    }
}

export default ConfirmAction;