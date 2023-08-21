import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appslice';
import {useParams,useSearchParams} from 'react-router-dom'
import CommentContainer from './CommentContainer';
import Livechat from './Livechat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu()    )
    },[])
  return (
    <div className='flex flex-col w-full  '>
      <div className="flex w-full ml-4">
      <iframe width="3800" 
                 height="600" 
                 src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                 title="YouTube video player" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 allowFullScreen></iframe>
                 <div className='w-full '>
                  <Livechat/>
                 </div>
      </div>
                 
                 <CommentContainer/>
                 </div>
  )
}

export default WatchPage;