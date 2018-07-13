import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import AccountCircle from '@material-ui/icons/AccountCircle';
import WhatsHot from '@material-ui/icons/Whatshot';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import Backspace from '@material-ui/icons/Backspace';
import Add from '@material-ui/icons/Add';
import Info from '@material-ui/icons/Info';
import { Link, withRouter } from 'react-router-dom';

export const DrawerItems_noauth = (
  <div className="drawer-items">
    <Link to={`/login`}>
        <ListItem button>
        <ListItemIcon>
            <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Log in" />
        </ListItem>
    </Link>
    <Link to={`/stacks`}>
        <ListItem button>
        <ListItemIcon>
            <WhatsHot />
        </ListItemIcon>
        <ListItemText primary="Trending stacks" />
        </ListItem>
    </Link>
    <Link to={`/nootropics`}>
        <ListItem button>
        <ListItemIcon>
            <LocalLibrary />
        </ListItemIcon>
        <ListItemText primary="Nootropics" />
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
  </div>
);

export const DrawerItems_auth = (
    <div className="drawer-items">
      <Link to={`/user/123/account`}>
          <ListItem button>
          <ListItemIcon>
              <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Account" />
          </ListItem>
      </Link>
      <Link to={`/user/123/saved`}>
          <ListItem button>
          <ListItemIcon>
              <StarIcon style={{color: 'gold'}}/>
          </ListItemIcon>
          <ListItemText primary="Saved" />
          </ListItem>
      </Link>
      <Link to={`/user/123/create-stack`}>
          <ListItem button>
          <ListItemIcon>
              <Add />
          </ListItemIcon>
          <ListItemText primary="Create a stack" />
          </ListItem>
      </Link>
      <Link to={`/stacks`}>
          <ListItem button>
          <ListItemIcon>
              <WhatsHot />
          </ListItemIcon>
          <ListItemText primary="Trending stacks" />
          </ListItem>
      </Link>
      <Link to={`/nootropics`}>
          <ListItem button>
          <ListItemIcon>
              <LocalLibrary />
          </ListItemIcon>
          <ListItemText primary="Nootropics" />
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
      <Link to={`/logout`}>
          <ListItem button>
          <ListItemIcon>
              <Backspace style={{color: 'red'}}/>
          </ListItemIcon>
          <ListItemText primary="Logout" />
          </ListItem>
      </Link>
    </div>
  );