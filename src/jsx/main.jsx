import React from 'react';
import {render} from 'react-dom';

import { Link, Match, Router, browserHistory } from 'react-router'

import Hello from './components/hello.jsx';
import World from './components/world.jsx';


// if (process.env.NODE_ENV !== 'production') {
// 	 console.log('development only')
// }

render(
	 <div>
		 <Hello/>
		 <World/>
	</div>,
	document.getElementById('app')
);


const BasicExample = () => (
	 <Router>
		  <div>
				<ul>
					 <li>
						  <Link to="/">Home</Link>
					 </li>
					 <li>
						  <Link to="/about">About</Link>
					 </li>
					 <li>
						  <Link to="/topics">Topics</Link>
					 </li>
				</ul>

				<hr/>

				<Match exactly pattern="/" component={Home}/>
				<Match pattern="/about" component={About}/>
				<Match pattern="/topics" component={Topics}/>
		  </div>
	 </Router>
)

const Home = () => (
	 <div>
		  <h2>Home</h2>
	 </div>
)

const About = () => (
	 <div>
		  <h2>About</h2>
	 </div>
)

const Topics = ({pathname}) => (
	 <div>
		  <h2>Topics</h2>
		  <ul>
				<li>
					 <Link to={`${pathname}/rendering`}>Rendering with React</Link>
				</li>
				<li>
					 <Link to={`${pathname}/components`}>Components</Link>
				</li>
				<li>
					 <Link to={`${pathname}/props-v-state`}>Props v. State</Link>
				</li>
		  </ul>

		  <Match pattern={`${pathname}/:topicId`} component={Topic}/>
		  <Match pattern={pathname} exactly render={() => (
				<h3>Please select a topic</h3>
		  )}/>
	 </div>
)

const Topic = ({params}) => (
	 <div>
		  <h3>{params.topicId}</h3>
	 </div>
)

export default BasicExample

// React.render(<BasicExample/>, document.getElementById('app'))
