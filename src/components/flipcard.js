import React from 'react';
import ReactCardFlipper from 'react-card-flipper';
import Modal from 'react-responsive-modal';
import ModalContent from './modal-content';
import './flipcard.css';

class Card extends React.Component {
    state = {
        open: false,
    };
    onOpenModal = () => {
        this.setState({ open: true });
    }
    onCloseModal = () => {
        this.setState({ open: false });
    }

    render(props) {
        let name, code, item, type;
        if (this.props.type === 'nootropic') {
            code = this.props.nootropic.code;
            name = this.props.nootropic.name;
            item = this.props.nootropic
            type = 'nootropic'
        } else {
            code = this.props.stack.code;
            name = this.props.stack.name;
            item = this.props.stack;
            type = 'stack'
        }
        return (
            <ReactCardFlipper width="200px" height="200px" levitate={true} behavior="click">
                <div className="card-item front">
                    <h4>{name}</h4>
                </div>
                <div className="card-item back" type={this.props.type}>
                    <button onClick={() => this.onOpenModal()}>View More</button>
                    <button onClick={() => this.props.onSaveClick(this.props.type, code)}>Save</button>
                    <Modal
                        open={this.state.open}
                        onClose={this.onCloseModal}
                        center>
                    <ModalContent
                        saved={this.props.isSaved}
                        type={type}
                        item={item}>
                    </ModalContent>
                    </Modal>
                </div>
            </ReactCardFlipper>
        );  
      }
}

export default Card;

