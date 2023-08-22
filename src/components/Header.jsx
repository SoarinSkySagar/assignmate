import React from 'react';
import "bulma/css/bulma.min.css";
import './../App.css';
import { useNavigate, useLocation } from 'react-router-dom';


export default function Header() {

  const location = useLocation();
  const nav = useNavigate();

  function pathMatchRoute(path) {
    if (path ===  location.pathname) {
        return true;
    }
  }

  return (
    <nav className="navbar" color='#1F1F1E' role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
      <img className='logo navbar-item' src="https://live.staticflickr.com/65535/53134360345_53dbf89f6d_c.jpg" onClick={() => {nav('/')}} alt='Assignmate'/>
  </div>

  <div className="navbar-menu">

    <div className="navbar-end">
    <a className={`navbar-item link ${pathMatchRoute("/") ? "border-b-[3px] border-b-red-500" : ""}`} href='/'>
        Home
      </a>

      <a className={`navbar-item link ${pathMatchRoute("/posts") ? "border-b-[3px] border-b-red-500" : ""}`} href='posts'>
        Posts
      </a>

      <a className={`navbar-item link ${pathMatchRoute("/profile") ? "border-b-[3px] border-b-red-500" : ""}`} href='profile'>
        Profile
      </a>

      <a className={`navbar-item link ${pathMatchRoute("/about") ? "border-b-[3px] border-b-red-500" : ""}`} href='about'>
        About
      </a>
      <div className="navbar-item">
        <div className="buttons">
          <a className="button signup" href='/'>
            <strong>Sign up</strong>
          </a>
          <a className="button is-light" href='/'>
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}
