import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from './logo';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { DrawerItems_auth, DrawerItems_noauth } from './drawer-items';
import List from '@material-ui/core/List';
import './styles/navbar.css';

class NavBar extends React.Component {
    state = {
        right: false
    };

    toggleDrawer = (open) => () => {
        this.setState({
          right: open
        });
    };

    render() {
        // if user is on the landing page (root path, "/") do not render navbar
        if(this.props.match.path === "/" && this.props.match.isExact === true) {
            return (null)
        }
        const drawerList = (
            <div>
                <List>{this.props.loggedIn ? DrawerItems_auth : DrawerItems_noauth}</List>
            </div>
        );
        return (
            <nav className="navbar">
                <Logo onDrawerToggle={() => this.toggleDrawer(true)}/>
                <SwipeableDrawer
                  anchor="right"
                  open={this.state.right}
                  onClose={this.toggleDrawer(false)}
                  onOpen={this.toggleDrawer(true)}
                >
                <div
                  tabIndex={0}
                  role="button" 
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
                >
                    {drawerList}
                </div>
                <div className="nav-home">
                    <Link to={`/`}>
                        <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="NousFood" />
                        </ListItem>
                    </Link>
                </div>
                </SwipeableDrawer>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    right: state.app_state.appDrawer.right
});

export default withRouter(connect(mapStateToProps)(NavBar));
