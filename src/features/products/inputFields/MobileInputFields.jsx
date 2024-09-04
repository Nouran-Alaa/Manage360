import { useDispatch, useSelector } from 'react-redux';
import {
  setBatteryCapacity,
  setBrand,
  setCamera,
  setColors,
  setDescription,
  setDiscount,
  setMobileRAM,
  setName,
  setPrice,
  setProcessor,
  setStock,
  setStorage,
  setTags,
  setImages,
} from '../productSlice';
import TagsInput from './TagsInput';

const MobileInputFields = () => {
  const {
    tags,
    name,
    brand,
    description,
    price,
    discount,
    stock,
    processor,
    camera,
    mobileRAM,
    storage,
    batteryCapacity,
    colors,
    imageUrls,
  } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex gap-4">
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            required
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            type="text"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Brand:
          </label>
          <input
            required
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
          required
          value={description}
          onChange={(e) => dispatch(setDescription(e.target.value))}
          name="Description"
          rows="4"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none text-sm"
        ></textarea>
      </div>
      <div className="flex gap-4">
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Processor:
          </label>
          <input
            required
            value={processor}
            onChange={(e) => dispatch(setProcessor(e.target.value))}
            type="text"
            name="processor"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            RAM:
          </label>
          <input
            required
            value={mobileRAM}
            onChange={(e) => dispatch(setMobileRAM(e.target.value))}
            type="text"
            name="ram"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Camera:
          </label>
          <input
            required
            value={camera}
            onChange={(e) => dispatch(setCamera(e.target.value))}
            type="text"
            name="camera"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Color:
          </label>
          <TagsInput
            required
            tags={colors}
            setTags={(tags) => dispatch(setColors(tags))}
            title="color"
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Storage:
          </label>
          <TagsInput
            tags={storage}
            setTags={(tags) => dispatch(setStorage(tags))}
            title="Storage"
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Battery Capacity:
          </label>
          <input
            value={batteryCapacity}
            onChange={(e) => dispatch(setBatteryCapacity(e.target.value))}
            type="text"
            name="batteryCapacity"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            value={price}
            onChange={(e) => dispatch(setPrice(e.target.value))}
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
            onChange={(e) => dispatch(setDiscount(e.target.value))}
            type="number"
            name="discount"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Stock:
          </label>
          <input
            value={stock}
            onChange={(e) => dispatch(setStock(e.target.value))}
            type="number"
            name="stock"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Tags:</label>
        <TagsInput tags={tags} setTags={setTags} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Upload Images:
        </label>
        <TagsInput
          tags={imageUrls}
          setTags={(tags) => dispatch(setImages(tags))}
          title="Image URL"
        />
      </div>
    </>
  );
};

export default MobileInputFields;
