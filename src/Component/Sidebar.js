import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuopen = useSelector(store=>store.app.isMenuopen);
//console.log(isMenuopen);
  //Early return 
  if(!isMenuopen) {
    return null;
  }
  return (
    <div className="p-2 shadow-lg w-48">
      <ul>
      <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
        </ul>
        <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar;