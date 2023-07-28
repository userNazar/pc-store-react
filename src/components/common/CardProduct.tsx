import { FcOk, FcHighPriority } from 'react-icons/fc';
import Rating from '../parts/Rating';
import { useState } from 'react';

export default function CardProduct({ img }: { img: string }) {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className='px-5 cursor-pointer pb-2 w-[200px]' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className={`${isHovered ? 'opacity-100' : 'opacity-0'} transition duration-400`}>
                {
                    true
                        ?
                        <div className='flex items-center text-green-400 text-[11px] font-normal ml-2 mb-1'>
                            <FcOk className='mr-1' /> in stock
                        </div>
                        :
                        <div className='flex items-center text-red-400 text-[11px] font-normal ml-2 mb-1'>
                            <FcHighPriority className='mr-1' /> check availability
                        </div>
                }
            </div>



            <div className={`h-[150px] w-[150px] mb-3`}>
                <img className={`h-[150px] w-[150px]`} src={img} alt="" />
            </div>

            <Rating initialRating={2} changeRating={false} />

            <div className='mt-2'>
                <p className='max-w-[150px] max-h-[65px] text-black text-[13px] font-normal'> {'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On'.length >= 50 ? 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On'.slice(0, 40) + '...' : 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On'}</p>
                <div className='text-black text-lg font-semibold leading-[25.20px] mt-2'>
                    {
                        true
                            ?
                            <p className='text-stone-500 text-sm font-normal line-through'>444.9$</p>
                            :
                            null
                    }

                    1234$
                </div>
            </div>
        </div>
    )
}
