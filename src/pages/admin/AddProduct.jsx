import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaImage, FaTags } from 'react-icons/fa';
import { SidebarContext } from '../../context/SidebarContext';
import { addProductService } from '../../service/admin/admin.service';
import { successToast, errorToast } from '../../hooks/toast.hooks';
import PendualLoader from '../../comoponent/Loader/PendualLoader';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddProduct = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [value, setValue] = useState('');
  
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
    isFeatured: false,
    isActive: true,
    video_url: ''
  });

  const { isToggle } = useContext(SidebarContext);
  const [imagePreviews, setImagePreviews] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Reset category when type changes
    if (name === 'type') {
      setFormData((prevData) => ({ ...prevData, category: '' }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      images: files.map((file) => ({ url: URL.createObjectURL(file), file })),
    }));
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleVariantChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newVariants = [...prevData.variants];
      newVariants[index] = { ...newVariants[index], [name]: value };
      return { ...prevData, variants: newVariants };
    });
  };

  const addVariantField = () => {
    setFormData((prevData) => ({
      ...prevData,
      variants: [...prevData.variants, { color: '', size: '', additionalPrice: '' }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.images.length === 0) {
      return errorToast('At least one image is required.');
    }
  
    setIsSubmitting(true);
  
    const formPayload = new FormData();
  
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        if (key === 'images') {
          formData[key].forEach((image) => {
            formPayload.append('images', image.file);
          });
        } else if (key === 'variants') {
          formData[key].forEach((variant, index) => {
            formPayload.append(`variants[${index}][color]`, variant.color);
            formPayload.append(`variants[${index}][size]`, variant.size);
            formPayload.append(`variants[${index}][additionalPrice]`, variant.additionalPrice);
          });
        }
      } else {
        formPayload.append(key, formData[key]);
      }
    }
  
    try {
      const response = await addProductService(formPayload);
      if (response.data && response.data.statusCode === 201) {
        successToast(response.data.message);
        setImagePreviews([]);
        setFormData({
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
          isFeatured: false,
          isActive: false,
        });
      } else {
        errorToast(response.data.error.message || 'Failed to add product');
      }
    } catch (error) {
      console.error(error);
      errorToast('Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`transition-transform duration-300 w-full overflow-hidden mt-10 ease-in-out p-6 ${isToggle ? 'translate-x-56 md:w-[80%]' : 'translate-x-0 w-full'}`} style={{ background: '#ffffff' }}>
      <div className="shadow-lg rounded-lg p-6 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Add New Product</h2>
        {isSubmitting ? (
          <PendualLoader />
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Type</label>
                <select name="type" value={formData.type} onChange={handleChange} className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                  <option value="" disabled>Select Type</option>
                  <option value="Kids Wear">Kids Wear</option>
                  <option value="Cosmetic">Cosmetic</option>
                </select>
              </div>
              {['name', 'price', 'video_url', 'description', 'category', 'stock', 'brand', 'sku'].map((field) => (
  <div className="mb-4" key={field}>
    <label className="block text-gray-700 font-medium">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
    {field === 'description' ? (
      <ReactQuill theme="snow" value={formData.description}        onChange={(value) => setFormData((prevData) => ({ ...prevData, description: value }))} className='h-full mb-3' />
    ) : (
      <input 
        type={field === 'price' ? 'number' : field === 'video_url' ? 'text' : 'text'} 
        name={field} 
        value={formData[field]} 
        onChange={handleChange} 
        placeholder={`Product ${field}`} 
        className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
        required 
      />
    )}
    {field === 'category' && (
      <select name={field} value={formData[field]} onChange={handleChange} className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        <option value="" disabled>Select Category</option>
        {formData.type === 'Kids Wear' && (
          <>
            <option value="Boy">Boy</option>
            <option value="Girl">Girl</option>
            <option value="both">Both</option>
          </>
        )}
        {formData.type === 'Cosmetic' && (
          <>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Skincare">Skincare</option>
          </>
        )}
      </select>
    )}
  </div>
))}

            </div>

            <div className="mb-6">
              <label className="text-gray-700 font-medium flex items-center">
                <FaImage className="mr-2 text-gray-500" />
                <span>Images (at least one required)</span>
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

            <div className="mb-6">
              <label className="text-gray-700 font-medium flex items-center">
                <FaTags className="mr-2 text-gray-500" />
                <span>Tags (comma-separated)</span>
              </label>
              <input type="text" name="tags" value={formData.tags} onChange={handleChange} className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium">Variants</label>
              {formData.variants.map((variant, index) => (
                <div key={index} className="mb-4 flex flex-col gap-2">
                  <input type="text" name="color" value={variant.color} onChange={(e) => handleVariantChange(index, e)} placeholder="Color" className="border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  <input type="text" name="size" value={variant.size} onChange={(e) => handleVariantChange(index, e)} placeholder="Size" className="border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  <input type="number" name="additionalPrice" value={variant.additionalPrice} onChange={(e) => handleVariantChange(index, e)} placeholder="Additional Price" className="border border-gray-300 bg-white text-gray-900 rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              ))}
              <button type="button" onClick={addVariantField} className="text-blue-500 hover:underline">Add Another Variant</button>
            </div>

            <div className="mb-6 flex items-center">
              <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={(e) => setFormData((prevData) => ({ ...prevData, isFeatured: e.target.checked }))} className="mr-2" />
              <label className="text-gray-700">Featured Product</label>
            </div>
            <div className="mb-6 flex items-center">
              <input type="checkbox" name="isActive" checked={formData.isActive} onChange={(e) => setFormData((prevData) => ({ ...prevData, isActive: e.target.checked }))} className="mr-2" />
              <label className="text-gray-700">Active Product</label>
            </div>

            <button type="submit" className="bg-black text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Add Product
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
