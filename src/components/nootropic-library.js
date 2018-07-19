import React from 'react';
import Card from './card';
import { connect } from 'react-redux';
import './styles/grid.css';

export class NootropicLibrary extends React.Component {
    existsInTempStack = (code) => {
        if(this.props && this.props.selectedNoopCodes) {
            const exists = this.props.selectedNoopCodes.find( noopCode => noopCode === code)
            return exists
        } 
        return false
    }
    clickSave(type, code) {
        // dispatch clickSave action 
        console.log(`clicked save ${type} ${code}`);
    }
    render() {
        const nootropics = this.props.nootropicLibrary.map((nootropic, index) => (
            <Card 
              data={nootropic}
              type="nootropic"
              key={index}
              selectable={this.props.selectable}
              isSelected={this.existsInTempStack(nootropic.code)}
              onSaveClick={(type, code) => this.clickSave(type, code)}
              onDeSelectNoop={this.props.deSelectNoop}
              onSelectNoop={this.props.selectNoop}
            />
          ));
        return (
            <div className="nootropics">
                <section className="grid">
                    {nootropics}
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    nootropicLibrary: state.global.nootropicLibrary
});

export default connect(mapStateToProps)(NootropicLibrary);