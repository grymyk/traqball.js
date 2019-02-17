import React, {Component} from 'react';

import Traqball from  '../Traqball';

const Tball = Traqball;
const element = <h1>Element!</h1>;


class App extends Component {
	render() {
		return <div className="App">
			<h1>Hello, React!</h1>
			{element}
			<Tball />
		</div>
	}
}

export default App;
