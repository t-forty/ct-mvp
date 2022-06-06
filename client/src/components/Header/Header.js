import React from 'react'
import './header.css'
import Logo from '../Logo/Logo'
import { useNavigate } from 'react-router-dom'

function Header() {
  const nav = useNavigate()
  return (
    <header>
    <nav id="main-menu">
        <Logo />
        <div className="nav-item-container right">
          <li className="nav-item" onClick={ () => { nav("/coding")}}>coding</li>
          <li className="nav-item" onClick={ () => { nav("/trades")}}>trades</li>
          <li className="nav-item" onClick={ () => { nav("/contact")}}>contact</li>
          {/* <li className="nav-item" onClick={ () => { nav("/jobs")}}>jobs</li> */}
        </div>
        {/* <span class="profile material-icons-outlined md-18">
            account_circle
        </span> */}
    </nav>
</header>
  )
}

export default Header