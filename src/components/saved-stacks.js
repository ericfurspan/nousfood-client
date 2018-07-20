import React from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import Card from './card';

export class SavedStacks extends React.Component {

    render() {
        console.log(this.props)
        if (!this.props.loggedIn) { // flip this bool after adding auth
            //return <Redirect to="/login" />;
        }
        const savedStacks = this.props.savedStacks.map((savedStack, index) => (
            <Card
                type="stack"
                data={savedStack}
                key={index}
                saveable={true}
                isSaved={true}
            />
        ))
        return (
            <div className="saved-stacks">
                <header>
                    <h2>Saved stacks</h2>
                </header>
                <section className="grid">
                    {savedStacks}
                </section>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    savedStacks: state.user.savedStacks
});

export default connect(mapStateToProps)(SavedStacks);
