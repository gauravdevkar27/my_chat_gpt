import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../main_assets/assets';

const ChatBox = () => {

  const {selectedChat, theme} = useAppContext();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(selectedChat){
      setMessages(selectedChat.messages)
    }
    
  }, [selectedChat])
}

return (
  <div>
    <div className='flex-1 flex flex-col justify-between m-5 md:m-10 x1:mx-30
    max-md:mt-14 2x1:pr-40'/> 

    {/* Chat Messages */}
    <div className='flex-1 mb-5 overflow-y-scroll'>
       {messages.length === 0 &&
       (
        <div>
          <img src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark} alt=''
          className='w-full max-w-56 sm:max-w-68'/>
        </div>
       ) 
       } 
    </div>

    {/* Promt Input Box */}
    <form>

    </form>
  </div>
)

export default ChatBox
