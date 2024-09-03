/* eslint-disable react/prop-types */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { formatTimeAgo } from '../../../helper/helper';

const TableRow = ({ order }) => {
  const [open, setOpen] = useState(false);

  const totalPrice = order.orderItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <>
      <tr className="border-t hover:bg-gray-50 transition-colors">
        <td className="p-4 font-bold">#{order.orderID}</td>
        <td className="p-4">{formatTimeAgo(order.CreatedDate)}</td>
        <td className="p-4">{order.customerName}</td>
        <td className="p-4">${totalPrice}</td>
        <td className="p-4">
          <div className="flex items-center">
            ${order.Profit}
            <span className="ml-2 p-1 text-green-600 bg-green-100 rounded-sm text-xs">
              {((order.Profit / totalPrice) * 100).toFixed(2)}%
            </span>
          </div>
        </td>
        <td className="p-4">
          <div
            className={`inline-flex items-center ${order.Status === 'Pending' ? 'text-yellow-500 bg-yellow-100' : order.Status === 'Shipped' ? 'text-blue-500 bg-blue-100' : order.Status === 'Delivered' ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'} p-1 text-sm font-semibold rounded-md`}
          >
            {order.Status}
            <span className="ml-1">
              <KeyboardArrowDownIcon />
            </span>
          </div>
        </td>
        <td className="p-2">
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
            <div className="mt-0 mb-4 p-4">
              <table className="w-full text-xs md:text-sm">
                <thead>
                  <tr>
                    <th className="px-2 py-2 md:px-4">SKU</th>
                    <th className="px-2 py-2 md:px-4">PRODUCT</th>
                    <th className="px-2 py-2 md:px-4 text-right">PRICE</th>
                    <th className="px-2 py-2 md:px-4 text-right">QUANTITY</th>
                    <th className="px-2 py-2 md:px-4 text-right">TOTAL</th>
                    <th className="px-2 py-2 md:px-4 text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderItems.map((item, index) => (
                    <tr className="border" key={index}>
                      <td className="px-2 py-2 md:px-4 text-center">
                        #{item.SKU}
                      </td>
                      <td className="px-2 py-2 md:px-4  text-center">
                        {item.product}
                      </td>
                      <td className="px-2 py-2 md:px-4 text-right ">
                        ${item.price}
                      </td>
                      <td className="px-2 py-2 md:px-4 text-right">
                        x{item.quantity}
                      </td>
                      <td className="px-2 py-2 md:px-4 text-right">
                        ${item.quantity * item.price}
                      </td>
                      <td className="px-2 py-2 md:px-4 text-right"></td>
                    </tr>
                  ))}

                  <tr>
                    <td className="px-2 py-2 md:px-4" rowSpan={3}></td>
                    <td className="px-2 py-2 md:px-4" colSpan={2}>
                      Subtotal
                    </td>
                    <td className="px-2 py-2 md:px-4 text-right" colSpan={2}>
                      ${totalPrice}
                    </td>
                  </tr>

                  <tr>
                    <td className="px-2 py-2 md:px-4">Tax</td>
                    <td className="px-2 py-2 md:px-4 text-right">12%</td>
                    <td className="px-2 py-2 md:px-4 text-right" colSpan={2}>
                      ${(totalPrice * 0.12).toFixed(2)}
                    </td>
                  </tr>

                  <tr>
                    <td className="px-2 py-2 md:px-4" colSpan={2}>
                      Shipping
                    </td>
                    <td className="px-2 py-2 md:px-4 text-right" colSpan={2}>
                      $10
                    </td>
                  </tr>

                  <tr>
                    <td className="px-2 py-2 md:px-4"></td>
                    <td className="px-2 py-2 md:px-4" colSpan={2}>
                      Total
                    </td>
                    <td
                      className="px-2 py-2 md:px-4 text-right font-bold"
                      colSpan={2}
                    >
                      ${totalPrice + 10 + totalPrice * 0.12}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
