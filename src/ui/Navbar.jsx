/* eslint-disable no-unused-vars */
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSideMenu } from './uiSlice';

const Navbar = () => {
  const location = useLocation();
  const pathToTitleMap = {
    '/orders': 'Order Management',
    '/orders/pending': 'Order Management',
    '/orders/shipped': 'Order Management',
    '/orders/delivered': 'Order Management',
    '/orders/cancelled': 'Order Management',
    '/customers': 'Customers',
    '/dashboard': 'Dashboard',
    '/add-products': 'Add Product',
    '/products-list': 'Product List',
    '/profile': 'Profile',
  };
  const title = pathToTitleMap[location.pathname] || '';

  const dispatch = useDispatch();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function toggleMenu() {}

  return (
    <nav className="bg-gray-100 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between px-4 py-3 ">
        <div className="flex items-center text-gray-700 gap-4">
          <button onClick={() => dispatch(toggleSideMenu())}>
            <MenuIcon />
          </button>
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <h1 className="text-lg font-semibold text-gray-400">
              {location.pathname}
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-gray-700">
          <button>
            <MailOutlineOutlinedIcon />
          </button>

          <button>
            <NotificationsNoneOutlinedIcon />
          </button>

          <Link
            to="/profile"
            onClick={toggleMenu}
            className="relative text-gray-700"
          >
            <AccountCircleOutlinedIcon className="text-lg" />
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="flex flex-col space-y-2 p-4 bg-white absolute right-0 text-black">
          <button className="hover:text-gray-500">Messages</button>
          <button className="hover:text-gray-500">Notifications</button>
          <button className="hover:text-gray-500">Profile</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
