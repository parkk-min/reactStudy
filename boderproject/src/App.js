
import { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import PostList from './PostList';
import PostWrite from './PostWrite';
import ReadPost from './ReadPost';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<PostList/>}></Route>
        <Route path="/write" element={<PostWrite/>}></Route>        
        <Route path="/post/:postId" element={<ReadPost/>}></Route>
      </Route>
    </Routes>
    </>
  );
  
}

export default App;
