import { BsHeadset } from 'react-icons/bs';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { MdDiscount } from 'react-icons/md';
import { useState } from 'react';


export default function Footer() {


    const [inputEmail, setInputEmail] = useState<string>('')

    return (
        <>
            <div className={`container m-auto flex flex-wrap justify-around pt-[40px]`}>
                <div className='flex flex-col items-center mt-5'>
                    <div className={`w-[65px] h-[65px] bg-blue-600 rounded-full flex justify-center items-center`}>
                        <BsHeadset color='white' size={30} />
                    </div>
                    <div className='text-center'>
                        <h4 className='text-black text-lg font-bold leading-normal mt-[24px]'>Product Support</h4>
                        <p className='max-w-[265px] opacity-70 text-center text-black text-sm font-normal leading-tight mt-[13px]'>Up to 3 years on-site warranty available for your peace of mind.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-5'>
                    <div className={`w-[65px] h-[65px] bg-blue-600 rounded-full flex justify-center items-center`}>
                        <RiAccountPinCircleFill color='white' size={30} />
                    </div>
                    <div className='text-center'>
                        <h4 className='text-black text-lg font-bold leading-normal mt-[24px]'>Personal Account</h4>
                        <p className='max-w-[265px] opacity-70 text-center text-black text-sm font-normal leading-tight mt-[13px]'>With big discounts, free delivery and a dedicated support specialist.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-5'>
                    <div className={`w-[65px] h-[65px] bg-blue-600 rounded-full flex justify-center items-center`}>
                        <MdDiscount color='white' size={30} />
                    </div>
                    <div className='text-center'>
                        <h4 className='text-black text-lg font-bold leading-normal mt-[24px]'>Amazing Savings</h4>
                        <p className='max-w-[265px] opacity-70 text-center text-black text-sm font-normal leading-tight mt-[13px]'>Up to 70% off new Products, you can be sure of the best price.</p>
                    </div>
                </div>
            </div>



            <div className={`bg-black text-white mt-[45px] pt-[45px] pl-4 pr-4`}>
                <div className="container m-auto ">
                    <div className='flex flex-wrap justify-between'>
                        <div>
                            <h2 className={`text-white text-[38px] font-medium`}>Sign Up To Our Newsletter.</h2>
                            <p className={`text-white font-light`}>Be the first to hear about the latest offers.</p>
                        </div>
                        <div className='flex flex-wrap justify-center ml-2 mr-2'>
                            <input type='text' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder='Your Email' className="mt-2 sm:mt-0 sm:w-[391px] h-[50px] pl-5 pr-5 placeholder-gray-500 bg-black rounded border border-white" />
                            <button className='mt-2 sm:mt-0 ml-4 mr-4 bg-blue-600 text-sm  border border-blue-600 rounded-[50px] w-[151px] h-[50px] hover:bg-white hover:text-blue-600 transition duration-400'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="container m-auto mt-[45px] flex flex-wrap justify-between">
                    <div>
                        <div className='text-gray-400 font-bold'>Information</div>
                        <div className='mt-5 hover:text-gray-400 cursor-pointer'>About us</div>
                        <div className='hover:text-gray-400 cursor-pointer'>About Zip</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Privacy Policy</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Search</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Terms</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Orders and Returns</div>
                        <div className='hover:text-gray-400 cursor-pointer'> Contact us</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Advanced Search</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Newsletter Subsctioption</div>
                    </div>
                    <div>
                        <div className='text-gray-400 font-bold'>PC Parts</div>
                        <div className='mt-5 hover:text-gray-400 cursor-pointer'>CPUS</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Add on Cards</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Hard Drives(Internal)</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Graphic Cards</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Keyboards / Mice</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Cases / Power Supplies / Cooling</div>
                        <div className='hover:text-gray-400 cursor-pointer'>RAM (Memory)</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Softwate</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Speakers / Headsets</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Motherboards</div>
                    </div>
                    <div>
                        <div className='text-gray-400 font-bold'>Desktop PCs</div>
                        <div className='mt-5 hover:text-gray-400 cursor-pointer'>Custom PCs</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Servers</div>
                        <div className='hover:text-gray-400 cursor-pointer'>MSI All-In-One PCs</div>
                        <div className='hover:text-gray-400 cursor-pointer'>HP/Compaq PCs</div>
                        <div className='hover:text-gray-400 cursor-pointer'>ASUS PCs</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Tecs PCs</div>
                    </div>
                    <div>
                        <div className='text-gray-400 font-bold'>Laptops</div>
                        <div className='mt-5 hover:text-gray-400 cursor-pointer'>Everyday Use Notebooks</div>
                        <div className='hover:text-gray-400 cursor-pointer'>MSI Workstation Series</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Tablets and Pads</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Netbooks</div>
                        <div className='hover:text-gray-400 cursor-pointer'>Infinity Gaming Notebooks</div>
                    </div>
                    <div>
                        <div className='text-gray-400 font-bold'>Address</div>
                        <div className='mt-5'>Address: 1234 Street Adress City Address, 1234</div>
                        <div>Phones: <span className='text-blue-400'>(00) 1234 5678</span></div>
                        <div>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</div>
                        <div>Friday: 9:00 AM - 6:00 PM</div>
                        <div>Saturday: 11:00 AM - 5:00 PM</div>
                        <div>E-mail: <span className='text-blue-400'>shop@email.com</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
