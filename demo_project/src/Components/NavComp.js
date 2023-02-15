import React from 'react'
import logo from "./Eddy_logo.png"

export default function NavComp() {
  return (
    <nav className='nav'>
      
      <section className='nav_sec1'>
        <img src={logo} alt='Website Logo'
        height={30} width={70} />
      </section>
      <section>
        {/* <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Service">Service</Link>
        <Link to="/Contact">Contact</Link> */}
      </section>

    </nav>
  )
}
