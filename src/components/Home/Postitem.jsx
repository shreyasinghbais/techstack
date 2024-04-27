import React from 'react';
import Chip from '../Common/Chip';
import { Link } from 'react-router-dom';
import '../../App.css';

const Postitem = ({
  post: {id, title, category, subcategory, description, authorName, cover},
}) => {
  return (
  <div className='postItem'>
    <img src={cover} alt="cover-picture" className='postItem-cover'/>
    <Chip label={category} className='chip'/>
    <h3>{title}</h3>
    <p className='postItem-desc'>{description}</p>
    <div className='more-desc'>
      <h6 className='postAuthor'>{authorName}</h6>
      <Link to={`/post/${id}`}><button>Read More</button></Link>
    </div>
  </div>
);
};


export default Postitem;
