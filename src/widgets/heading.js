import React from 'react'

const Heading = ({fontWeight,color,size,text,className,lineHeight}) => {
    return (
        <div>
<h1 className={className+' d-none d-md-block'} style={{
            fontWeight:fontWeight??600,
            color:color??"black",
            lineHeight:lineHeight??1, 
            fontSize:size??"10vw", // Set the font size to a relative unit (rem)
          
            }}  >{text}</h1>
            <h1 className={className+' d-block d-md-none text-start'} style={{
            fontWeight:fontWeight??600,
            color:color??"black",
            lineHeight:lineHeight??1.1, 
            fontSize:size??"15vw", // Set the font size to a relative unit (rem)
           
            }}  >{text}</h1>
        </div>
        
       
    )
}

export default Heading
