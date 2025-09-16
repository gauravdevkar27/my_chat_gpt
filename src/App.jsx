import React from 'react'
import Sidebar from './component/Sidebar' 
import { Route, Routes} from 'react-router-dom'
import ChatBox from './component/ChatBox'
import Credit from './pages/Credit'
import Community from './pages/Community'
function App() {
  return (
    <>
    <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white'>    
      <div className='flex h-screen w-screen'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<ChatBox/>}/>
        <Route path='/credits' element={<Credit/>}/>
        <Route path='/community' element={<Community/>}/>
      </Routes>
    </div>
    </div>

    </>
  )
}

export default App
