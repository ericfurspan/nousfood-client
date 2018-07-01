import React from 'react';
import Card from './flipcard';

export class TrendingStacks extends React.Component {
    render() {
        const trendingStacks = this.props.trendingStacks.map((trendingStack, index) => (
            <Card 
            stack={trendingStack}
            type="stack"
            key={index}
            />
        ))
        return (
            <div className="trending-stacks">
                <header>
                    <h2>Trending Stacks</h2>
                </header>
                <section className="grid">
                    {trendingStacks}
                </section>
            </div>
        );
    }
}

export default TrendingStacks;
