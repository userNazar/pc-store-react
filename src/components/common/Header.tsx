import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { BsLaptopFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { PiShoppingCartSimpleThin } from 'react-icons/pi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';



import { NavLink } from 'react-router-dom';

import { useState } from 'react';


export default function Header() {


    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [isOpenSearch, setOpenSearch] = useState<boolean>(false);

    const [inputSearch, setInputSearch] = useState<string>('');

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };


    const closeInputSearchHandeler = () => {
        setOpenSearch(false)
        setInputSearch('')
    }

    return (
        <>

            <div className={`flex bg-black text-white min-h-[44px] items-end`}>
                <div className={`flex flex-wrap justify-between container m-auto pl-4 pr-4 pt-2 pb-2 sm:p-0`}>
                    <div><span className={`text-gray-400`}>Mon-Thu:</span>  9:00 AM - 5:30 PM</div>
                    <div className={`text-gray-400`}>Visit our showroom in 1234 Street Adress City Address, 1234  <span className={`text-white underline`}><a href="fsdfs">Contact Us</a></span></div>
                    <div className={`flex items-center`}>Call Us: (00) 1234 5678 <a className={`ml-2 mr-2`} href="fsdfs"><AiFillInstagram color={`white`} size={25} /></a> <a href="fsf"><AiFillFacebook color={`white`} size={25} /></a></div>
                </div>
            </div>


            <div className={`border-b border-gray-300`}>
                <div className={`container m-auto items-center flex justify-between pt-5 pb-5 pl-4 pr-4 sm:pl-0 sm:pr-0`}>
                    <div>
                        <BsLaptopFill size={40} />
                    </div>



                    {
                        isOpenSearch
                            ?
                            <input
                                type="text"
                                className={`search-input-changing-animation w-[1126px] h-[40px] bg-violet-50 rounded-[31px] pl-5 ml-5 mr-5`}
                                placeholder="Search entire store here..."
                                value={inputSearch}
                                onChange={(e) => setInputSearch(e.target.value)}
                            />
                            :
                            <nav className={`relative max-h-[40px] z-10 search-input-changing-animation`}>
                                <div className={`lg:hidden`}>
                                    <button className="text-gray-600 hover:text-gray-800 focus:outline-none" onClick={toggleMenu}>
                                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                                    </button>
                                </div>
                                <ul className={`lg:flex bg-gray-100 lg:bg-white p-5 lg:p-0 rounded-[20px] flex-col lg:flex-row items-center justify-center flex-wrap ${isMenuOpen ? 'flex' : 'hidden'}`}>
                                    <li className="ml-4 mr-4 text-black text-sm font-semibold hover:text-gray-500"><NavLink to={'/'}>Home</NavLink></li>
                                    <li className="ml-4 mr-4 text-black text-sm font-semibold hover:text-gray-500"><NavLink to={''}>Desktop PCs</NavLink></li>
                                    <li className="ml-4 mr-4 text-black text-sm font-semibold hover:text-gray-500"><NavLink to={''}>Laptops</NavLink></li>
                                    <li className="ml-4 mr-4 text-black text-sm font-semibold hover:text-gray-500"><NavLink to={''}>Printers & Scanners</NavLink></li>
                                    <li className="ml-4 mr-4 text-black text-sm font-semibold hover:text-gray-500"><NavLink to={''}>PC Parts</NavLink></li>
                                    <li className="ml-4 mr-4 text-black text-sm font-semibold hover:text-gray-500"><NavLink to={'/all'}>All Other Products</NavLink></li>
                                    <li className="ml-4 mr-4 text-black text-sm font-semibold hover:text-gray-500"><NavLink to={''}>Repairs</NavLink></li>
                                    <li className="ml-4 mr-4 text-blue-600 text-sm font-semibold border border-blue-600 rounded-[50px] w-[121px] h-[37px] hover:bg-blue-600 hover:text-white transition duration-400"><NavLink className={`w-[121px] h-[37px] flex items-center justify-center`} to={''}>Our Deals</NavLink></li>
                                </ul>
                            </nav>

                    }

                    <div className={`flex items-center`}>
                        {
                            isOpenSearch
                                ?
                                <GrFormClose className={`cursor-pointer`} size={40} onClick={closeInputSearchHandeler} />
                                :
                                <BiSearch className={`cursor-pointer`} size={40} onClick={() => setOpenSearch(true)} />
                        }
                        <PiShoppingCartSimpleThin className={`ml-2 cursor-pointer`} size={40} />
                    </div>
                </div>
            </div>
        </>
    )
}
