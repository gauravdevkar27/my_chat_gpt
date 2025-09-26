import React, { useState } from 'react'
import Sidebar from './component/Sidebar' 
import { Route, Routes, useLocation} from 'react-router-dom'
import ChatBox from './component/ChatBox'
import Credit from './pages/Credit'
import Community from './pages/Community'
import Loading from './pages/Loding'
import { assets } from './main_assets/assets'
import './main_assets/prism.css'
function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {pathname} = useLocation()

  return (
    <>
    {!isMenuOpen && <img src={assets.menu_icon} className='absolute top-3 left-3 
    w-8 h-8 cursor-pointer md:hidden not-dark:invert' onClick={()=>setIsMenuOpen(true)}/>}

    <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white'>    
      {pathname === '/loading' ? <Loading/> : (
        <div className='flex h-screen w-screen'>
          <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          <Routes>
            <Route path='/' element={<ChatBox/>}/>
            <Route path='/credits' element={<Credit/>}/>
            <Route path='/community' element={<Community/>}/>
          </Routes>
        </div>
      )}
    </div>

    </>
  )
}

export default App
