import React from 'react';
import Card from './card';
import './styles/grid.css';

export class NootropicLibrary extends React.Component {
    componentDidMount() {
        if(!this.props.selectable) {
            const searchTerms = this.props.nootropics.map(noop => noop.name);
            this.props.fetchNlmData(searchTerms);
        }
    }
    existsInTempStack = (code) => {
        if(this.props && this.props.selectedNoopCodes) {
            const exists = this.props.selectedNoopCodes.find( noopCode => noopCode === code)
            return exists
        } 
        return false
    }
    render() {
        if(!this.props.show) {
            return null
        }
        const nootropics = this.props.nootropics.map((nootropic, index) => (
            <Card 
              data={nootropic}
              type="nootropic"
              key={index}
              selectable={this.props.selectable}
              isSelected={this.existsInTempStack(nootropic.code)}
              onDeSelectNoop={this.props.deSelectNoop}
              onSelectNoop={this.props.selectNoop}
            />
          ));
        return (
            <div className="nootropics">
                <h3>Nootropic Library</h3><br/>
                <section className="grid">
                    {nootropics}
                </section>
            </div>
        );
    }
}

export default NootropicLibrary;