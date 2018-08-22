import React from 'react';
import Modal from 'react-responsive-modal';
import ModalContent from './modal-content';
import './styles/card.css';

class Card extends React.Component {
    state = {
        open: false
    };
    onOpenModal = () => {
        this.setState({ open: true });
    }
    onCloseModal = () => {
        this.setState({ open: false });
    }
    
    render() {
        let name, code, data, type;
        if (this.props.type === 'nootropic') {
            code = this.props.data.code;
            name = this.props.data.name;
            data = this.props.data;
            type = 'nootropic';

        } else if (this.props.type === 'stack') {
            code = this.props.data.code;
            name = this.props.data.name;
            data = this.props.data;
            type = 'stack';
        }

        return (
            <div>
                <div 
                    type={this.props.type}
                    className={this.props.isSelected ? `card-item light border selected-card` : `card-item light-border`}
                    onClick={() => this.onOpenModal()}
                >
                    <h4>{name}</h4>
                </div>
                <Modal
                    open={this.state.open}
                    onClose={this.onCloseModal}
                    center>
                    <div className="modal-header">{name}<i className="material-icons white right" onClick={() => this.onCloseModal()}>cancel</i></div>
                    <ModalContent
                        env={this.props.env}
                        saved={this.props.isSaved}
                        public={this.props.isPublic}
                        type={type}
                        data={data}
                        onDelete={this.props.onDelete}
                        onSave={this.props.onSave}
                        onExit={this.onCloseModal}
                        selectable={this.props.selectable}
                        isSelected={this.props.isSelected}
                        onSelectNoop={this.props.onSelectNoop}
                        onDeSelectNoop={this.props.onDeSelectNoop}
                        closeModal={this.onCloseModal}
                    >
                    </ModalContent>
                </Modal>
            </div>
        );  
      }
}

export default Card;
