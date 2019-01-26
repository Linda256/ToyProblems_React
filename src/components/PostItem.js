// 

import React from 'react';

/*
const PostItem = (props)=>{
	console.log("props in PostItem", props);
	return(
		<li>
			<p>{props.post.name} {props.post.createdAt}</p>
			<p>{props.post.content}</p>
		</li>
	)
}
*/

const PostItem = (props)=>{
	return(
		<div className = "comment">
				<a href="/" className="avatar">
					<img alt="avatar" src={props.post.avatar()}/>
				</a>
				<div className="content">
					<a href="/" className="author">
						{props.post.name}
					</a>
					<div className="metadata">
						<span className="date"> Today at {props.post.createdAt}PM </span>
					</div>
					<div className="text">
					  {props.post.content}
					</div>
				</div>
			</div>
	)
}
export default PostItem;