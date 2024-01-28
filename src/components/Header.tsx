import React from 'react'
import './Header.css'
import ACC_IMG from './ACC_IMG.jpeg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
        <div className="navbar">
            <div className="logo">
                <div className="logo-image"><img src={ACC_IMG} alt="Logo"/></div>
                <div className="logo-name"><span><b>ATRIA CODE CLUB</b></span></div>
            </div>
            <div className="nav-options">
                    <Link className='link' to={'/'}><b>Home</b></Link>
                    <Link className='link' to={'/contest'}><b>Contest</b></Link>
                    <Link className='link' to={'/domains'}><b>Domains</b></Link>
                    <Link className='link' to={'/explore'}><b>Explore</b></Link>
                    <Link className='link' to={'/support'}><b>Support</b></Link>
                </div>
            <div className="search">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="profile">
                <form action="http://localhost:3000/signup" method="get">
                    <div className="signup"><Link className='link' to={'/signup'}><button className="btn" type="submit"><b>Signup</b></button></Link></div>
                </form>
                <form action="http://localhost:3000/login" method="get">
                    <div className="login"><Link className='link' to={'/login'}><button className="btn" type="submit"><b>Login</b></button></Link></div>
                </form>
            </div>
        </div>
    </nav>
    )    
}

export default Header