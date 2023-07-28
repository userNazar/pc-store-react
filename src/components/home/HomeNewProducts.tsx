import { useRef, useState } from 'react'
import CardProduct from '../common/CardProduct'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { GrDeliver } from 'react-icons/gr';

export default function HomeNewProducts() {

    const [items] = useState(Array(24).fill(1))
    const sliderRef = useRef<Slider>();

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '50px',
                },
            },
        ],
    };

    return (
        <div className='container mx-auto px-10 mt-5'>
            <div className='max-w-[1200px] mx-auto flex justify-between'>
                <h2 className=' text-black text-[22px] font-semibold'>New Products</h2>
                <NavLink className={`text-blue-500 hover:underline`} to={'/'}>See All New Products</NavLink>
            </div>



            <div className='sm:max-w-[380px] md:max-w-[700px] lg:max-w-[1175px] mx-auto relative overflow-hidden ' >
                <button className="bg-stone-300 rounded-tr-[30px] rounded-br-[30px]  focus:outline-none z-[100] absolute left-0 top-1/2" onClick={handlePrev}>
                    <IoIosArrowBack onClick={handlePrev} size={35} color='white' />
                </button>

                <Slider {...settings} ref={sliderRef as React.RefObject<Slider>}>
                    {items.map((item, index) => (
                        <div key={index}>
                            <CardProduct img={index % 2 === 0 ? 'https://images.unsplash.com/photo-1687360440155-81bdb9ecd713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' : 'https://images.unsplash.com/photo-1689616977225-bf0ab4ae1ac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80'} />
                        </div>
                    ))}
                </Slider>
                <button className="bg-stone-300 rounded-tl-[30px] rounded-bl-[30px] focus:outline-none z-[100] absolute right-0 top-1/2" onClick={handleNext}>
                    <IoIosArrowForward onClick={handleNext} size={35} color='white' />
                </button>
            </div>

            <div className='max-w-[1200px] mt-2 h-[70px] mx-auto bg-violet-50 flex justify-center items-center px-2 sm:px-10'>
                <GrDeliver size={30} className='mr-2'/>
                <span className='text-blue-300 text-sm sm:text-3xl'>&nbsp; | &nbsp;</span>
                <span className='text-blue-950 text-sm sm:text-lg font-semibold'>Fast delivery and good customer service</span>
            </div>

        </div>


    )
}
