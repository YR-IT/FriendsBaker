import React, { useState, useEffect } from 'react';
import { getProducts } from "../../data/products"
import type { IProduct } from "../../data/products"

interface ICategory {
    _id: string;
    name: string;
    image: string;
}

const getCategories = async (): Promise<ICategory[]> => {
    const response = await fetch('https://friends-backend-u2ve.onrender.com/api/getcategory');
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data;
};

const EditProducts: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState({
      id:'',
      name: '',
      price: '',
      rating: '0',
      category: '',
      image: null as File | null,
    });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a valid image file (JPEG, PNG, GIF, WebP)');
        return;
      }

      // Update the editingProduct state with the new image
      setEditingProduct({ ...editingProduct, image: file });
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError('An error occurred while fetching products.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
      if (data.length > 0) {
        setSelectedCategory(data[0].name);
      }
    } catch (err) {
      console.error('Failed to fetch categories', err);
    }
  };

  const handleEdit = (product: IProduct) => {
    setEditingProduct({
      ...product,
      price: product.price.toString(),
      rating: product.rating.toString(),
      id: product._id.toString(),
      image: null, // Image is not directly editable, user will upload new one
    });
    setIsModalOpen(true);
  
  };

  const handleDelete = async (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://friends-backend-u2ve.onrender.com/api/deleteproduct/${productId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setProducts(products.filter((p) => p._id !== productId));
        } else {
          alert('Failed to delete product.');
        }
      } catch (err) {
        alert('An error occurred while deleting the product.');
        console.error(err);
      }
    }
  };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setEditingProduct({ ...editingProduct, [name]: value });
};


  
  const handleAddCategory = async () => {
    if (newCategoryName.trim() === '') {
      alert('Category name cannot be empty.');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://friends-backend-u2ve.onrender.com/api/addcategory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name: newCategoryName }),
      });
      if (response.ok) {
        fetchCategories();
        setNewCategoryName('');
      } else {
        alert('Failed to add category.');
      }
    } catch (err) {
      alert('An error occurred while adding the category.');
      console.error(err);
    }
  };

  const handleDeleteCategory = async (categoryName: string) => {
    if (window.confirm(`Are you sure you want to delete the "${categoryName}" category?`)) {
      const category = categories.find(cat => cat.name === categoryName);
      if (!category) {
          alert('Category not found!');
          return;
      }
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://friends-backend-u2ve.onrender.com/api/deletecategory/${category.name}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          fetchProducts();
          fetchCategories();
        } else {
          alert('Failed to delete category.');
        }
      } catch (err) {
        alert('An error occurred while deleting the category.');
        console.error(err);
      }
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingProduct) return;

    const formData = new FormData();
    formData.append("name", editingProduct.name);
    formData.append("price", editingProduct.price);
    formData.append("rating", editingProduct.rating);
    formData.append("category", editingProduct.category);
    if (editingProduct.image) {
        formData.append("image", editingProduct.image);
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://friends-backend-u2ve.onrender.com/api/updateproduct/${editingProduct.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          // Don't set Content-Type header when sending FormData
        },
        body: formData, // Send FormData directly, not JSON.stringify
      });

      if (response.ok) {
        await fetchProducts();
        setIsModalOpen(false);
        setEditingProduct({
          id: '',
          name: '',
          price: '',
          rating: '0',
          category: '',
          image: null,
        });
    
      } else {
        alert('Failed to update product.');
      }
    } catch (err) {
      alert('An error occurred while updating the product.');
      console.error(err);
    }
  };

  const filteredProducts = products
    .filter(p => selectedCategory ? p.category === selectedCategory : true)
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading products...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4 flex gap-4">
      {/* Left Pane: Products */}
      <div className="w-3/4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product._id} className="border rounded-lg p-4 flex flex-col justify-between">
              <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">Category: {product.category}</p>
                <p className="text-sm text-gray-500">Rating: {product.rating} / 5</p>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button onClick={() => handleEdit(product)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                <button onClick={() => handleDelete(product._id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Pane: Categories */}
      <div className="w-1/4">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="New category name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
          />
          <button onClick={handleAddCategory} className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add Category</button>
        </div>
        <ul>
          {categories.map((category) => (
            <li
              key={category._id}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${selectedCategory === category.name ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            >
              <span className="capitalize">{category.name}</span>
              <button onClick={(e) => { e.stopPropagation(); handleDeleteCategory(category.name); }} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs">Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Edit {editingProduct.name}</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={editingProduct.name}
                  onChange={handleChange} 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                <input 
                  type="number" 
                  name="price" 
                  id="price" 
                  value={editingProduct.price}
                  onChange={handleChange} 
                  step="0.01" 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                <input 
                  type="number" 
                  name="rating" 
                  id="rating" 
                  value={editingProduct.rating} 
                  onChange={handleChange}
                  step="0.1" 
                  min="0" 
                  max="5" 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select
                    name="category"
                    id="category"
                    value={editingProduct.category}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                    {categories.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                    <option value="add-new">Add new category</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Product Image (Max 5MB)
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                  onChange={handleFileChange}
                  disabled={isLoading}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => { setIsModalOpen(false);  }} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProducts;