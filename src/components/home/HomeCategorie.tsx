import { useEffect, useState } from 'react';
import CardProduct from '../common/CardProduct';
import { NavLink } from 'react-router-dom';

export default function HomeCategorie() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    let imageUrl = 'https://images.unsplash.com/photo-1689876673591-215e6f1b8a31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

    let cards = Array(5).fill(1);

    if (windowWidth <= 1300) cards = cards.slice(0, 4)
    if (windowWidth <= 1050) cards = cards.slice(0, 2)
    if (windowWidth <= 650) cards = cards.slice(0, 1)
    return (
        <div className='flex justify-center mt-10'>

            <div className='w-[223px] h-[330px] text-white flex flex-col items-center' style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: '100% 100%' }}>
                <h2 className='mt-[70%]'>MSI</h2>
                <NavLink className='hover:underline mt-auto mb-5' to={'/all/MSI'}>See All Products</NavLink>
            </div>
            <div className='flex'>
                {
                    windowWidth <= 420
                        ?
                        null
                        :
                        cards.map((el, ind) =>
                            <CardProduct key={ind} img='https://images.unsplash.com/photo-1689776574086-50ff04ae5dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' />
                        )
                }
            </div>

        </div>
    )
}
