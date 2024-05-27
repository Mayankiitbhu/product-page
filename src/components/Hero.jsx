import react from 'react';
import p1 from '../assets/images/image-product-1-thumbnail.jpg';
import p2 from '../assets/images/image-product-2-thumbnail.jpg';
import p3 from '../assets/images/image-product-3-thumbnail.jpg';
import p4 from '../assets/images/image-product-4-thumbnail.jpg';
import P1 from '../assets/images/image-product-1.jpg';
import P2 from '../assets/images/image-product-2.jpg';
import P3 from '../assets/images/image-product-3.jpg';
import P4 from '../assets/images/image-product-4.jpg';
import arrowLeft from '../assets/images/icon-previous.svg'
import arrowRight from '../assets/images/icon-next.svg'
import PriceComponent from './PriceComponent';
import { useState } from 'react';

const smallScreenImg = [p1, p2, p3, p4];
const bigScreenImg = [P1, P2, P3, P4];


const Hero = () => {
    const [item, changeItem] = useState(0);
    const onChangeItem = (index) => {
        changeItem(index);
    }
    const prevItem = () => {
        if (item === 0){
            changeItem(bigScreenImg.length - 1);
        } else {
            changeItem(item - 1);
        }
    }
    const nextItem = () => {
        if(item === bigScreenImg.length - 1) {
            changeItem(0);
        } else {
            changeItem(item + 1);
        }
    }

    return(
        <section class='flex flex-col my-10 p-0 md:flex-row md:px-24 lg:px-28 md:mt-[110px] lg:mt-[140px] md:gap-12 lg:gap-20 md:pt-8 md:items-center'>
            <section class='md:hidden relative'>
                <img class='object-cover' src={bigScreenImg[item]} alt={`product-${item}`} />
                <button class='bg-white h-8 w-8 flex items-center justify-center absolute left-2 top-[50%] rounded-full' onClick={prevItem}>
                    <img src={arrowLeft} alt="left-arrow" />
                </button>
                <button class='bg-white h-8 w-8 flex items-center justify-center absolute right-2 top-[50%] rounded-full' onClick={nextItem}>
                    <img src={arrowRight} alt="right-arrow" />
                </button>
            </section>
            <section class='hidden md:flex flex-col gap-6'>
                <div class='h-[350px] w-[350px]'>
                    <img class='object-cover rounded-large' src={bigScreenImg[item]} alt={`product-${item}`} />
                </div>
                <div class='flex items-center justify-center w-[350px]  gap-4'>
                    {smallScreenImg.map((i, index) => {
                        return (<div key={index} class={`rounded-md ${item === index ? 'border-orange-400 border-2' : null}`} onClick={() => onChangeItem(index)}>
                            <img class={`object-fit rounded-md hover:opacity-80 ${item === index ? 'opacity-60' : null}`} src={i} alt={`product-${index}`} />
                        </div>);
                    })}
                </div>
            </section>
            <section>
                <section class='text-left px-4 my-4 font-kumbh flex flex-col justify-center gap-2 lg:gap-6'>
                    <h5 class='uppercase text-black-light opacity-75 text-xs md:text-sm lg:text-lg font-bold'>sneaker company</h5>
                    <h1 class='capitalize font-bold text-2xl md:text-3xl lg:text-4xl'>fall limited edition sneakers</h1>
                    <p class='text-black-light opacity-75 text-sm lg:text-lg'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis tenetur hic ullam illum accusantium eum quod in fugiat voluptatibus placeat aut, rerum cum quos laudantium nobis, ad ipsum nemo nulla.
                    </p>
                </section>
                <PriceComponent />
            </section>
        </section>
    );
};


export default Hero;