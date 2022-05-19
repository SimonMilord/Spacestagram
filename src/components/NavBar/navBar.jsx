import React from 'react';
import './navBar.scss';

function NavBar(props) {

  return (
    <header className='nav'>
      <div className='nav__wrapper'>
        <h1 className='nav__logo'>Spacestagram</h1>
      </div>
    </header>
  );
}

export default NavBar;