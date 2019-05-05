import React from 'react';

import NavBar from './navbar.js';

function Header() {
    return(
        <div>

        <NavBar />
            <div className="App">
                <header className="App-header">
                    <img src='#' className="App-logo" alt="logo" />
                    <h1>
                        SimpsonWorld
                    </h1>
                </header>
        </div>
    </div>
    )
};

export default Header;