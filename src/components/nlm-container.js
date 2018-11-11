import React from 'react';
import NLMAbstract from './nlm-abstract';
import Spinner from '../assets/images/spinner.gif';
import './styles/nlm.css';

export class NLMContainer extends React.Component {

    render() {
        let abstracts;
        if(!this.props.data.nootropics) {
            return <img src={Spinner} id="spinner" alt="spinner"/>

        } else {
            abstracts = this.props.data.nootropics.find(noop => Object.keys(noop)[0] === this.props.name)
            if(!abstracts) {
                return null
            }
        }

        return (
            <div className="nlm-container">
                <h2>Scientific articles (PubMed)</h2><br/>
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
