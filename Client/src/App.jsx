import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-yellow-50 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] fixed top-0 z-50">
        <Link to="/">
          <img src={logo} alt="logo" className='w-40 object-contain'/>
        </Link>
        <Link to="/create-post" className='font-inter font-medium bg-green-500 text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-yellow-300/[0.3] min-h-[calc(100vh-73px)] relative top-16'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-post' element={<CreatePost/>} />
        </Routes>
      </main>      
    </BrowserRouter>
  )
}

export default App