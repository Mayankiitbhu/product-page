import React from 'react';
import hamburger from '../../assets/images/icon-menu.svg';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import Sidebar from '../Sidebar';
import { useState, useContext } from 'react';
import { Context } from '../utils/MyContext';
import Cart from '../Cart';

const NavBar = () => {
  const [sidebar, toggleSidebar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { context : { totalItems } } = useContext(Context);

  const onToggle = () => {
    toggleSidebar(!sidebar);
  }

  return (
    <>
      {sidebar && <Sidebar sidebar={sidebar} onToggle={onToggle} />}
      <nav class='top-0 left-0 fixed z-10 p-0 w-full h-7 md:px-20'>
          <div class='flex items-center justify-between border-b-2 bg-white px-5 md:px-0 py-4 md:py-8'>
              <div class='flex items-baseline justify-center gap-5 md:items-center md:gap-9'>
                  <img class='text-black h-3.5 md:hidden cursor-pointer' src={hamburger} alt="menu" onClick={onToggle} />
                  <img class='h-4 w-auto md:h-5 md:m-0 cursor-pointer' src={logo} alt="logo" />
                  <div class='hidden md:flex text-black gap-4'>
                    <div class='cursor-pointer'>Collections</div>
                    <div class='cursor-pointer'>Men</div>
                    <div class='cursor-pointer'>Women</div>
                    <div class='cursor-pointer'>About</div>
                    <div class='cursor-pointer'>Contact</div>
                  </div>
              </div>
              <div class='flex items-center justify-center gap-5 lg:gap-10'>
                  <div class='relative' onClick={() => setShowCart(!showCart)}>
                    <img class='h-5 w-5 cursor-pointer' src={cart} alt="cart" />
                    <div class='absolute -top-1 -right-2 text-[12px] rounded-lg bg-orange-400 font-bold h-2 p-1.5 flex items-center'>
                      {totalItems}
                    </div>
                  </div>
                  <img class='h-6 w-6 lg:h-11 lg:w-11 cursor-pointer' src={avatar} alt="avatar" />
              </div>
          </div>
      </nav>
      {showCart && <Cart />}
    </>
  )
}

export default NavBar;