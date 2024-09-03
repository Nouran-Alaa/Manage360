import { useState } from 'react';
import TagsInput from './TagsInput';

const AddProduct = () => {
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);

  const renderFields = () => {
    switch (category) {
      case 'Clothes':
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description:
              </label>
              <textarea
                name="Description"
                rows="4"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none text-sm"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Size:
              </label>
              <select
                name="size"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm"
              >
                <option value="XS">XS</option>
                <option value="SM">SM</option>
                <option value="LG">LG</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Color:
              </label>
              <input
                type="text"
                name="color"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Price:
              </label>
              <input
                type="number"
                name="price"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Discount:
              </label>
              <input
                type="number"
                name="discount"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Stock:
              </label>
              <input
                type="number"
                name="stock"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Brand:
              </label>
              <input
                type="text"
                name="brand"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Tags:
              </label>
              <TagsInput tags={tags} setTags={setTags} />
            </div>
          </>
        );
      case 'Laptop and PC':
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Processor:
              </label>
              <input
                type="text"
                name="processor"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description:
              </label>
              <textarea
                name="Description"
                rows="4"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none text-sm"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Brand:
              </label>
              <input
                type="text"
                name="brand"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                GPU:
              </label>
              <input
                type="text"
                name="gpu"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                RAM:
              </label>
              <input
                type="text"
                name="ram"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Hard Drive:
              </label>
              <input
                type="text"
                name="hardDrive"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Price:
              </label>
              <input
                type="number"
                name="price"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Discount:
              </label>
              <input
                type="number"
                name="discount"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Stock:
              </label>
              <input
                type="number"
                name="stock"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Tags:
              </label>
              <TagsInput tags={tags} setTags={setTags} />
            </div>
          </>
        );

      case 'Mobile Phones':
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Brand:
              </label>
              <input
                type="text"
                name="brand"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Processor:
              </label>
              <input
                type="text"
                name="processor"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description:
              </label>
              <textarea
                name="Description"
                rows="4"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none text-sm"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                RAM:
              </label>
              <input
                type="text"
                name="ram"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Storage:
              </label>
              <input
                type="text"
                name="storage"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Battery Capacity:
              </label>
              <input
                type="text"
                name="batteryCapacity"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Price:
              </label>
              <input
                type="number"
                name="price"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Discount:
              </label>
              <input
                type="number"
                name="discount"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Stock:
              </label>
              <input
                type="number"
                name="stock"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Tags:
              </label>
              <TagsInput tags={tags} setTags={setTags} />
            </div>
          </>
        );
      default:
        return <p className="text-gray-500">Please select a category.</p>;
    }
  };
  return (
    <div className="grid grid-cols-[1fr,1fr] p-6 gap-10">
      <div className="p-6 bg-white rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Add New Product
          </h1>
          <button>Draft</button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Category:
          </label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm"
          >
            <option value="">Select Category</option>
            <option value="Clothes">Clothes</option>
            <option value="Laptop and PC">Laptop and PC</option>
            <option value="Mobile Phones">Mobile Phones</option>
            {/* <option value="Furniture">Furniture</option>
            <option value="Books">Books</option>
            <option value="Groceries">Groceries</option> */}
          </select>
        </div>
        <form className="space-y-6">
          {renderFields()}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-medium font-bold text-black bg-gray-300 hover:bg-gray-200  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Add Product
          </button>
        </form>
      </div>
      <div className="bg-white rounded-lg"></div>
    </div>
  );
};

export default AddProduct;
