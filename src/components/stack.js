import React from 'react';

class Stack extends React.Component {

    render() {
        return (
            <div className="stack">
                <h3>{this.props.data.name}</h3><br/>
                <div className="stack-contents">
                    <h5>Contents:</h5>
                    <ul>
                        {this.props.data.contents.map( (element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div>                 
            </div>
        )
    }
}
      
export default Stack;

