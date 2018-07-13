import React from 'react';
import { connect } from 'react-redux';
import Card from './card';
import { Redirect } from 'react-router-dom';

export class TrendingStacks extends React.Component {
    
    saveStack(code) {
        console.log(`saving ${code}`)
        // dispatch action to save stack to user
    }
    render() {
        const stack = this.props.stackLibrary.map( (stack, index) => {
            return (
                <Card
                  data={stack}
                  type="stack"
                  key={index}
                  onSave={(code) => {this.saveStack(code)}}                  
                />
            )
        })
        return (
            <div className="trending-stacks">
                <header>
                    <h2>Trending Stacks</h2>
                </header>
                <section className="grid">
                    {stack}
                </section>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    stackLibrary: state.global.stackLibrary
});

export default connect(mapStateToProps)(TrendingStacks);
