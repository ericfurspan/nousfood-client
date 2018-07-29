import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import WhatsHot from '@material-ui/icons/Whatshot';
import Backspace from '@material-ui/icons/Backspace';
import Info from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';

export const DrawerItems_noauth = (
  <div className="drawer-items">
    <Link to={`/about`}>
        <ListItem button>
        <ListItemIcon>
            <Info />
        </ListItemIcon>
        <ListItemText primary="About" />
        </ListItem>
    </Link>
    <Link to={`/login`}>
        <ListItem button>
        <ListItemIcon>
            <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Log in" />
        </ListItem>
    </Link>
  </div>
);

export const DrawerItems_auth = (
    <div className="drawer-items">
      <Link to={`/dashboard`}>
          <ListItem button>
          <ListItemIcon>
              <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          </ListItem>
      </Link>
      <Link to={`/about`}>
          <ListItem button>
          <ListItemIcon>
              <Info />
          </ListItemIcon>
          <ListItemText primary="About" />
          </ListItem>
      </Link>
      <Link to={`/dashboard/logout`}>
          <ListItem button>
          <ListItemIcon>
              <Backspace style={{color: 'red'}}/>
          </ListItemIcon>
          <ListItemText primary="Logout" />
          </ListItem>
      </Link>
    </div>
  );