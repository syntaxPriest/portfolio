import React from "react";
import * as Icon from 'react-feather';
import { HomeModernIcon, NewspaperIcon } from "@heroicons/react/24/outline";

const AppHeader = () => {
    return(
        <header>
            <div className="app-logo flex centralized-v">
                <img 
                    src="icons/my-avatar.png" 
                    alt="Code Icon"
                    className="glass"
                />
                <h4>SyntaxPriest</h4>
            </div>
            {/* <div className="navigations flex centralized-v">
                <p className='active-nav'><HomeModernIcon className='w-5 h-5' /></p>
                <p>
                    <a href='https://syntaxpriest.hashnode.dev' target='_blank' rel='no-referrer'>
                        <NewspaperIcon className="w-5 h-5" />
                    </a
                ></p>
                <p>About Me</p>
                <p>Projects</p>
                <p className=''>Contact Me</p>
            </div> */}
            {/* <a href="https://github.com/syntaxpriest" target="_blank" rel="noreferrer">
                <div className="rounded-full w-[70px] h-[70px] glass flex items-center justify-center">
                    <Icon.GitHub color='#fff' />
                </div>
            </a> */}
        </header>
    )
}

export default AppHeader;