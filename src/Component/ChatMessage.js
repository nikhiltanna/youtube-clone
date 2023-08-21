import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'> 
        <img className="h-6 " 
    alt="user" 
    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png">
    </img>
    <span className='px-2 font-bold'>{name}</span>
    <span>{message}</span>
    </div>
  )
}

export default ChatMessage