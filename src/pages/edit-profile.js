import React from 'react';
import { useEditProfilePageStyles } from '../styles';
import Layout from '../components/shared/Layout';
import {
  IconButton,
  Hidden,
  Drawer,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

function EditProfilePage({ history }) {
  const classes = useEditProfilePageStyles();
  const path = history.location.pathname;
  const [showDrawer, setDrawer] = React.useState(false);

  function handleToggleDrawer() {
    setDrawer((prev) => !prev);
  }
  function handleSelected(index) {
    switch (index) {
      case 0:
        return path.includes('edit');
      default:
        break;
    }
  }

  function handleListClick() {
    switch (index) {
      case 0:
        history.push('/accounts/edit');
        break;
      default:
        break;
    }
  }

  const options = [
    'Edit Profile',
    'Change Password',
    'Apps and Websites',
    'Email and SMS',
    'Push Notifications',
    'Manage Contacts',
    'Privacy and Security',
    'Login Activity',
    'Emails from Instagram',
  ];

  const drawer = (
    <List>
      {options.map((options, index) => (
        <ListItem
          key={option}
          button
          selected={handleSelected(index)}
          onClick={() => handleListClick(index)}
          classes={{
            selected: classes.listItemSelected,
            button: classes.listItemButton,
          }}
        >
          <ListItemText primary={option} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Layout title='Edit Profile'>
      <section classNAme={classes.section}>
        <IconButton
          edge='start'
          onClick={handleToggleDrawer}
          className={classes.menuButton}
        >
          <Menu />
        </IconButton>
        <nav>
          <Hidden smUp implementation='css'>
            <Drawer
              variant='temporary'
              anchor='left'
              open={showDrawer}
              onClose={handleToggleDrawer}
              classes={{ paperAnchorLeft: classes.temporaryDrawer }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden
            smDown
            implementation='css'
            className={classes.permanentDrawerRoot}
          >
            <Drawer
              variant='permanent'
              open
              classes={{
                paper: classes.permanentDrawerPaper,
                root: classes.permanentDrawerRoot,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main>
          {path.includes('edit') && <EditUserInfo user={defaultCurrentUser} />}
        </main>
      </section>
    </Layout>
  );
}
function EditUserInfo() {}

export default EditProfilePage;
