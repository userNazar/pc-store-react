import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface SliderSettings extends SliderSettingsProps {
    ref: React.RefObject<Slider>;
}

interface SliderSettingsProps {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    centerMode: boolean;
    centerPadding: string;
    autoplay: boolean;
    autoplaySpeed: number;
    pauseOnHover: boolean;
}

const HomeSlider: React.FC = () => {
    const sliderRef = useRef<Slider | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext();
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const settings: SliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        ref: sliderRef,
    };

    return (
        <div className="container mx-auto overflow-hidden">
            <Slider {...settings}>
                <div className="text-center">
                    <img
                        src="https://images.unsplash.com/photo-1619683172106-ff242162eb4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                        alt=""
                        className="mx-auto"
                        style={{ width: '1200px', height: '320px' }}
                    />
                </div>
                <div className="text-center">
                    <img
                        src="https://images.unsplash.com/photo-1630794180018-433d915c34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                        alt=""
                        className="mx-auto"
                        style={{ width: '1200px', height: '320px' }}
                    />
                </div>
                <div className="text-center">
                    <img
                        src="https://images.unsplash.com/photo-1555626040-e1c570e4a213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1702&q=80"
                        alt=""
                        className="mx-auto"
                        style={{ width: '1200px', height: '320px' }}
                    />
                </div>
            </Slider>
        </div>
    );
};

export default HomeSlider;


