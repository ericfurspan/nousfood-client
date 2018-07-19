import React from 'react';
import { connect } from 'react-redux';
import Card from './card';

// RENAME TO POPULAR STACKS

export class TrendingStacks extends React.Component {
    isSaved = (code) => {
        const isSaved = this.props.savedStacks.find( stack => stack.code === code);
        return isSaved ? true : false
    }
    render() {
        console.log(this.props)
        const stack = this.props.stackLibrary.map( (stack, index) => {
            return (
                <Card
                  isSaved={this.isSaved(stack.code)}
                  data={stack}
                  type="stack"
                  feedback={this.props.feedback}
                  key={index}
                />
            )
        })
        return (
            <div className="trending-stacks">
                <header>
                    <h2>Popular Stacks</h2>
                </header>
                <section className="grid">
                    {stack}
                </section>
            </div>
        );
    }
}

export default TrendingStacks;
