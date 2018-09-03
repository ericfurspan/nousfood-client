import React from 'react';
import Modal from './modal';
import ModalContainer from './modal-container';

import './styles/nlm.css';

export class NLMAbstract extends React.Component {
    state = {
        show: false
    }
    toggleAbstract = () => {
        this.setState({show: !this.state.show})
    }
    render() {
        let toggleVisbilityBtn;

        if(!this.state.show) {
            toggleVisbilityBtn = <div onClick={() => this.toggleAbstract()} className="view-abstract"><i className="material-icons blue-hover">zoom_in</i></div>
        }
        return (
            <div className="nlm-abstract">
                {toggleVisbilityBtn}
                <Modal
                    show={this.state.show}
                >
                    <ModalContainer 
                        header={<div className="modal-header"><i className="material-icons white right" onClick={() => this.toggleAbstract()}>cancel</i></div>}
                        type="nlmAbstract"
                        data={this.props.data}
                        closeModal={() => this.toggleAbstract()}
                    />
                </Modal>
            </div>
        )
    } 
}
      
export default NLMAbstract;
