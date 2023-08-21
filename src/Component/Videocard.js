import React from 'react'

const Videocard = ({info}) => {
    //console.log(info)
    const{snippet,statistics}=info || {};
    const{channelTitle,title,thumbnails}=snippet || {};
  return (

    <div className='p-2 m-2 w-60 shadow overflow-hidden' >
        <img className="rounded-lg" alt="thumbnails" src={thumbnails?.medium?.url}/>
        <ul >
            <li className="font-bold py-2" >{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount} views</li>
        </ul>
    </div>
  )
}

export default Videocard;