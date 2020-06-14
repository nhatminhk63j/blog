import React, { Component } from 'react';
import '../assets/css/Menu.css'
import { NavLink, BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPenSquare, faAddressCard, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            active: false
        }
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({active: !this.state.active})
    }

    render() {
        return (
            <header className="header">
                {/* <!-- Main Navbar--> */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        {/* <!-- Navbar Brand --> */}
                        <div className="navbar-header d-flex align-items-center justify-content-between">
                            {/* <!-- Navbar Brand --> */}
                            <a href="/" className="navbar-brand">Nhat Minh's Blog</a>
                            {/* <!-- Toggle Button--> */}
                            <button type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarcollapse" 
                                aria-controls="navbarcollapse" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation" 
                                className={this.state.active ? "navbar-toggler active" : "navbar-toggler"}
                                onClick={this.onClick}
                            >
                                <span></span><span></span><span></span>
                            </button>
                        </div>
                        {/* <!-- Navbar Menu --> */}
                        <div id="navbarcollapse" 
                            className={this.state.active ? "collapse navbar-collapse show" : "collapse navbar-collapse"}
                        >
                            <BrowserRouter>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink to="/" activeClassName="active" className="nav-link">Home 
                                            
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/blog" activeClassName="active" className="nav-link">Blog
                                            
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/contact" activeClassName="active" className="nav-link">Contact
                                            
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/about" activeClassName="active" className="nav-link">About
                                            
                                        </NavLink>
                                    </li>
                                </ul>
                            </BrowserRouter>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Menu;