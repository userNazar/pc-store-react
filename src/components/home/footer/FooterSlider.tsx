import { useEffect, useRef, useState } from 'react'
import SliderCard from './SliderCard'

export default function FooterSlider() {

    const coments = [
        {
            id: 0,
            text: 'My first order arrived today in perfect condition. From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch. Such great service. I look forward to shopping on your site in the future and would highly recommend it.',
            name: 'Miek Jordan'
        },
        {
            id: 1,
            text: '2My first order arrived today in perfect condition. From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch. Such great service. I look forward to shopping on your site in the future and would highly recommend it.',
            name: 'Miek Jordan'
        },
        {
            id: 2,
            text: '3My first order arrived today in perfect condition. From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch. Such great service. I look forward to shopping on your site in the future and would highly recommend it.',
            name: 'Miek Jordan'
        },
        {
            id: 3,
            text: '4My first order arrived today in perfect condition. From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch. Such great service. I look forward to shopping on your site in the future and would highly recommend it.',
            name: 'Miek Jordan'
        },
    ]

    const elementRef = useRef<HTMLDivElement>(null);
    const [elementWidth, setElementWidth] = useState(0);
    const [positionSlider, setPositionSlider] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (elementRef.current) {
                setElementWidth(elementRef.current.offsetWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        const moveSlider = () => {
            setPositionSlider((prev) => (prev < coments.length - 1 ? prev + 1 : 0));
        };

        const sliderInterval = setInterval(moveSlider, 3000);

        return () => {
            clearInterval(sliderInterval);
        };
    }, [coments.length]);


    return (
        <div ref={elementRef} className='mx-auto max-w-[1000px] mt-20 bg-gray-100 overflow-hidden '>
            <div className={`flex relative transition duration-1000`} style={{ transform: `translateX(-${elementWidth * positionSlider}px)` }}>
                {
                    coments.map(com =>
                        <SliderCard key={com.id} name={com.name} text={com.text} size={elementWidth} />
                    )
                }
            </div>

            <div className='flex justify-end px-20 mb-5'>
                {
                    coments.map(com =>
                        <div
                            key={com.id}
                            className={`w-3 h-3  m-1 ${positionSlider === com.id ? 'bg-blue-500' : 'bg-gray-300'} cursor-pointer  rounded-full`}
                            onClick={() => setPositionSlider(com.id)}
                        ></div>
                    )
                }
            </div>
        </div>
    )
}
