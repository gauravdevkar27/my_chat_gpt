import React, { useEffect } from 'react'
import { assets } from '../main_assets/assets'
import moment from 'moment'
import Markdown from 'react-markdown'
import Prism from 'prismjs'
const  Message = ({message}) => {

  useEffect(() => {
    Prism.highlightAll()
  }, [message.content])

  return (
    <div>
      {message.role === "user" ? (                                //user message
        <div className='flex items-start justify-end my-4 gap-2'>
          <div className='flex flex-col gap-2 p-2 px-4 bg-slate-50 dark:bg-[#57317C]/30 border border-[#80609F]/30 rounded-md max-w-2xl'>
            <p className='text-sm text-gray-800 dark:text-white'>
              <Markdown>{message.content}</Markdown></p>
            <span className='text-xs text-gray-400 dark:text-[#B1A6C0] self-end'>
              {moment(message.timestamp).fromNow()}</span>
          </div>
          <img src={assets.user_icon} alt='' className='w-8 rounded-full'/>

        </div>
      )
    :
    (
      <div className='flex items-start my-4 gap-2'>
        <img src={assets.logo} alt='' className='w-8' />
        <div className='inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-primary/20
        dark:bg-[#57317C]/30 border border-[#80609F]/30 rounded-md'>
          {message.isImage ? (
            <img src={message.content} alt='' className='w-full max-w-md mt-2 rounded-md'/>
          ):
          (
            <div className='text-sm text-gray-800 dark:text-white reset-tw'>
              <Markdown>{message.content}</Markdown></div>
          )
          }
          <span className='text-xs text-gray-400 dark:text-[#B1A6C0] self-end'>{moment(message.timestamp).fromNow()}</span>
        </div>
      </div>
    )
    }
    </div>
  )
}

export default Message
