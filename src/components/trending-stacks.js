import React from 'react';
import Card from './card';


export class TrendingStacks extends React.Component {
    isSaved = (code) => {
        const isSaved = this.props.savedStacks.find( stack => stack.code === code);
        return isSaved ? true : false
    }
    render() {
        if(this.props.hidden) {
            return null
        }
        let stack;
        if(!this.props.savedStacks) {
            stack = this.props.stackLibrary.map( (stack, index) => {
                return (
                    <Card
                      env="global"
                      isPublic={true}
                      isSaved={false}
                      data={stack}
                      type="stack"
                      feedback={this.props.feedback}
                      key={index}
                    />
                )
            })
        } else {
            stack = this.props.stackLibrary.map( (stack, index) => {
                return (
                    <Card
                      env="global"
                      isPublic={true}
                      isSaved={this.isSaved(stack.code)}
                      data={stack}
                      type="stack"
                      feedback={this.props.feedback}
                      key={index}
                    />
                )
            })
        }
        return (
            <div className="trending-stacks">
                <section className="grid">
                    {stack}
                </section>
            </div>
        );
    }
}

export default TrendingStacks;
