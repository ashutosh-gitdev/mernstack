import React from 'react';
import 'Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header class="header-login-signup">
            <div class="header-limiter">
                <h1><a href="/">Ashutosh<span>Ahirwar</span></a>
                    <nav>
                        <Link to="/">Home</Link>
                        <a class="selected"><Link to="/">About App</Link></a>
                        <a><Link to="/">Contact us</Link></a>
                    </nav>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </h1>
            </div>
        </header>
    )
}
