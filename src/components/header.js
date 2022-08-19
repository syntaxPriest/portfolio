import React from "react";
import { HomeRounded } from "@material-ui/icons";

const AppHeader = () => {
    return(
        <header>
            <div className="app-logo flex centralized-v">
                <img src="icons/coding.png" />
                <h4>Priestley</h4>
            </div>
            <div className="navigations flex centralized-v">
                <h5>Home</h5>
                <h5>About Me</h5>
                <h5>Projects</h5>
                <h5>Contact Me</h5>
            </div>
        </header>
    )
}

export default AppHeader;