import React from 'react';
import {connect} from 'react-redux';
import SavedStacks from './saved-stacks';

//import requiresLogin from './requires-login';
import { fetchUserData } from '../actions/user';

export class Dashboard extends React.Component {
    componentDidMount() {
        //this.props.dispatch(fetchUserData());
    }

    render() {
        console.log(this.props)
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.user.account.username}
                </div>
                <div className="dashboard-user-data">
                    <SavedStacks />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user // this should be removed. dispatch fetchUserData() instead.
    
});

export default connect(mapStateToProps)(Dashboard);
