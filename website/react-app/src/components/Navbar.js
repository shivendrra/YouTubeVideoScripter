import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  return (
    <>
    <nav className='navbar px-3 py-3 navbar-expand-lg fixed-top' id='mainNavbar'>
      <div className='container-fluid' id='innerNav'>
        <Link className='navbar-brand mx-3' to='/'>CircleScript</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link mx-3' href='https://www.linkedin.com/in/shivendra-singh-818a02212/'>Synapse</a>
            </li>
            <li className='nav-item'>
              <Link className='nav-link mx-3' to='/downloadt'>Download</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link mx-3' to='/auth'>User</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
