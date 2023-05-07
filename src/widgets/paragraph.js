import React from 'react'

const Paragraph = ({text,className,color,indent,fontWeight,onClick,fontSize}) => {
    
    return (
        <div>
        <p onClick={onClick} className={className+' d-none d-md-block mt-2'} style={{lineHeight:1.35, fontSize:fontSize??"1.3vw", textIndent:indent??0,color:color??'black',fontWeight:fontWeight??600}}>
            {text}
        </p>
        <p onClick={onClick} className={className+' d-block d-md-none text-start mt-3'} style={{lineHeight:1.35, fontSize:fontSize??"5vw", textIndent:indent??0,color:color??'black',fontWeight:fontWeight??600}}>
            {text}
        </p>
        </div>
       

    )
}

export default Paragraph
