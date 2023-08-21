import react,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appslice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchslice';
 
const Head=()=>{

    const dispatch= useDispatch();
    const toggleMenuhandler=()=>{
        dispatch(toggleMenu());
    }

    const [searchQuery,setSearchQuery]=useState("");
    const [suggestions,setSuggestions]=useState([]);
    const [showsuggestions,setshowsuggestions]=useState(false);
    const searcache=useSelector((store)=>store.search)
    
    useEffect(()=>{
     //   console.log(searchQuery);    
     const timer=setTimeout(()=>
     {
        if(searcache[searchQuery])
        {
            setSuggestions(searcache[searchQuery]);
        }
        else{
            getSearchSuggestion()
        }
    },200);
     return()=>{ clearTimeout(timer);}
    },[searchQuery]);

    const getSearchSuggestion= async ()=>{
        const data =await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json =await data.json();
        setSuggestions(json[1]);
        console.log(json[1]);

        dispatch(cacheResults({
            [searchQuery]:json[1]
        }))
    }
    return(
        <div className='grid grid-flow-col p-3 shadow-lg '>
            
        <div className='flex col-span-1'>
            <img onClick={()=>toggleMenuhandler()}
            className="h-8" alt ="menu" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"/>
            <img className="h-8 mx-2"alt ="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"/>
        </div>
        <div className="col-span-10 ">
            <div>
            <input className="border w-3/5  border-gray-400 rounded-l-full pl-5 text-left" type="text"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setshowsuggestions(true)}
            onBlur={()=>setshowsuggestions(false)}/>
            <button className="border border-gray-400 rounded-r-full px-5 bg-gray-100"type="button">🔍</button>
            </div>
           { showsuggestions && <div className='fixed pl-5 bg-white w-[43.5rem] shadow-lg rounded-lg border'>
            <ul>
                {suggestions.map((s)=>(
                 <li key={s} className='py-2 shadow-sm hover:bg-gray-100'>🔎{s}</li>
                ))}
            </ul>
        </div>}
        </div>
        
        <div className="col-span-1">
            <img className="h-8" alt="user" src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"></img>
        </div>
        </div>
        
    )
}

export default Head;