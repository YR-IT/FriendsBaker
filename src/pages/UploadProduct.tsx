import React, { useState, useEffect } from 'react';

interface Category {
  _id: string;
  name: string;
}

const UploadProduct: React.FC = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    rating: '0',
    category: '',
    image: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string>('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [showCustomCategory, setShowCustomCategory] = useState(false);
  const [customCategory, setCustomCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoadingCategories(true);
      try {
        const response = await fetch('https://friends-backend-u2ve.onrender.com/api/getcategory');
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error('Failed to fetch categories');
          setMessage('Failed to load categories');
          setMessageType('error');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        setMessage('Error loading categories');
        setMessageType('error');
      } finally {
        setIsLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'category' && value === 'add-new') {
      setShowCustomCategory(true);
      setProductData({ ...productData, category: '' });
    } else {
      setShowCustomCategory(false);
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setMessage('File size must be less than 5MB');
        setMessageType('error');
        return;
      }

      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        setMessage('Please select a valid image file (JPEG, PNG, GIF, WebP)');
        setMessageType('error');
        return;
      }

      setProductData({ ...productData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setMessage(''); // Clear any previous error
    }
  };

  const validateForm = () => {
    const { name, price, rating, category, image } = productData;
    const finalCategory = showCustomCategory ? customCategory : category;

    if (!name.trim()) {
      setMessage('Product name is required');
      setMessageType('error');
      return false;
    }

    if (!price.trim()) {
      setMessage('Product price is required');
      setMessageType('error');
      return false;
    }

    const priceNum = parseFloat(price);
    if (isNaN(priceNum) || priceNum <= 0) {
      setMessage('Please enter a valid price greater than 0');
      setMessageType('error');
      return false;
    }

    const ratingNum = parseFloat(rating);
    if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 5) {
      setMessage('Rating must be between 0 and 5');
      setMessageType('error');
      return false;
    }

    if (!finalCategory.trim()) {
      setMessage('Product category is required');
      setMessageType('error');
      return false;
    }

    if (!image) {
      setMessage('Product image is required');
      setMessageType('error');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const finalCategory = showCustomCategory ? customCategory : productData.category;

    const formData = new FormData();
    formData.append('name', productData.name.trim());
    formData.append('price', productData.price.trim());
    formData.append('rating', productData.rating);
    formData.append('category', finalCategory.trim());
    if (productData.image) {
      formData.append('image', productData.image);
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('Authentication token not found. Please login again.');
        setMessageType('error');
        return;
      }

      const response = await fetch('https://friends-backend-u2ve.onrender.com/api/addproduct', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const responseData = await response.json();

      if (response.ok) {
        setMessage('Product uploaded successfully!');
        setMessageType('success');
        // Reset form
        setProductData({
          name: '',
          price: '',
          rating: '0',
          category: '',
          image: null,
        });
        setImagePreview('');
        setShowCustomCategory(false);
        setCustomCategory('');
        // Reset file input
        const fileInput = document.getElementById('image') as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        if (response.status === 401) {
          setMessage('Unauthorized. Please login again.');
        } else if (response.status === 403) {
          setMessage('You do not have permission to upload products.');
        } else {
          setMessage(responseData.message || 'Failed to upload product.');
        }
        setMessageType('error');
      }
    } catch (error) {
      console.error('Upload error:', error);
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setMessage('Network error. Please check your connection.');
      } else {
        setMessage('Failed to upload product. Please try again.');
      }
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-15 p-4 max-w-2xl mx-auto bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">Upload Product</h1>
      
      {message && (
        <div className={`mb-4 p-4 rounded-md ${
          messageType === 'success' 
            ? 'bg-green-100 border border-green-400 text-green-700' 
            : 'bg-red-100 border border-red-400 text-red-700'
        }`}>
          <p className="text-sm">{message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-gray-50 rounded-lg shadow-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Product Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-200"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Product Price ($) *
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            disabled={isLoading}
            min="0"
            step="0.01"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-200"
            placeholder="0.00"
          />
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
            Product Rating (0-5) *
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={productData.rating}
            onChange={handleChange}
            disabled={isLoading}
            min="0"
            max="5"
            step="0.1"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-200"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Product Category *
          </label>
          {isLoadingCategories ? (
            <div className="mt-1 block w-full px-3 py-2 text-gray-500">Loading categories...</div>
          ) : (
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-200"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
              <option value="add-new">Add new category...</option>
            </select>
          )}
        </div>

        {showCustomCategory && (
          <div>
            <label htmlFor="customCategory" className="block text-sm font-medium text-gray-700 mb-1">
              New Category Name *
            </label>
            <input
              type="text"
              id="customCategory"
              name="customCategory"
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-200"
              placeholder="Enter new category name"
            />
          </div>
        )}

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            Product Image * (Max 5MB)
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
            onChange={handleFileChange}
            disabled={isLoading}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {imagePreview && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700">Image Preview:</p>
            <img 
              src={imagePreview} 
              alt="Product preview" 
              className="mt-2 h-48 w-auto object-cover rounded-lg border border-gray-300 shadow-sm" 
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || isLoadingCategories}
          className={`w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors ${
            isLoading || isLoadingCategories
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {isLoading ? 'Uploading...' : 'Upload Product'}
        </button>
      </form>
    </div>
  );
};

export default UploadProduct;
