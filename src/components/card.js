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

        let selectBtn, deselectBtn;
        if(this.props.selectable) {
            if(this.props.isSelected) {
                deselectBtn = <button
                className= "deselect-noop-btn btn-red" 
                onClick={() => this.props.onDeSelectNoop(code)}>
                deselect
            </button>
            } else {
                selectBtn = <button
                className="select-noop-btn btn-green" 
                onClick={() => this.props.onSelectNoop(code)}>
                select
                </button>
            }
        }
        return (
            <ReactCardFlipper width="200px" height="200px" levitate={true} behavior="click">
                <div className={this.props.isSelected ? 'card-item card-front selected-card': 'card-item card-front'}>
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
                            env={this.props.env}
                            saved={this.props.isSaved}
                            public={this.props.isPublic}
                            type={type}
                            data={data}
                            onDelete={this.props.onDelete}
                            onSave={this.props.onSave}
                        >
                        </ModalContent>
                    </Modal>
                </div>
            </ReactCardFlipper>
        );  
      }
}

export default Card;
