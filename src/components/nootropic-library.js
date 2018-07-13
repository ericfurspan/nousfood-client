import React from 'react';
import { NootropicInfo } from '../assets/data/nootropic-info';
import NavBar from './navbar';
import Card from './card';
import './styles/grid.css';

export class Library extends React.Component {

    clickSave(type, code) {
        // dispatch clickSave action 
        console.log(`clicked save ${type} ${code}`);
    }
    render() {
        console.log(this.props)
        const nootropics = NootropicInfo.map((nootropic, index) => (
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

export default Library;