import React, { useState, useEffect } from 'react';

interface IBlog {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  date: string;
  author: string;
  content: string;
}

const getBlogs = async (): Promise<IBlog[]> => {
  const response = await fetch('https://friends-backend-u2ve.onrender.com/api/getblogs');
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  const data = await response.json();
  return data;
};

const ManageBlog: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingBlog, setEditingBlog] = useState<IBlog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newImage, setNewImage] = useState<File | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const data = await getBlogs();
      setBlogs(data);
    } catch (err) {
      setError('An error occurred while fetching blogs.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

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

      setNewImage(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editingBlog) return;
    
    const { name, value } = e.target;
    setEditingBlog({
      ...editingBlog,
      [name]: value
    });
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingBlog) return;

    const formData = new FormData();
    formData.append("title", editingBlog.title);
    formData.append("subtitle", editingBlog.subtitle);
    formData.append("description", editingBlog.description);
    formData.append("date", editingBlog.date);
    formData.append("author", editingBlog.author);
    formData.append("content", editingBlog.content);
    
    if (newImage) {
      formData.append("image", newImage);
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://friends-backend-u2ve.onrender.com/api/updateblogs/${editingBlog._id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        await fetchBlogs();
        setIsModalOpen(false);
        setEditingBlog(null);
        setNewImage(null);
      } else {
        alert('Failed to update blog.');
      }
    } catch (err) {
      alert('An error occurred while updating the blog.');
      console.error(err);
    }
  };

  const handleEdit = (blog: IBlog) => {
    setEditingBlog(blog);
    setNewImage(null);
    setIsModalOpen(true);
  };

  const handleDelete = async (blogId: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://friends-backend-u2ve.onrender.com/api/deleteblog/${blogId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setBlogs(blogs.filter((b) => b._id !== blogId));
        } else {
          alert('Failed to delete blog post.');
        }
      } catch (err) {
        alert('An error occurred while deleting the blog post.');
        console.error(err);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingBlog(null);
    setNewImage(null);
  };

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading blogs...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">Manage Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col justify-between">
            <img src={`data:image/jpeg;base64,${blog.image}`} alt={blog.title} className="w-full h-56 object-cover rounded-t-lg" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-purple-800">{blog.title}</h3>
              <p className="text-gray-700 font-semibold">{blog.subtitle}</p>
              <p className="text-sm text-gray-500">Author: {blog.author}</p>
              <p className="text-sm text-gray-500">Date: {blog.date}</p>
            </div>
            <div className="p-5 flex justify-end gap-3">
              <button onClick={() => handleEdit(blog)} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Edit</button>
              <button onClick={() => handleDelete(blog._id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && editingBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-3xl font-bold mb-6 text-purple-800">Edit Blog: {editingBlog.title}</h2>
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    value={editingBlog.title}
                    onChange={handleChange} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" 
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                  <input 
                    type="text" 
                    name="subtitle" 
                    id="subtitle" 
                    value={editingBlog.subtitle}
                    onChange={handleChange} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" 
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                  <input 
                    type="text" 
                    name="author" 
                    id="author" 
                    value={editingBlog.author}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" 
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    id="date" 
                    value={editingBlog.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" 
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  name="description" 
                  id="description" 
                  value={editingBlog.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" 
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea 
                  name="content" 
                  id="content" 
                  value={editingBlog.content}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" 
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  Blog Image (Max 5MB) - Leave empty to keep current image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                />
                {newImage && (
                  <p className="text-sm text-green-600 mt-2">New image selected: {newImage.name}</p>
                )}
              </div>

              <div className="flex justify-end gap-4">
                <button type="button" onClick={closeModal} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">Cancel</button>
                <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Update Blog</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBlog;