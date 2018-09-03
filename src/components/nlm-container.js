import React from 'react';
import NLMAbstract from './nlm-abstract';
import './styles/nlm.css';

export class NLMContainer extends React.Component {

    render() {
        console.log(this)
        let abstracts;
        if(!this.props.data.nootropics) {
            return null
        } else {
            abstracts = this.props.data.nootropics.find(noop => Object.keys(noop)[0] === this.props.name)
            if(!abstracts) {
                return null
            }
        }

        return (
            <div className="nlm-container">
                <h2>Science</h2><br/>
                <ul>
                    {abstracts[this.props.name].map( (element, index) => 
                        <li key={index}>
                            <div className="nlm-cover">
                                <span className="nlm-cover-text"><span className="italic">[{element.pubYear}] </span>{element.abstractTitle._text}</span>
                                <NLMAbstract
                                    data={element}
                                    index
                                />
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }

}
      
export default NLMContainer;
