import React from 'react';
import Card from './card';

export class SavedStacks extends React.Component {
    isPublic = (code) => {
        const isPublic = this.props.trendingStacks.find( stack => stack.code === code);
        return isPublic ? true : false
    }
    render() {
        if(this.props.hidden) {
            return null
        }
        if(!this.props.savedStacks) {
            return <p>You have no saved stacks</p>
        }
        const savedStacks = this.props.savedStacks.map((savedStack, index) => (
            <Card
                env="user"
                type="stack"
                data={savedStack}
                key={index}
                saveable={true}
                isPublic={this.isPublic(savedStack.code)}
                isSaved={true}
            />
        ))
        return (
            <div className="saved-stacks">
                <section className="grid">
                    {savedStacks}
                </section>
            </div>
        );
    }
}

export default SavedStacks;
