import React, { useEffect, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePrinter } from "react-icons/ai";

function TableRow({ order, shade, count}) {
  let { customerName, address, qty, amount, status } = order;

  return (
    <>
      <tr
        className={`${
          count % 2 == 1
            ? "bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
            : "bg-white border-b dark:bg-gray-900 dark:border-gray-700"
        }`}
      >
        <td className="py-3 pl-4">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
            />
            <label htmlFor="checkbox" className="sr-only">
              Checkbox
            </label>
          </div>
        </td>
        <td className="px-6 py-4 text-sm font-bold text-gray-800 whitespace-nowrap">
          {customerName}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {qty}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {amount}
        </td>
        <td className="px-10 py-4 text-sm  font-medium content-start text-right whitespace-nowrap">
          <span className="font-bold ml-0">{qty}</span>
        </td>

        <td className=" pl-6 py-4 text-sm   font-medium text-right whitespace-nowrap">
          <button
            className="flex items-center justify-between  w-9/12 "
            href="#"
          >
            <p
              style={{ color: shade }}
              className={`justify-self-start font-bold`}
            >
              {status}
            </p>
            <div>
              <AiFillCaretDown className="justify-self-end" color="black" />
            </div>
          </button>
        </td>

        <td className="flex justify-center  py-4 text-sm font-medium  whitespace-nowrap">
          <button className="mr-4" href="#">
            <AiOutlinePrinter color="black" size="1.7em" />
          </button>

          <button className="" href="#">
            <RiDeleteBin5Line size="1.7em" />
          </button>
        </td>
      </tr>
    </>
  );
}

export default TableRow;
