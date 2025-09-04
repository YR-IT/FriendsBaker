
import React, { useState } from 'react';
import UploadProduct from './UploadProduct';
import EditProducts from './EditProducts';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className="container mx-auto p-20">
      <div className="flex justify-center border-b mb-4">
        <button
          className={`px-4 py-2 text-lg font-medium ${
            activeTab === 'upload'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('upload')}
        >
          Upload Product
        </button>
        <button
          className={`px-4 py-2 text-lg font-medium ${
            activeTab === 'edit'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('edit')}
        >
          Edit Products
        </button>
      </div>
      <div>
        {activeTab === 'upload' && <UploadProduct />}
        {activeTab === 'edit' && <EditProducts />}
      </div>
    </div>
  );
};

export default AdminPanel;
