import React, { useEffect } from "react";

import TableList from "./TableList";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import { AiOutlineRightCircle} from "react-icons/ai";


function Table({ customStyle, orders }) {
  useEffect(() => console.log(orders));

  return (
    <>
      <div className={`flex flex-col `}>
        <div className="overflow-x-auto">
          <div className="overflow-x-auto xx relative divide-y divide-gray-200 rounded  bg-white sm:rounded-lg m-13">
            <div className="flex  justify-between  items-center p-4 ">
              <div className="flex">
                <div className="flex items-center mr-3 py-3 pl-4">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                  <span className="ml-3 text-sm text-[#585B64] font-bold">
                    Select All
                  </span>
                </div>
                <button
                  id="dropdownRadioButton"
                  data-dropdown-toggle="dropdownRadio"
                  className="inline-flex items-center font-bold text-[#1636B4]  rounded-lg text-sm px-3 py-1.5 dark:text-[#1636B4] "
                  type="button"
                >
                  Actions
                  <AiFillCaretDown
                    color="black"
                    size="0.8em"
                    className="ml-1"
                  />
                </button>

                <div
                  id="dropdownRadio"
                  className="hidden radio-t z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  data-popper-reference-hidden=""
                  data-popper-escaped=""
                  data-popper-placement="top"
                >
                  <ul
                    className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownRadioButton"
                  >
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input
                          id="filter-radio-example-1"
                          type="radio"
                          value=""
                          name="filter-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="filter-radio-example-1"
                          className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >
                          Last day
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input
                          defaultChecked={false}
                          id="filter-radio-example-2"
                          type="radio"
                          value=""
                          name="filter-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="filter-radio-example-2"
                          className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >
                          Last 7 days
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input
                          id="filter-radio-example-3"
                          type="radio"
                          value=""
                          name="filter-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="filter-radio-example-3"
                          className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >
                          Last 30 days
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input
                          id="filter-radio-example-4"
                          type="radio"
                          value=""
                          name="filter-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="filter-radio-example-4"
                          className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >
                          Last month
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center p-2 rounded hover:bg-gfiray-100 dark:hover:bg-gray-600">
                        <input
                          id="filter-radio-example-5"
                          type="radio"
                          value=""
                          name="filter-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="filter-radio-example-5"
                          className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >
                          Last year
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block p-2 pl-10 w-80 text-sm text-slate-700 bg-slate-100 rounded-lg border placeholder-slate-900  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search orders by name, phone or address"
                />
              </div>
            </div>

            <div className=" w-full inline-block align-middle">
              <div
                className={`${customStyle} bg-white overflow-hidden  rounded-lg`}
              >
                <table className="min-w-full ">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3 pl-4">
                        <div className="flex items-center h-5">
                          <input
                            id="checkbox-all"
                            type="checkbox"
                            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="checkbox" className="sr-only">
                            Checkbox
                          </label>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        CUSTOMER NAME
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        ADDRESS
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        QTY
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <TableList orders={orders} />
                  </tbody>
                </table>
                <div className="py-3 px-4 flex items-center  w-full justify-end">
                  <div className="flex">
                     <div className="mr-5">
                        <p className="text-[#6E6F71]">1-8 out of 199</p>
                     </div>
                    <div className="flex">
                      <AiFillLeftCircle size="1.6em" color="#C3C4C9"   />
                      <AiFillRightCircle size="1.6em" color="#C3C4C9" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
