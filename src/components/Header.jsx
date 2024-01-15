import logo from '../assets/images/logo.svg';
import cart from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';
import menu from '../assets/images/icon-menu.svg';
import MenuButton from './MenuButton';
import Modal from './Modal';
import { useState } from 'react';

function Header(){
    const[modalOpen,setModalOpen]=useState(false)


    const handleClick=(e)=>{
        e.preventDefault();
        setModalOpen(!modalOpen)
    }

  

    return(
        
        <div className='flex inline relative'>
            <div className='flex inline space-x-3'>
                <img src={menu} alt="menu bar" className="lg:hidden object-none mt-2"/>
                <img src={logo} alt="logo of ecommerce website" className='object-contain h-4 mt-2'/>
            
            </div>
            <div className='flex inline space-x-8 hidden lg:flex ml-10 mt-1.5'>
                <MenuButton name="Collections"/>
                <MenuButton name="Men"/>
                <MenuButton name="Women"/>
                <MenuButton name="About"/>
                <MenuButton name="Contact"/>
            

            </div>
            <div className='flex inline space-x-7 absolute right-0 lg:right-10'>
                <button onClick={handleClick}><img src={cart} alt="cart" className='object-none mb-2' /></button>
                <img src={avatar} alt="profile picture" className='object-contain h-8 w-8 mb-3 hover:border rounded-full border-orange-400'/>
            </div>

            {modalOpen && <Modal />}
        


        </div>
        
    )
}

export default Header