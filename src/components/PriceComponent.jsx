import react from 'react';
import plus from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg';
import cart from '../assets/images/icon-cart.svg';
import { Context } from './utils/MyContext';
import { useContext, useState } from 'react';

const PriceComponent = () => {
    const { context : { totalItems, total }, changeItem } = useContext(Context);
    const [item, setItem] = useState(0);

    const onAddItem = () => {
        setItem(item + 1);
    };
    const onAddToCart = () => {
        changeItem({totalItems : totalItems + item, total : total + item*125.00});
        setItem(0);
    };

    const onReduceItem = () => {
        setItem(item - 1);
    };

    return (
    <div class='flex flex-col justify-center px-4 font-kumbh md:mt-2 lg:mt-6 md:gap-4 lg:gap-6'>
        <div class='flex justify-between items-center md:flex-col md:items-start md:gap-2'>
            <div class='flex items-center gap-1.5 md:gap-3 lg:gap-4'>
                <h1 class='text-2xl font-bold md:text-3xl'>$125.00</h1>
                <div class='bg-black rounded-md text-white text-xs md:text-sm lg:text-l font-bold p-1 md:p-2 lg:p-3 flex items-center h-4 w-auto lg:h-6'>
                    <p>50%</p>
                </div>
            </div>
            <div class='font-bold text-black opacity-75 text-sm md:text-l lg:text-xl line-through'>$250.00</div>
        </div>
        <div class='md:flex md:items-center md:justify-center md:gap-4'>
            <div class='my-2 h-10 lg:h-12 w-full rounded-md bg-blue-200/20 px-4 py-2 lg:py-3 flex justify-between md:w-1/3'>
                <button disabled={item === 0} onClick={onReduceItem}>
                    <img src={minus} alt="minus" />
                </button>
                <p class='font-bold'>{item}</p>
                <button onClick={onAddItem}>
                    <img src={plus} alt="plus" />
                </button>
            </div>
            <button class='font-bold w-full h-10 lg:h-12 bg-orange-400 flex items-center justify-center rounded-md my-1 text-sm md:w-2/3'>
                <div class='flex items-center gap-2 stroke-black' onClick={onAddToCart}>
                    <img class='h-3 w-auto font-black' src={cart} alt="cart" />
                    <p>Add to cart</p>
                </div>
            </button>
        </div>
        
    </div>
);
};

export default PriceComponent;