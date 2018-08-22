import React from 'react';
import Tooltip from './tooltip';

class Nootropic extends React.Component {
    deSelectNoop = (code) => {
        this.props.onDeSelectNoop(this.props.data.code)
        this.props.exit()
    }
    selectNoop = (code) => {
        this.props.onSelectNoop(this.props.data.code)
        this.props.exit()
    }
    render() {
        let selectBtn, deselectBtn, followButton;
        if(this.props.selectable) {
            if(this.props.isSelected) {
                deselectBtn = <div onClick={() => this.deSelectNoop(this.props.data.code)} className="pointer red-hover"><i className="material-icons noop-select">remove_circle_outline</i><span>Remove</span></div>   
            } else {
                selectBtn = <div onClick={() => this.selectNoop(this.props.data.code)} className="pointer green-hover"><i className="material-icons noop-select">add_circle_outline</i><span>Add</span></div>   
            }
        } else {
            followButton = <div className="pointer gold-hover"><i className="material-icons">star</i><span>Follow</span></div>   
        }

        return (
            <div className="nootropic align-left">
                <div className="how-to-take">
                    <h5>How to take:</h5>
                    <p>{this.props.data.how_to_take}</p>
                </div><br/>
                <div className="supports">
                    <h5>Supports:</h5>
                    <ul>
                        {this.props.data.supports.map( (element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div><br/>
                <div className="notes">
                    <h5>Notes:</h5>
                    <ul>
                        {this.props.data.notes.map( (element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div>
                <div className="modal-btn-container">
                    {followButton}
                    <Tooltip message={'Add'} position={'top'}>{selectBtn}</Tooltip>
                    {deselectBtn}
                </div>
            </div>
        )
    }
}
      
export default Nootropic;

