import React from 'react';
import Nootropic from './nootropic';
import Stack from './stack';
import './modal-content.css';

class ModalContent extends React.Component {

    render(props) {
        if(this.props.type === 'nootropic') {
            return (
                <div className="modal-content nootropic">
                    <Nootropic data={this.props.item}/>
                </div>
            )
        }
        else if (this.props.type === 'stack') {
            return (
                <div className="modal-content stack">
                    <Stack data={this.props.item}/>
                </div> 
            )
        }
    }
}
      
export default ModalContent;

