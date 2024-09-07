import { useDispatch, useSelector } from 'react-redux';
import TagsInput from './TagsInput';
import {
  setBrand,
  setColors,
  setCPU,
  setDescription,
  setDiscount,
  setGPU,
  setHardDrive,
  setImages,
  setName,
  setPrice,
  setRAM,
  setScreenSize,
  setStock,
  setTags,
} from '../productSlice';

const LaptopInputFields = () => {
  const {
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
    colors,
    imageUrls,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // Function to handle image upload

  return (
    <>
      <div className="flex gap-4">
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            required
            value={title}
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
          <TagsInput
            tags={cpu}
            setTags={(tags) => dispatch(setCPU(tags))}
            title="Processor"
          />
        </div>
        <div className="mb-4  flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Color:
          </label>
          <TagsInput
            tags={colors}
            setTags={(tags) => dispatch(setColors(tags))}
            title="color"
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            GPU:
          </label>
          <TagsInput
            tags={gpu}
            setTags={(tags) => dispatch(setGPU(tags))}
            title="Graphics Card"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            RAM:
          </label>
          <TagsInput
            tags={ram}
            setTags={(tags) => dispatch(setRAM(tags))}
            title="RAM"
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Screen Size:
          </label>
          <TagsInput
            tags={screenSize}
            setTags={(tags) => dispatch(setScreenSize(tags))}
            title="Screen Size"
          />
        </div>

        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Hard Drive:
          </label>
          <TagsInput
            tags={hardDrive}
            setTags={(tags) => dispatch(setHardDrive(tags))}
            title="Hard Drive"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="mb-4 flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            required
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
            required
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
            required
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

export default LaptopInputFields;
