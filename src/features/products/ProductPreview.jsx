/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  setSelectedCPU,
  setSelectedGPU,
  setSelectedHardDrive,
  setSelectedRAM,
  setSelectedScreenSize,
  setSelectedStorage,
} from './productSlice';

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MemoryIcon from '@mui/icons-material/Memory';
import CameraIcon from '@mui/icons-material/Camera';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { colorMap } from '../../helper/helper';

const ProductPreview = ({ type }) => {
  const [selectedSize, setSelectedSize] = useState(41);
  const [selectedColor, setSelectedColor] = useState('white');
  const dispatch = useDispatch();
  const {
    sizes,
    colors,
    tags,
    title,
    brand,
    description,
    price,
    discount,
    stock,
    gpu,
    cpu,
    ram,
    hardDrive,
    screenSize,
    selectedGPU,
    selectedCPU,
    selectedHardDrive,
    selectedScreenSize,
    selectedRAM,
    storage,
    selectedStorage,
    processor,
    camera,
    mobileRAM,
    imageUrls,
  } = useSelector((state) => state.product);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-5">
          <Carousel showThumbs={false} infiniteLoop>
            {imageUrls.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Product Image ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-md font-semiBold">{brand}</h1>
          <h1 className="text-2xl font-bold capitalize">{title}</h1>
          <div className="flex items-center my-2">
            <div className="flex text-yellow-500">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <StarBorderOutlinedIcon key={i} />
                ))}
            </div>
            <span className="text-gray-500 ml-2">{0} reviews</span>
          </div>
          <div className="my-4 text-sm flex gap-1">
            <span className="font-semibold">Stock: </span>
            <p className="font-bold">{stock}</p>
          </div>
          <p className="text-xl font-bold text-gray-800 space-x-2">
            <span className={discount > 0 ? 'line-through' : ''}>
              $ {price?.toFixed(2)}
            </span>
            {discount > 0 && (
              <span>${(price - (price * discount) / 100)?.toFixed(2)}</span>
            )}
          </p>

          <div className="my-4">
            <span className="text-md font-semibold">Color: </span>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`h-8 w-8 rounded-full ${colorMap[color]} border-2`}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    borderColor: `${selectedColor === color ? 'black' : 'transparent'}`,
                  }}
                />
              ))}
            </div>
          </div>
          {type === 'Clothes' && (
            <>
              <div className="my-4">
                <span className="text-md font-semibold">Size: </span>
                <div className="grid grid-cols-7 gap-2 ">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`p-2 border rounded flex items-center justify-center ${selectedSize === size ? 'border-black' : 'border-gray-300'}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {type === 'Laptop' && (
            <>
              <div className="my-4">
                <span className="text-md font-semibold">Screen Size: </span>
                <div className="grid grid-cols-7 gap-2 ">
                  {screenSize.map((size) => (
                    <button
                      key={size}
                      className={`p-1 border rounded flex items-center justify-center ${selectedScreenSize === size ? 'border-black' : 'border-gray-300'}`}
                      onClick={() => dispatch(setSelectedScreenSize(size))}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="my-4">
                <span className="text-md font-semibold">Processor: </span>
                <div className="flex gap-2 flex-wrap">
                  {cpu.map((cpu) => (
                    <button
                      key={cpu}
                      className={`p-1 border rounded flex items-center justify-center ${selectedCPU === cpu ? 'border-black' : 'border-gray-300'}`}
                      onClick={() => dispatch(setSelectedCPU(cpu))}
                    >
                      {cpu}
                    </button>
                  ))}
                </div>
              </div>
              <div className="my-4">
                <span className="text-md font-semibold">Graphics Card: </span>
                <div className="flex flex-wrap gap-2 ">
                  {gpu.map((gpu) => (
                    <button
                      key={gpu}
                      className={`p-2 border rounded flex items-center justify-center ${selectedGPU === gpu ? 'border-black' : 'border-gray-300'}`}
                      onClick={() => dispatch(setSelectedGPU(gpu))}
                    >
                      {gpu}
                    </button>
                  ))}
                </div>
              </div>

              <div className="my-4">
                <span className="text-md font-semibold">RAM: </span>
                <div className="flex flex-wrap gap-2 ">
                  {ram.map((ram) => (
                    <button
                      key={ram}
                      className={`p-1 border rounded flex items-center justify-center ${selectedRAM === ram ? 'border-black' : 'border-gray-300'}`}
                      onClick={() => dispatch(setSelectedRAM(ram))}
                    >
                      {ram}
                    </button>
                  ))}
                </div>
              </div>

              <div className="my-4">
                <span className="text-md font-semibold">Hard Drive: </span>
                <div className="flex flex-wrap gap-2 ">
                  {hardDrive.map((hard) => (
                    <button
                      key={hard}
                      className={`p-1 border rounded flex items-center justify-center ${selectedHardDrive === hard ? 'border-black' : 'border-gray-300'}`}
                      onClick={() => dispatch(setSelectedHardDrive(hard))}
                    >
                      {hard}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {type === 'Mobile Phones' && (
            <>
              <div className="my-4">
                <span className="text-md font-semibold">Storage: </span>
                <div className="flex flex-wrap gap-2 ">
                  {storage.map((storage) => (
                    <button
                      key={storage}
                      className={`p-1 border rounded flex items-center justify-center ${selectedStorage === storage ? 'border-black' : 'border-gray-300'}`}
                      onClick={() => dispatch(setSelectedStorage(storage))}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>

              <div className="my-4 text-md flex gap-1">
                <span className="font-semibold">RAM: </span>
                <p>
                  <SdStorageIcon fontSize="small" />
                  {mobileRAM}
                </p>
              </div>

              <div className="my-4 text-md flex gap-1">
                <span className="font-semibold">Processor: </span>
                <p>
                  <MemoryIcon />
                  {processor}
                </p>
              </div>

              <div className="my-4 text-md flex gap-1">
                <span className="font-semibold">Camera: </span>
                <p>
                  <CameraIcon fontSize="small" />
                  {camera}
                </p>
              </div>
            </>
          )}

          <div className="my-4 flex gap-2">
            <button className="bg-black text-white p-3 rounded-lg flex items-center justify-center flex-1">
              <ShoppingCartOutlinedIcon className="mr-2" />
              Add to cart
            </button>
            <button className="bg-gray-300 mr-4 rounded-lg w-16">
              <FavoriteBorderOutlinedIcon />
            </button>
          </div>

          <div className="flex items-center mt-4">
            <span>Free delivery on orders over $30.00</span>
          </div>

          <div className="my-4">
            <span className="text-sm">Tags: </span>
            <div className="flex items-center gap-2 text-xs flex-wrap">
              {tags.map((tag, index) => (
                <span
                  className="text-black px-2 py-1 rounded-full border border-black"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t h-full mt-7 pt-4">
        <h1 className="text-lg font-semibold">Description</h1>
        <p className="text-sm h-40 overflow-y-auto mt-4">{description}</p>
      </div>
    </div>
  );
};

export default ProductPreview;
