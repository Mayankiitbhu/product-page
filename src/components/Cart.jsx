import React from "react";
import { useContext } from "react";
import { Context } from "./utils/MyContext";
import thumbnail from '../assets/images/image-product-1-thumbnail.jpg'
import deleteIcon from '../assets/images/icon-delete.svg';

const Cart = () => {
    const { context : { totalItems, total }, changeItem} = useContext(Context);
    const emptyCart = <div class='flex items-center justify-center h-[120px] font-bold text-black/60'>
        Your cart is empty 
    </div>;
    return (
    <div class='fixed top-[65px] md:top-[80px] bg-white mx-[5px] rounded-lg lg:top-[95px] right-0 bg-white-200  w-full max-w-[350px] z-10 text-left p-2 shadow-2xl font-kumbh'>
        <h3 class='px-2 font-bold border-b-[1px] pb-2'>Cart</h3>
        {totalItems ===0 ? emptyCart : <div class='px-2 pb-2'>
            <section class='flex items-center mt-4 justify-between'>
                <img class='h-15 w-12 rounded' src={thumbnail} alt='product-1' />
                <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <div class='flex gap-4'>
                        <span>$125.00 x {totalItems}</span>
                        <span class='font-bold'>$ {total}</span>
                    </div>
                </div>
                <button onClick={() => changeItem({ totalItems : 0, total : 0.00 })}>
                    <img src={deleteIcon} alt="dustbin" />
                </button>
            </section>
            <button class='bg-orange-400 rounded-lg w-full p-2 font-bold mt-4'>
                Checkout
            </button>
        </div>}
    </div>
    );
};


export default Cart;