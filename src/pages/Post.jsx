import React, { useEffect, useState } from 'react';
import { postList } from '../config/data';
import { Link, useParams } from 'react-router-dom';
import Chip from '../components/Common/Chip';
import Empty from '../components/Common/Empty';
import '../App.css';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  
  useEffect(() => { 
    let post = postList.find((post) => post.id === parseInt(id)); 
    if(post){
      setPost(post);
    }
  }, [id]);
  return (
    <>
      <Link className='goBack' to='/'>
        <span>&#8592;</span><span>Go Back</span>
      </Link>
      {
        post ? (
          <div className='post-wrap'>
            <header>
              <h1>{post.title}</h1>
              <div className='post-subcategory'>
                {post.subCategory.map((category, index)=>(
                  <div key={index}>
                    <Chip className='chip' label={category}/>
                  </div>
                ))}
              </div>
            </header>
            <img src={post.cover} alt="cover" />
            <p className='post-desc'>{post.description}</p>
          </div>
        ) : (
           <Empty/>
        )
      }
    </>
  );
};

export default Post;