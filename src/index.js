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







