import React from 'react';
import Nootropic from './nootropic';
import Stack from './stack';

import './styles/modal-content.css';

export function ModalContent(props) {
    if(props.type === 'nootropic') {
        return (
            <div className="modal-content">
                <Nootropic 
                    data={props.data}
                    exit={props.onExit}
                    selectable={props.selectable}
                    isSelected={props.isSelected}
                    onSelectNoop={props.onSelectNoop}
                    onDeSelectNoop={props.onDeSelectNoop}
                    closeModal={props.closeModal}
                />
            </div>
        )
    }
    else if(props.type === 'stack') {
        return (
            <div className="modal-content">
                <Stack
                    env={props.env}
                    data={props.data}
                    saved={props.saved}
                    public={props.public}
                    exit={props.onExit}
                    closeModal={props.closeModal}
                />
            </div>
        )
    } else if(props.type === 'stackBuilder') {
        return (
            <div className="modal-content stackBuilder">
                {props.stackBuilder}
                <div className="modal-btn-container">
                    <button onClick={() => props.closeModal()} className="modal-close btn-gray">Close</button>
                </div>
            </div> 
        )
    } else if(props.type === 'nootropicLibrary') {
        return (
            <div className="modal-content">
                {props.nootropicLibrary}
                <div className="modal-btn-container">
                    <button onClick={() => props.closeModal()} className="modal-close btn-gray">Close</button>
                </div>
            </div> 
        )
    } else if(props.type === 'trendingStacks') {
        return (
            <div className="modal-content">
                {props.trendingStacks}
                <div className="modal-btn-container">
                    <button onClick={() => props.closeModal()} className="modal-close btn-gray">Close</button>
                </div>
            </div> 
        )
    } else if(props.type === 'savedStacks') {
        return (
            <div className="modal-content">
                {props.savedStacks}
                <div className="modal-btn-container">
                    <button onClick={() => props.closeModal()} className="modal-close btn-gray">Close</button>
                </div>
            </div> 
        )
    }
}
      
export default ModalContent;

