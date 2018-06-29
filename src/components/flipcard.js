import React from 'react';
import ReactCardFlipper from 'react-card-flipper';
import './flipcard.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSaved: false
        }
    }
    render(props) {
        console.log(this.props)
        let name, code;
        if(this.props.type === 'noop') {
            code = this.props.nootropic.code;
            name = this.props.nootropic.name;
        } else {
            code = this.props.stack.code;
            name = this.props.stack.name;
        }
        return (
            <ReactCardFlipper width="200px" height="200px" levitate={true} behavior="click">
                <div className="card-item front">
                    <h3>{name}</h3>
                </div>
                <div className="card-item back" type={this.props.type}>
                    <button onClick={() => this.props.onSaveClick(this.props.type, code)}>Save</button>
                </div>
            </ReactCardFlipper>
        );  
      }
}

export default Card;

