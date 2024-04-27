import React, { useState } from 'react';
import Header from '../components/Home/Header';
import SearchBar from '../components/Home/SearchBar';
import Postlist from '../components/Home/Postlist';
import { postList } from '../config/data';
import Empty from '../components/Common/Empty';

const Home = () => {
  const [posts, setPosts] = useState(postList);
  const [searchKey, setSearchKey] = useState('');

  const handleSearchSubmit = event => {
    event.preventDefault();
    handleSearchResults();
  }

  const handleSearchResults = () => {
    const allPosts = postList;
    const filteredPosts = allPosts.filter(post =>
      post.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setPosts(filteredPosts);
  }
  const handleClearSearch = () => {
    setPosts(postList);
    setSearchKey('');
  }
  return (
    <div>
       {/* page header */}
       <Header/>
       {/* search bar */}
       <SearchBar 
         value={searchKey} 
         clearSearch={handleClearSearch}
         formSubmit={handleSearchSubmit} 
         handleSearchKey={(e)=>setSearchKey(e.target.value)}
        />
       {/* post list */}
       {!posts.length ? <Empty/>:<Postlist posts={posts}/>}
    </div>
  );
}

export default Home;