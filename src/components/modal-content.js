import React from 'react';
import Nootropic from './nootropic';
import Stack from './stack';
import './styles/modal-content.css';

export function ModalContent(props) {
    if(props.type === 'nootropic') {
        return (
            <div className="modal-content nootropic">
                <Nootropic 
                    data={props.data}
                    exit={props.onExit}
                    selectable={props.selectable}
                    isSelected={props.isSelected}
                    onSelectNoop={props.onSelectNoop}
                    onDeSelectNoop={props.onDeSelectNoop}
                />
            </div>
        )
    }
    else if (props.type === 'stack') {
        return (
            <div className="modal-content stack">
                <Stack
                    env={props.env}
                    data={props.data}
                    saved={props.saved}
                    public={props.public}
                    exit={props.onExit}
                />
            </div> 
        )
    }
}
      
export default ModalContent;

