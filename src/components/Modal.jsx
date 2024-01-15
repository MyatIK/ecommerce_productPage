import ProductImg from '../assets/images/image-product-1-thumbnail.jpg'
import Delete from '../assets/images/icon-delete.svg'
import { useContext } from 'react'
import ProductContext from '../Context/ProductContext'

function Modal(){

    const {info}=useContext(ProductContext);
    return(
        

        <div className='absolute right-0 -top-5 mt-5 lg:mt-20 border-2 p-5 bg-white divide-y-2 z-10 border rounded-md'>
            <h3 className='text-left'>Cart</h3>
            
            {info? <div className='mt-3'>
                <div className='flex space-x-2 mt-3'>
                    <img src={ProductImg} alt="chosen shoe" className='h-10 rounded'/>
                    <div>
                        <h4 className='text-slate-500'>{info.title}</h4>
                        <div className='flex space-x-2'>
                
                            <h3 className='text-slate-500'>${info.price}</h3>
                            <h3 className='text-slate-500'>x {info.count}</h3>
                            <h3 className='font-bold'>${info.price*info.count}</h3>
                        </div>
                        
                    </div>
                    <img src={Delete} alt="Delete" className='h-5 p-1 mt-2'/>

                </div>
                
                <button className='container justify-center mt-3 p-2 items-center rounded-lg bg-orange-500 hover:bg-orange-300 hover:text-white'>Checkout</button>

            </div> : <div className='p-10 text-center'>Your Cart is empty.</div>}
            
            
        
        </div>
    )
}

export default Modal