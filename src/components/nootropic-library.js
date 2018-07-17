import React from 'react';
import Card from './card';
import { connect } from 'react-redux';
import './styles/grid.css';

export class NootropicLibrary extends React.Component {

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
              onSaveClick={(type, code) => this.clickSave(type, code)}
              selectable={this.props.selectable}
              onDeSelectNoop={this.props.deSelectNoop}
              onSelectNoop={this.props.selectNoop}/>
          ));
        return (
            <div className="nootropics">
                <header>
                    <h2>Nootropics</h2>
                </header>
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