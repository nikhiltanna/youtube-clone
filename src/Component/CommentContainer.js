import React from 'react'

const commentData=[
    {
        name:"Your Name",
        text:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
        replies:[],
    },
    {
        name:"Your Name",
        text:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
        replies:[
            {
                name:"Your Name",
                text:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
                replies:[],
            },
            {
                name:"Your Name",
                text:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
                replies:[],
            },
            {
                name:"Your Name",
                text:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
                replies:[
                    {
                        name:"Your Name",
                        text:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
                        replies:[
                            {
                                name:"Your Name",
                                text:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
                                replies:[
                                    {
                                        name:"Your Name",
                                        text:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
                                        replies:[
                                            {
                                                name:"Your Name",
                                                text:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
                                                replies:[],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name:"Your Name",
        text:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
        replies:[],
    },
    {
        name:"Your Name",
        text:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
        replies:[],
    },
    
];

const Comment=({data})=>{
const {name,text,replies}=data;
return (
    <div className='flex shadow-sm rounded-sm bg-gray-100 p-2'>
        <img className="w-12 h-12"
        alt="user text" src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
)
}

const CommentList=(props)=>{
    
    return(
        <div>
             {props.data.map((comment,index)=>(
                <div>
                  <Comment key={index } data={comment}/>
                    <div className='px-5 border border-l-black ml-5 py-2'>
                    <CommentList data={comment.replies}/>
                    
                    </div>
                </div>
            ))}
            {console.log(props)}
        </div>
    )
}
const CommentContainer = () => {
  return (
    <div className='m-2 p-2'>
        <h1 className='text-2xl font-bold'>CommentContainer</h1>
        <CommentList data={commentData}/>
        </div>
  )
}

export default CommentContainer