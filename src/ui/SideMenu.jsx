/* eslint-disable react/prop-types */

import { Link, useLocation } from 'react-router-dom';

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import { useSelector } from 'react-redux';
const navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <HomeOutlinedIcon />,
  },
  {
    segment: 'orders',
    title: 'Order Management',
    icon: <ShoppingCartOutlinedIcon />,
  },
  {
    segment: 'customers',
    title: 'Customers',
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Products',
  },
  {
    segment: 'add-products',
    title: 'Add Products',
    icon: <AddCircleOutlineOutlinedIcon />,
  },
  {
    segment: 'products-list',
    title: 'Product List',
    icon: <BallotOutlinedIcon />,
  },
];

const SideMenu = () => {
  const { isSideMenuOpen } = useSelector((state) => state.ui);
  const currentPath = useLocation();
  return (
    <div
      className={`fixed left-0 h-screen bg-white text-black shadow-lg transition-transform transform w-64 flex flex-col justify-between ${
        isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <ul className="p-4 space-y-4">
        {navigation.map((item, index) => {
          if (item.kind === 'header') {
            return (
              <li key={index} className="font-bold uppercase text-gray-600">
                {item.title}
              </li>
            );
          } else if (item.kind === 'divider') {
            return <hr key={index} className="border-gray-300" />;
          } else {
            return (
              <li key={index}>
                <Link
                  to={`/${item.segment}`}
                  className={`flex items-center space-x-3 p-2 rounded ${
                    currentPath.pathname === `/${item.segment}`
                      ? 'bg-gray-200 font-semibold text-black'
                      : ' text-gray-400'
                  }`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
                {item.children && (
                  <ul className="pl-6 mt-2 space-y-2">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link
                          to={`/${item.segment}/${child.segment}`}
                          className={`flex items-center space-x-3 p-2 rounded ${
                            currentPath.pathname ===
                            `/${item.segment}/${child.segment}`
                              ? 'bg-gray-200'
                              : ''
                          }`}
                        >
                          {child.icon}
                          <span>{child.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }
        })}
      </ul>
  
    </div>
  );
};

export default SideMenu;
