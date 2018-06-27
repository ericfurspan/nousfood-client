import React from 'react';
import './grid.css';
import './library.css';
import { Footer } from './footer';
import { NootropicInfo } from '../assets/data/nootropic-info';
import { StackInfo } from '../assets/data/stack-info';

export class Library extends React.Component {

    render(props) {
        const nootropics = NootropicInfo.map((nootropic, index) => (
            <div key={index} className="lib-item nootropic">
              <h3>{nootropic.name}</h3>
            </div>
          ));
          const stacks = StackInfo.map((stack, index) => (
            <div key={index} className="lib-item stack">
              <h3>{stack.name}</h3>
            </div>
          ));
        return (
            <div className="library">
                <section className="grid">
                    <header>
                        <h2>Popular Nootropics</h2>
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

export default Library;
