import { useState } from "react"
import Image1 from '../assets/images/image-product-1.jpg';

function Image(props){

    return(

        <>
            <img src={props.src} alt={props.alt} className='h-20 rounded hover:opacity-50 active:border border-orange-400'/>
        
        
        </>
    )
}

export default Image