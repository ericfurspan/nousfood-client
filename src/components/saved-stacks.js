import React from 'react';

export class SavedStacks extends React.Component {
    render() {
        const savedStacks = this.props.savedStacks.map((savedStack, index) => (
            <div className="user-stack" key={index}>
                <h3>{savedStack.title}</h3>
            </div>
        ))
        return (
            <div className="saved-stacks">
                <section className="grid">
                    <header>
                        <h2>stacks</h2>
                    </header>
                    <img src="../assets/images/glyphicons-433-plus.png"/>
                    {savedStacks}
                </section>
            </div>
        );
    }
}

export default SavedStacks;
