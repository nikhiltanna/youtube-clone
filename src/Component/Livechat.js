import React,{useEffect, useState} from 'react'
import ChatMessage from './ChatMessage';
import {useDispatch, useSelector} from 'react-redux'
import {generateRandomname} from '../utils/helper'
import { addMessages } from '../utils/chatslice';

const Livechat = () => {

  const dispatch=useDispatch();
  const chatMessage=useSelector((store)=>store.chat.messages);
  const [livemessage,setLivemessage]=useState('');

  useEffect(()=>{
    const i= setInterval(()=>{
      dispatch(addMessages({
        name:generateRandomname(),
        message:'This is Live chat example'
      }));
    },15000);
    return ()=>{clearInterval(i)};
  },[])

  return (
    <>
    <div className='ml-2 p-2 border border-black w-full h-[600px] rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
      {chatMessage.map((c,i)=>(<ChatMessage key={i} name={c.name} message={c.message}/>))}
    </div>
    <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessages({
        name:'AAshay',
        message:livemessage,
      }))
      setLivemessage('');
    }}>
      <input className="w-72" type="text" value={livemessage} onChange={(e)=>{
        setLivemessage(e.target.value);
      }}/>
      <button className='px-2 mx-2 bg-green-100'>Submit</button>
    </form>
    </>
    
  )
}

export default Livechat;