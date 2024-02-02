import React from "react";
import * as Icon from 'react-feather';

const AppHeader = () => {
    return(
        <header>
            <div className="app-logo flex centralized-v">
                <img 
                    src="icons/web.png" 
                    alt="Code Icon"
                />
                {/* <h4>SyntaxPriest</h4> */}
            </div>
            <div className="navigations flex centralized-v">
                <p className='active-nav'>Home</p>
                <p><a href='https://syntaxpriest.hashnode.dev' target='_blank' rel='no-referrer'>My Blog</a></p>
                <p>About Me</p>
                <p>Projects</p>
                <p className=''>Contact Me</p>
            </div>
            <div className="rounded-full w-[70px] h-[70px] glass flex items-center justify-center">
                <Icon.GitHub color='#fff' />
            </div>
        </header>
    )
}

export default AppHeader;