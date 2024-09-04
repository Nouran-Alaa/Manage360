import TagsInput from './TagsInput';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBrand,
  setColors,
  setDescription,
  setDiscount,
  setName,
  setPrice,
  setSizes,
  setStock,
  setTags,
} from '../productSlice';
import { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const ClothesInputFields = () => {
  const {
    sizes,
    colors,
    tags,
    name,
    brand,
    description,
    price,
    discount,
    stock,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="flex gap-4">
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            type="text"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Brand:
          </label>
          <input
            value={brand}
            onChange={(e) => dispatch(setBrand(e.target.value))}
            type="text"
            name="brand"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description:
        </label>
        <textarea
          value={description}
          onChange={(e) => dispatch(setDescription(e.target.value))}
          name="Description"
          rows="4"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none text-sm"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Size:</label>
        <TagsInput
          tags={sizes}
          setTags={(tags) => dispatch(setSizes(tags))}
          title="size"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Color:
        </label>
        <TagsInput
          tags={colors}
          setTags={(tags) => dispatch(setColors(tags))}
          title="color"
        />
      </div>
      <div className="flex gap-4">
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            value={price}
            onChange={(e) => dispatch(setPrice(Number(e.target.value)))}
            type="number"
            name="price"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Discount:
          </label>
          <input
            value={discount}
            onChange={(e) => dispatch(setDiscount(Number(e.target.value)))}
            type="number"
            name="discount"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Stock:
          </label>
          <input
            value={stock}
            onChange={(e) => dispatch(setStock(Number(e.target.value)))}
            type="number"
            name="stock"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Tags:</label>
        <TagsInput tags={tags} setTags={(tags) => dispatch(setTags(tags))} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Upload Images:
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Image Previews:
        </label>
        <div className="flex gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(image)}
                alt={`preview-${index}`}
                className="w-32 h-32 object-cover border"
              />
              <CloseOutlinedIcon onClick={() => handleRemoveImage(index)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClothesInputFields;
