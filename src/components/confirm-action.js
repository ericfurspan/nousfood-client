
import React from 'react';
import Modal from 'react-responsive-modal';

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
                    open={this.state.open}
                    onClose={() => {}}
                    center>
                    <div className="modal-header">Confirm<i className="material-icons white right" onClick={() => this.toggleOpen(false)}>cancel</i></div>
                    <div className="confirm-dialog">
                        <p>Are you sure?</p>
                        <button onClick={() => this.props.confirmTrue()}>Yes</button>
                        <button onClick={() => this.toggleOpen(false)}>No</button>
                    </div>
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