import { useState } from 'react';
import ProductPreview from './ProductPreview';
import MobileInputFields from './inputFields/MobileInputFields';
import ClothesInputFields from './inputFields/ClothesInputFields';
import LaptopInputFields from './inputFields/LaptopInputFields';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProduct } from './productSlice';

const AddProduct = () => {
  const [category, setCategory] = useState('');
  const { title, price, discount, imageUrls, stock, products } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const generateId = () =>
    `id-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;

  const GeneratedId = generateId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      id: GeneratedId,
      price,
      discount,
      stock,
      imageUrls,
    };

    dispatch(createNewProduct(newProduct));
  };
  console.log(products);
  const renderFields = () => {
    switch (category) {
      case 'Clothes':
        return <ClothesInputFields />;
      case 'Laptop':
        return <LaptopInputFields />;

      case 'Mobile Phones':
        return <MobileInputFields />;
      default:
        return <p className="text-gray-500">Please select a category.</p>;
    }
  };
  return (
    <div className=" grid lg:grid-cols-[1fr,1fr] p-6 gap-10">
      <div className="p-6 bg-white rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Add New Product
          </h1>
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
            <option value="Laptop">Laptop</option>
            <option value="Mobile Phones">Mobile Phones</option>
          </select>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {renderFields()}
          {category === '' || (
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-medium font-bold text-black bg-gray-300 hover:bg-gray-200  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Add Product
            </button>
          )}
        </form>
      </div>
      <div className="bg-white rounded-lg hidden lg:block">
        <ProductPreview type={category} />
      </div>
    </div>
  );
};

export default AddProduct;
