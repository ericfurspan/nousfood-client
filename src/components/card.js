import React from 'react';
import ReactCardFlipper from 'react-card-flipper';
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
        const { isSaved, selectable, selected } = this.props;
        let selectBtn, deselectBtn;
        if(selectable) {
            if(selected) {
                deselectBtn = <button
                className="deselect-noop-btn" 
                onClick={() => this.props.onDeSelectNoop(code)}>
                remove from stack
            </button>
            } else {
                selectBtn = <button
                className="select-noop-btn" 
                onClick={() => this.props.onSelectNoop(code)}>
                add to stack
              </button>
            }
        }
        let name, code, data, type, saveable;
        if (this.props.type === 'nootropic') {
            code = this.props.data.code;
            name = this.props.data.name;
            data = this.props.data;
            type = 'nootropic';
        } else {
            code = this.props.data.code;
            name = this.props.data.name;
            data = this.props.data;
            type = 'stack';
        }
        return (
            <ReactCardFlipper width="200px" height="200px" levitate={true} behavior="click">
                <div className="card-item card-front">
                    <h4>{name}</h4>
                </div>
                <div className="card-item card-back" type={this.props.type}>
                    <button className="view-noop-btn" onClick={() => this.onOpenModal()}>view more</button>
                    {selectBtn}{deselectBtn}        
                    <Modal
                        open={this.state.open}
                        onClose={this.onCloseModal}
                        center>
                        <ModalContent
                            saved={this.props.isSaved}
                            type={type}
                            data={data}
                            onDelete={this.props.onDelete}
                            onSave={this.props.onSave}>
                        </ModalContent>
                    </Modal>
                </div>
            </ReactCardFlipper>
        );  
      }
}

export default Card;
