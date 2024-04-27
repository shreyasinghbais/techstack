import React from 'react';
import '../../App.css';
import notfound from '../../config/pics/notfound.gif';

const Empty = () => {
  return (
    <div className='emptyList'>
      <h3 className='emptyList-heading'>Results are not available.</h3>
      <div className='emptyList-img'>
        <img src={notfound} alt="Empty" />
      </div>
    </div>
  );
}

export default Empty;
