import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AppIndex from "./appIndex";


class MainAppBody extends Component {
  render() {
    return (
		<React.Fragment>
			
			<Router basename="">
				<Switch>
					<AppIndex />
				</Switch>
			</Router>
		</React.Fragment>
    );
  }
}

export default MainAppBody;
