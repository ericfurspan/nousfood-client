import React from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import Card from './card';

export class SavedStacks extends React.Component {

    deleteStack(code) {
        console.log(`deleting ${code}`)
        // dispatch action to delete stack from user
    }
    render() {
        if (!this.props.loggedIn) {
            //return <Redirect to="/login" />;
        }
        const savedStacks = this.props.savedStacks.map((savedStack, index) => (
            <Card
                type="stack"
                data={savedStack}
                key={index}
                saveable={true}
                isSaved={true}
                onDelete={(code) => {this.deleteStack(code)}}
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
const mapStateToProps = state => ({
    savedStacks: state.user.saved.stacks
});

export default connect(mapStateToProps)(SavedStacks);
