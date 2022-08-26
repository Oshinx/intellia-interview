import React, { useState } from "react";
import AlertNotification from "../../components/alert-notification/AlertNotification";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { FiCalendar } from "react-icons/fi";
import "./dashboard.page.css";
import CustomGraph from "../../components/custom-graph/CustomGraph";
import Table from "../../components/table/Table";
import Uptick from '../../assets/iconrename.png';

function DashboardPage() {
    let open = true;

    const [orders, setOrders] = useState(
        [
            { customerName: "Noah Jones", address: "5318 Ferry Mall Apt. 909", qty:"2", amount:"N982", status:"Dispatched"},
            { customerName: "Noah Jones", address: "5318 Ferry Mall Apt. 909", qty:"2", amount:"N982", status:"Pending"},
            { customerName: "Noah Jones", address: "5318 Ferry Mall Apt. 909", qty:"2", amount:"N982", status:"Processing"},
            { customerName: "Noah Jones", address: "5318 Ferry Mall Apt. 909", qty:"2", amount:"N982", status:"Pending"}
        ]
    )
    const [showNotificationBanner,setShowNotificationBanner] = useState(true); 



    return (
        <>
        <div className="bg-[#f5f9fb] text-[#1D1F52]   h-full pb-48">
            <Header />
            <AlertNotification
                customStyles="font-medium text-black  text-center p-5 bg-[#FFA500] opacity-70 text-xl"
                isOpen={open}
            >
                Your free trial expired! Please <b>add your card details</b> to keep
                using Zupa
            </AlertNotification>
            <Card customStyle="ml-24  mt-10 mr-24 w-10/12">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Welcome Back, Lula Hughes
                        </h5>
                        <p className="text-xl">
                            Here is your statistics for the month of June, 20
                        </p>
                    </div>
                    <div>
                        <button
                            className="text-[#1636B4] bg-[#D4D8E9] opacity-90  rounded-lg text-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                        >
                            <FiCalendar size='1.3em'/>
                            <span className="font-bold ml-2">This Months</span>
      
                                <svg
                                className="ml-2 w-4 h-4"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                 
                                    
                                ></path>
                            </svg>
                        </button>

                        <div
                            id="dropdown"
                            className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                        >
                            <ul
                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefault"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Earnings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Card>


            <div className="ml-24">
                <h3 className="mt-10 text-xl font-bold mb-5 text-[#585B64]">Overview</h3>
                <div className="flex space-x-9">
                    <Card customStyle=" text-[#1D1F52]  flex flex-col pt-4">
                        <p className="font-semibold">TOTAL ORDERS</p>
                        <p className="font-bold text-4xl mt-3 ">1,314</p>
                        <div className=" flex mt-1 items-center">
                            <img src={Uptick}  className="h-10 w-10  scale-50 block"/>
                             <p>15.8%</p>
                        </div>
                    </Card>

                    <Card customStyle=" text-[#1D1F52] flex flex-col pt-4">
                        <p className="font-semibold">TOTAL SALES</p>
                        <p className="font-bold text-4xl mt-3">N984K</p>
                        <div className=" flex mt-1 items-center">
                            <img src={Uptick}  className="h-10 w-10  scale-50 block"/>
                             <p>15.8%</p>
                        </div>
                    </Card>
                </div>

            </div>

        
        <div className="ml-24 mr-24 w-10/12">
         <div className="flex justify-between">
         <h3 className="mt-10 text-xl font-bold mb-5 text-[#414248]">Your Monthly Sales</h3>
         <h3 className="mt-10 text-xl text-[#1636B4] font-bold mb-5">View Analytics</h3>
         </div>
         <div>
            <Card className="text-[#1D1F52] ">
             <CustomGraph />
            </Card>
         </div>
        </div>


        <div className="ml-24 mr-24 w-10/12">
         <div className="flex justify-between">
         <h3 className="mt-10 text-xl font-bold mb-5 text-[#585B64]">Lastest Orders</h3>
         <h3 className="mt-10 text-[#1636B4] text-xl font-bold mb-5">View All</h3>
         </div>
 
          <Table  customStyle="text-[#1D1F52] p-5" orders={orders} />
          </div>
         </div>
        
      
        </>
    );
}

export default DashboardPage;
