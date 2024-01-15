
import ProductContext from './ProductContext'
import { useState } from 'react'

const ProductContextProvider=({children})=>{
    const[info,setInfo]=useState(null)
    
    
    return(
        <ProductContext.Provider value={{info,setInfo}}>
            {children}
        </ProductContext.Provider>

    )
}

export default ProductContextProvider