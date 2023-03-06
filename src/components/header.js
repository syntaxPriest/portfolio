import React from "react";

const AppHeader = () => {
    return(
        <header>
            <div className="app-logo flex centralized-v">
                <img 
                    src="icons/web.png" 
                    alt="Code Icon"
                />
                <h4>SyntaxPriest</h4>
            </div>
            <div className="navigations flex centralized-v">
                <h5 className='active-nav'>Home</h5>
                <h5><a href='https://syntaxpriest.hashnode.dev' target='_blank' rel='no-referrer'>My Blog</a></h5>
                <h5>About Me</h5>
                <h5>Projects</h5>
                <h5>Contact Me</h5>
            </div>
        </header>
    )
}

export default AppHeader;