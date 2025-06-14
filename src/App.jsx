import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import CareersPage from './pages/CareersPage/CareersPage';
import BlogsPage from './pages/BlogsPage/BlogsPage';
import HomePage from './pages/HomePage/HomePage';


const App = () => {
  return (
    <div className='app-container'>
      <nav>
        <Link to="/careers" style={{ marginRight: '10px' }} >Careers</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>

      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/careers' element={<CareersPage/>} />
          <Route path='/blogs' element={<BlogsPage/>} />
      </Routes>

    </div>
  )
}

export default App