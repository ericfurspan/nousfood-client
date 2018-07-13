import React from 'react';
import Nootropic from './nootropic';
import Stack from './stack';
import './styles/modal-content.css';

class ModalContent extends React.Component {

    render(props) {
        if(this.props.type === 'nootropic') {
            return (
                <div className="modal-content nootropic">
                    <Nootropic data={this.props.data}/>
                </div>
            )
        }
        else if (this.props.type === 'stack') {
            return (
                <div className="modal-content stack">
                    <Stack 
                      data={this.props.data}
                      saved={this.props.saved}
                      onDelete={this.props.onDelete}
                      onSave={this.props.onSave}
                    />
                </div> 
            )
        }
    }
}
      
export default ModalContent;

