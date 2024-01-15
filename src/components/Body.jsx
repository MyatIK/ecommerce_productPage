import Image1T from '../assets/images/image-product-1-thumbnail.jpg';
import Image1 from '../assets/images/image-product-1.jpg';
import Image2T from '../assets/images/image-product-2-thumbnail.jpg';
import Image2 from '../assets/images/image-product-2.jpg';
import Image3T from '../assets/images/image-product-3-thumbnail.jpg';
import Image3 from '../assets/images/image-product-3.jpg';
import Image4T from '../assets/images/image-product-4-thumbnail.jpg';
import Image4 from '../assets/images/image-product-4.jpg';
import cart from '../assets/images/icon-cart.svg';


import { useState } from 'react';
import { useContext } from 'react';
import ProductContext from '../Context/ProductContext';


function Body(){
    const price=125.00;
    const title="Fall Limited Edition Sneakers";
    const[count,setCount]= useState(0);
    const[image,setImage]= useState(Image1);
    const[clicked,setClicked] = useState(false);
    const {setInfo}=useContext(ProductContext);
   


    function handleClick(src) {
        setClicked(!clicked);
        setImage(src)
    }
    const handleSubmit=(e,item)=>{
        e.preventDefault()
     
        setInfo({count,image,price,title})

    }
   
    
    return(
        <div className='lg:grid grid-cols-2 mt-5 lg:mt-20'>
             
            <div className='m-5 ml-10'>
               
                <img src={image} alt="shoe frontside" className='rounded-xl object-cover w-full'/> 
                <div className='flex inline justify-between mt-7'>
                    <img src={Image1T} alt="shoe from an angle" onClick={handleClick} className='h-20 rounded hover:opacity-50 active:border border-orange-400'/>
                    <img src={Image2T} alt="shoe from an angle" onClick={()=>setImage(Image2)} className='h-20 rounded hover:opacity-50 active:border border-orange-400'/>
                    <img src={Image3T} alt="shoe from an angle" onClick={()=>setImage(Image3)} className='h-20 rounded hover:opacity-50 active:border border-orange-400'/>
                    <img src={Image4T} alt="shoe from an angle" onClick={()=>setImage(Image4)} className='h-20 rounded hover:opacity-50 active:border border-orange-400'/>
                </div>

            </div>

            <div className='text-left lg:ml-20 mt-5'>
                <p className='text-orange-500 font-bold mb-5'>SNEAKER COMPANY</p>
                <p className='font-bold text-lg lg:text-5xl mb-5 lg:mb-10'>{title}</p>
                <p className='text-slate-500'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className='flex inline mt-10 mb-10'>
                    <p className='text-lg font-bold mr-5'>$125.00</p>
                    <p className='text-orange-500 bg-orange-100 rounded-md'>50%</p>
                    <p className='line-through text-slate-500 ml-10 lg:inline-block'>$250.00</p>

                </div>
                <div className='lg:flex inline'>
                    <div className='flex inline mb-5 '>
                        <button className='bg-slate-100 rounded-l-lg p-4 font-bold text-orange-500' onClick={()=> setCount(count - 1)}>-</button>
                        <button className='container bg-slate-100 p-4 font-bold lg:w-10'>{count}</button>
                        <button className='bg-slate-100 rounded-r-lg font-bold p-4 text-orange-500 mr-5' onClick={()=> setCount(count+1)}>+</button>
                    </div>
                    <button onClick={handleSubmit} className='container flex inline justify-center p-4 items-center rounded-lg bg-orange-500 hover:bg-orange-300 hover:text-white'>
                        <img src={cart} className='mr-3' alt="cart"/>
                        Add to cart
                    </button>
                </div>
               
                
                
            </div>
              

        </div>

    )
}

export default Body