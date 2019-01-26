import React from 'react';
import PostItem from './PostItem';

const Posts=(props)=>{
	console.log("props in Posts", props);
	return (
		props.posts.map((post) => <PostItem post={post} />)
	)

}

export default Posts;