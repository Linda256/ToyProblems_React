import React from 'react';
import ApprovalCard from './ApprovalCard';


const PostItem = (props)=>{
	return(
		<ApprovalCard>
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
		</ApprovalCard>
				
	)
}
export default PostItem;