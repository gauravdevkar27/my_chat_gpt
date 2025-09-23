import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../main_assets/assets';
import Message from './Message';

const ChatBox = () => {

  const { selectedChat, theme } = useAppContext();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [promt, setPromt] = useState('')
  const [mode, setMode] = useState('text')
  const [isPublished, setIsPublished] = useState(true)

  const onSubmit = async (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages)
    }

  }, [selectedChat])

  return (
    <div className='flex-1 flex flex-col justify-between m-5 md:m-10 xl:mx-30 max-md:mt-14 2xl:pr-40'>
      {/* Chat Messages */}
      <div className='flex-1 mb-5 overflow-y-scroll'>
        {messages.length === 0 &&
          (
            <div className="flex flex-col items-center justify-center h-full">
              <img src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark} alt=''
                className='w-full max-w-56 sm:max-w-[17rem]' />
              <p className='mt-5 text-4xl sm:text-6xl text-center text-gray-400
            dark:text-white'>Ask me anything</p>
            </div>
          )
        }

        {messages.map((message, index) => <Message key={index} message={message} />)}
        {/* Three Dots Loading */}
        {
          loading && <div className='loader flex items-center gap-1.5'>
            <div className='w-1.5 h-1.5 rounded-ful bg-gray-500 dark:bg-white 
            animate-bounce '></div>
            <div className='w-1.5 h-1.5 rounded-ful bg-gray-500 dark:bg-white 
            animate-bounce '></div>
            <div className='w-1.5 h-1.5 rounded-ful bg-gray-500 dark:bg-white 
            animate-bounce '></div>
          </div>

        }
      </div>

      {mode === 'image' && 
       <label className='inline-flex items-center gap-2 mb-3 text-sm mx-auto'>
        <p className='text-xs'>Publish Generated Image to community</p>
        <input type="checkbox" className='cursor-pointer' checked={isPublished}
        onChange={(e)=>setIsPublished(e.target.checked)}/>
       </label>
      }

      {/* Promt Input Box */}
      <form onSubmit={onSubmit} className='bg-primary/20 dark:bg-[#583c79]/30
      border border-primary dark:border-[#80609F]/30 rounded-full w-full max-w-2xl
      p-3 pl-4 mx-auto flex gap-4 items-center'>
        <select onChange={ (e)=>setMode(e.target.value) }  value={mode}
         className='text-sm pl-3 pr-2 outline-none'>
          <option className='dark:bg-purple-900' value="text">Text</option>
          <option className='dark:bg-purple-900' value="image">Image</option>
        </select>
        <input onChange={(e)=> setPromt(e.target.value)} value={promt} type='text' placeholder='Type your promt here...'
        className='flex-1 w-full text-sm outline-none' required/>
        <button disabled={loading}>
          <img src={loading ? assets.send_icon : assets.stop_icon} className='w-8 cursor-pointer' alt=''/> 
        </button>
      </form>
    </div>
  )
}

export default ChatBox
