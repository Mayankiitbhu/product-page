import react from 'react';
import cross from '../assets/images/icon-close.svg';

 const Sidebar = ({ sidebar, onToggle }) => {
    return (
    <div class={`bg-black/60 top-0 left-0 fixed w-full h-screen z-20`}>
        <div class='bg-white w-[70%] h-screen items-start p-6 text-left'>
            <button onClick={onToggle}>
                <img src={cross} alt="close" />
            </button>
            <div class='grid gap-4 mt-8 font-kumbh font-bold justify-items-start'>
                <button>Collections</button>
                <button>Men</button>
                <button>Women</button>
                <button>About</button>
                <button>Contact</button>
            </div>
        </div>
    </div>
    );
 };

 export default Sidebar;