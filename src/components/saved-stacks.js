import React from 'react';
import Card from './flipcard';

export class SavedStacks extends React.Component {
    render() {
        const savedStacks = this.props.savedStacks.map((savedStack, index) => (
            <Card 
            stack={savedStack}
            type="stack"
            key={index}
            />
        ))
        return (
            <div className="saved-stacks">
                <header>
                    <h2>Saved Stacks</h2>
                </header>
                <section className="grid">
                    {savedStacks}
                </section>
            </div>
        );
    }
}

export default SavedStacks;
