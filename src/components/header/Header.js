import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../ search/SearchInput';
import IconButton from '../iconbutton/IconButton';
import Transition from '../transition/Transition';
import ZupaLogo from '../../assets/zupa-dark.png';
import './header.modules.css';
import { BsFillBellFill } from "react-icons/bs";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import Avatar from '../../assets/avatar.jpeg';




function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef(null);
    const dropdown = useRef(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
            setDropdownOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });


    return (
        <>
            <div className="flex items-center flex-1 p-4 sticky top-0 bg-white border-b border-slate-200 z-30 ">
                <div className=' scale-75 lg:scale-100 lg:mr-5 lg:w-52 mr-10 '>
                    <img src={ZupaLogo} alt="Zupa Logo" />
                </div>
                <div className='flex items-center justify-around '>
                    <Link to="/dashboard" className='mr-7 font-bold text-lg lg:mr-4 lg:text-base'>Dashboard</Link>
                    <Link to="/dashboard" className='mr-7 font-bold  text-lg lg:mr-4 lg:text-base'>Orders</Link>
                    <Link to="/dashboard" className='mr-7 font-bold  text-lg lg:mr-4 lg:text-base'>Analytics</Link>
                    <Link to="/dashboard" className='mr-7 font-bold text-lg lg:mr-4 lg:text-base'>Manage</Link>
                </div>

                <div className="ml-36 w-2/5 lg:mr-4 lg:ml-7 lg:w-11/12">
                    <div
                        className="relative w-full  mr-6 "
                    >
                        <div className="absolute inset-y-0 flex items-center pl-2">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            className="w-full pl-8 pr-2 p-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-blue-300 focus:outline-none focus:shadow-outline-blue form-input"
                            type="text"
                            placeholder="Search for names, phone numbers or address"
                            aria-label="Search"
                        />
                    </div>
                </div>

                <div className='flex ml-10 text-[#1D1F52] lg:ml-5 '>
                    <button className='mr-4 lg:mr-3'>
                        <BsFillBellFill size='1.6em' color='#C1C3CB' />
                    </button>
                    <button className='mr-4 lg:mr-3'>
                        <BsFillQuestionCircleFill size='1.6em' color='#C1C3CB' />
                    </button>
                    <button className='mr-4 lg:mr-3'>
                        <AiTwotoneSetting size='1.9em' color='#C1C3CB' />
                    </button>
                </div>

                <div className=''>
                    <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-14 h-10 lg:w-28 lg:h-11 md:w-30 rounded-full" src={Avatar} alt="user photo" />
                    </button>


                    <div id="dropdownAvatar" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                            <div>Bonnie Green</div>
                            <div className="font-medium truncate">name@flowbite.com</div>
                        </div>
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header