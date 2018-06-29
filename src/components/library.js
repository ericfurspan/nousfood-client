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
              type="noop"
              key={index} 
              onSaveClick={(type, code) => this.clickSave(type, code)}/>
          ));

        const stacks = StackInfo.map((stack, index) => (
            <Card 
              stack={stack}
              type="stack"
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
                <section className="grid">
                    <header>
                        <h2>Trending Stacks</h2>
                    </header>
                    {stacks}
                </section>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    savedNootropics: state.user_data.user.saved.nootropics,
    savedStacks: state.user_data.user.saved.stacks,
});

export default connect(mapStateToProps)(Library);