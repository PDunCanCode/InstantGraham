import React from 'react';
import { useNavbarStyles } from '../../styles';
import { AppBar, InputBase, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { LoadingIcon } from '../../icons';

function Navbar({ minimalNavbar }) {
  const classes = useNavbarStyles();

  return (
    <AppBar className={classes.appBar}>
      <section className={classes.section}>
        <Logo />
        {!minimalNavbar && (
          <>
            <Search />
            <Links />
          </>
        )}
      </section>
    </AppBar>
  );
}
function Logo() {
  const classes = useNavbarStyles();

  return (
    <div className={classes.logoContainer}>
      <Link to='/'>
        <div className={classes.logoWrapper}>
          <img src={logo} alt='Instagram' className={classes.logo} />
        </div>
      </Link>
    </div>
  );
}
function Search() {
  const classes = useNavbarStyles()
  const [query, setQuery] = React.useState('')

  let loading = false

  function handleClearInput() {
    setQuery('')
  }
  return (
    <Hidden xsDown>
      <InputBase
        className={classes.input}
        onChange={event => setQuery(event.target.value)}
        startAdornment={<span className={classes.searchIcon} />}
        endAdornment={
          loading ? (
            <LoadingIcon />
          ) : (
            <span onClick={handleClearInput} className={classes.clearIcon} />
          )
        }
        placeholder="Search"
        value={query}
        />
    </Hidden>
  )
}
function Links() {

}

export default Navbar;
