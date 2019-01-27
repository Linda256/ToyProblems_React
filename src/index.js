/********************



//1. Import the React and ReactDOM libraries
//2. Create a react component
//3. Take the react component and show it on the sreen
import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';

// class App extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				<h2> Hello World </h2>
// 				<h3> Spring is coming </h3>
// 			</div>
// 			)
// 	}
// }

// const App = function(){
// 	return <h3>I love all the flowers in Spring</h3>
// }
//why function does not need to extends to React.Component? 
//How does React know it is a React Component

//Bable translate it into JS code
// const App = function(){
// 	return React.createElement("h3",null,"I love all the flowers in Spring");
// }

// const App = () =>{
// 		const buttonText="Click me!"
// 		return (
// 			<div>
// 				<label className="label" htmlFor="name">
// 					Enter Name:
// 				</label>
// 				<input id="name" type="text" />
// 				<button style={{backgroundColor:'blue',color:'white'}}> {buttonText} </button>
// 			</div>
// 		)
	
// }

class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			posts:[
			{name:'Alex',createdAt:'5:00',content:'Great blog post!'},
			{name:'Sam',createdAt:'7:51',content:'Informative. Thanks.'},
			{name:'Jane',createdAt:'9:00',content:'Looks great!'},
			]
		}
	}

	render(){
		return(
			<div>
				<Posts posts={this.state.posts}/>
			</div>
		)
	}
}

// const App = (props)=>{
// 	return(
// 		<div>
// 			<ul>
// 			<li>
// 				<p>{props.posts[0].name} {props.posts[0].createdAt}</p>
// 				<h3>{props.posts[0].content}</h3>
// 			</li>
// 			</ul>
// 		</div>
// 	) 
// }


// ReactDOM.render(<App posts={[
// 			{name:'Alex',createdAt:'5:00',content:'Great blog post!'},
// 			{name:'Sam',createdAt:'7:51',content:'Informative. Thanks.'},
// 			{name:'Jane',createdAt:'9:00',content:'Looks great!'},
// 			]}/>, 
// 			document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
*******************************/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts'

class App extends React.Component{
	constructor(){
		super();//no need props in App, since no data pass from React.Component
		this.state={
			posts:[
			{name:'Alex',createdAt:'5:00',content:'Great blog post!'},
			{name:'Sam',createdAt:'7:51',content:'Informative. Thanks.'},
			{name:'Jane',createdAt:'9:00',content:'Looks great!'},
			]
		}
		//console.log("props in App", props);
	}
	render(){
		return <Posts posts={this.state.posts} />
	}


}

ReactDOM.render(<App />, document.getElementById('root'));

*/

/****************************/

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import Posts from './components/Posts';

class App extends React.Component{
	constructor(){
		super();
		this.state={
			posts: [
				{name:'Alex',createdAt:'5:00',content:'Great blog post!',avatar:faker.image.avatar},
				{name:'Sam',createdAt:'7:51',content:'Informative. Thanks.',avatar:faker.image.avatar},
				{name:'Jane',createdAt:'9:00',content:'Looks great!',avatar:faker.image.avatar},
			]
		}
	}
	render(){
		return(
			<div className="ui container comments">
				<Posts posts={this.state.posts} />
			</div>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('root'));







