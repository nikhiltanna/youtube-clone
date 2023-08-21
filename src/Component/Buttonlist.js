import React from 'react';
import Button from './Button'

const Buttonlist = () => {
    const btlist=["ALL","Latest","Gaming","Sports","News","Festivals","Movies","Sitcoms","Ganesh Murat","Bollywood"]
  return (
    <div className="flex">
        {btlist.map((e)=>{
            return <Button key={e} name={e}/>
        })}
    <div></div>
    
    </div>
  )
}

export default Buttonlist;