import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaImage, FaTags, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { SidebarContext } from '../../context/SidebarContext';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    price: '',
    description: '',
    category: '',
    stock: '',
    brand: '',
    sku: '',
    images: [],
    tags: '',
    variants: [{ color: '', size: '', additionalPrice: '' }],
    warranty: '',
    isFeatured: false,
    isActive: false,
  });

  const { isToggle } = useContext(SidebarContext);
  const [imagePreviews, setImagePreviews] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files.map((file) => ({ url: URL.createObjectURL(file), file })),
    });
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleVariantChange = (index, e) => {
    const { name, value } = e.target;
    const newVariants = [...formData.variants];
    newVariants[index] = { ...newVariants[index], [name]: value };
    setFormData({ ...formData, variants: newVariants });
  };

  const addVariantField = () => {
    setFormData({
      ...formData,
      variants: [...formData.variants, { color: '', size: '', additionalPrice: '' }]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., API call)
    console.log('Product Data:', formData);
    navigate('/admin/products'); // Navigate back to products list or any other page
  };

  return (
    <div className={`transition-transform duration-300 w-full  overflow-hidden mt-10 ease-in-out p-6 ${isToggle ? 'translate-x-56 md:w-[80%]' : 'translate-x-0 w-full'}`} style={{ background: '#ffffff' }}>
      <div className="shadow-lg rounded-lg p-6 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange}
              placeholder='Product Name' 
              className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3
               shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Type</label>
              <input type="text" name="type" value={formData.type} onChange={handleChange} 
              placeholder='Product type'
              className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Price</label>
              <input type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Category</label>
              <select name="category" value={formData.category} onChange={handleChange} className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required >
                <option value=""></option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Stock</label>
              <input type="number" name="stock" value={formData.stock} onChange={handleChange} className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Brand</label>
              <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">SKU</label>
              <input type="text" name="sku" value={formData.sku} onChange={handleChange} className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
          </div>

          {/* Images */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium flex items-center">
              <FaImage className="mr-2 text-gray-500" />
              <span>Images</span>
            </label>
            <input type="file" multiple onChange={handleImageChange} className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {imagePreviews.map((url, index) => (
                <div key={index} className="relative">
                  <img src={url} alt={`Preview ${index}`} className="w-full h-auto rounded-md shadow-md" />
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium flex items-center">
              <FaTags className="mr-2 text-gray-500" />
              <span>Tags (comma-separated)</span>
            </label>
            <input type="text" name="tags" value={formData.tags} onChange={handleChange} className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          {/* Variants */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium">Variants</label>
            {formData.variants.map((variant, index) => (
              <div key={index} className="mb-4 flex flex-col gap-2">
                <input
                  type="text"
                  name="color"
                  value={variant.color}
                  onChange={(e) => handleVariantChange(index, e)}
                  placeholder="Color"
                  className="border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="size"
                  value={variant.size}
                  onChange={(e) => handleVariantChange(index, e)}
                  placeholder="Size"
                  className="border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="number"
                  name="additionalPrice"
                  value={variant.additionalPrice}
                  onChange={(e) => handleVariantChange(index, e)}
                  placeholder="Additional Price"
                  className="border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
            <button type="button" onClick={addVariantField} className="text-blue-500 hover:underline">Add Another Variant</button>
          </div>

          {/* Additional Information */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium">Warranty</label>
            <input type="text" name="warranty" value={formData.warranty} onChange={handleChange} className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-6 flex items-center">
            <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })} className="mr-2" />
            <label className="text-gray-700">Featured Product</label>
          </div>
          <div className="mb-6 flex items-center">
            <input type="checkbox" name="isActive" checked={formData.isActive} onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })} className="mr-2" />
            <label className="text-gray-700">Active Product</label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-black text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
