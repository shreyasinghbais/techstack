import React from 'react';
import Postitem from './Postitem';
import '../../App.css';

const Postlist = ({ posts }) => {
  return (
  <div className='postlist'>
    {posts.map(post=>(
      <Postitem post={post} key={post.id}/>
    ))}      
  </div>
);
};

export default Postlist;
