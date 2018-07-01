import React from 'react';
import { connect } from 'react-redux';
import './grid.css';
import './library.css';
import { Footer } from './footer';
import { NootropicInfo } from '../assets/data/nootropic-info';
import { StackInfo } from '../assets/data/stack-info';
import Card from './flipcard';

export class Library extends React.Component {

    clickSave(type, code) {
        // dispatch clickSave action 
        console.log(`clicked save ${type} ${code}`);
    }
    render(props) {
        const nootropics = NootropicInfo.map((nootropic, index) => (
            <Card 
              nootropic={nootropic}
              type="nootropic"
              key={index}
              onSaveClick={(type, code) => this.clickSave(type, code)}/>
          ));
        return (
            <div className="library">
                <section className="grid">
                    <header>
                        <h2>Nootropics</h2>
                    </header>
                    {nootropics}
                </section>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Library);