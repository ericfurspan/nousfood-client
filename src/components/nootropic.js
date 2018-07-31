import React from 'react';

class Nootropic extends React.Component {

    render() {
        return (
            <div className="nootropic">
                <h3>{this.props.data.name}</h3><br/>
                <div className="how-to-take">
                    <h5>How to take:</h5>
                    <p>{this.props.data.how_to_take}</p>
                </div>
                <div className="supports">
                    <h5>Supports:</h5>
                    <ul>
                        {this.props.data.supports.map( (element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div>
                <div className="notes">
                    <h5>Notes:</h5>
                    <ul>
                        {this.props.data.notes.map( (element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div>
                <div className="modal-btn-container">
                    <div className="follow-noop">
                        <button className="btn-blue">Follow Nootropic</button><i>(coming soon)</i>
                    </div>
                </div>
            </div>
        )
    }
}
      
export default Nootropic;

