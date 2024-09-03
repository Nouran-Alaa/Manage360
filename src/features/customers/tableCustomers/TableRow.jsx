/* eslint-disable react/prop-types */
import { formatDate, formatTimeAgo } from '../../../helper/helper';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

import { useState } from 'react';

const TableRow = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr className="border-t hover:bg-gray-50 transition-colors">
        <td className="p-4 flex gap-3 ">
          <img src={user.userImage} className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-bold">{user.userName}</p>
            <p className="text-gray-500 text-sm">{user.userEmail}</p>
          </div>
        </td>
        <td className="p-4 ">{user.userPhoneNum}</td>
        <td className="p-4">{formatTimeAgo(user.AccountCreateDate)}</td>
        <td className="p-4 space-x-2">
          {/* <button>
            <CreateOutlinedIcon />
          </button> */}
          <button
            className="focus:outline-none border rounded-full border-gray-500"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </button>
        </td>
      </tr>
      <tr>
        <td colSpan={7} className="p-0 border-none">
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              open ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <table className="w-full">
              <tr className="h-48 flex justify-evenly items-center divide-x-2 ">
                <td className="p-4 flex gap-3 items-center flex-col lg:flex-row">
                  <img
                    src={user.userImage}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex justify-center flex-col items-center">
                    <p className="font-bold">{user.userName}</p>
                    <p className="text-gray-500 text-sm">{user.userEmail}</p>
                  </div>
                </td>

                <td className=" p-4 text-sm">
                  <p className="mb-2  text-gray-500">PERSONAL INFORMATION</p>
                  <tr className="text-left">
                    <th className="pr-10">Contact Number</th>
                    <td>{user.userPhoneNum}</td>
                  </tr>
                  <tr className="text-left">
                    <th>Gender</th>
                    <td className="capitalize">{user.gender}</td>
                  </tr>
                  <tr className="text-left">
                    <th>Date of Birth</th>
                    <td>{user.dateOfBirth}</td>
                  </tr>
                  <tr className=" text-left">
                    <th className="pr-10">Member Since</th>
                    <td>{formatDate(user.AccountCreateDate)}</td>
                  </tr>
                </td>

                <td className="p-4 text-sm flex flex-col gap-2">
                  <p className="mb-2 text-gray-500">SHIPPING ADDRESS</p>
                  <tr className="text-left font-semibold">
                    {user.userAddress}
                  </tr>
                  <tr className="flex justify-around text-xl font-bold">
                    <th>{user.userTotalOrders}</th>
                    <th>{user.userCompletedOrders}</th>
                    <th>{user.UserCancelledOrders}</th>
                  </tr>
                  <tr className="text-gray-500 flex justify-between">
                    <td>Total Orders</td>
                    <td>Completed</td>
                    <td>Cancelled</td>
                  </tr>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
