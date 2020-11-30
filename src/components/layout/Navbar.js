import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({icon,title})=> {
    return (
      <nav className="navbar bg-github ">
      <h1>
      <i className={icon}/>
      {title}
      </h1>
      
      </nav>
    );
  
    };

  Navbar.defaultProps={
    title: 'Github Finder!',
    icon:'fab fa-github fa-spin fa-2x'
  };

Navbar.propTypes={
  title:PropTypes.string.isRequired,
  icon:PropTypes.string.isRequired,

};

  export default Navbar;