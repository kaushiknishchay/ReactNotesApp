import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import Appbar from '../node_modules/muicss/lib/react/appbar';
import Content from "./components/Content";

class App extends Component {
	render() {
		return (
				<div>
					<Appbar>
						<div className="headerCenter">
							Notes App React
						</div>
					</Appbar>
					<Content/>
				</div>
		);
	}
}

export default App;
