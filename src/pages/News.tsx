import React, { useState } from 'react';
import { Search, Filter, Upload,  Calendar, Image as ImageIcon, X } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  dateCreated: string;
  lastModified: string;
  isActive: boolean;
  imageUrl?: string;
  tags: string[];
}

function App() {
  const [templates, setTemplates] = useState<Template[]>([
    {
      id: '1',
      name: 'Modern Invoice',
      description: 'Clean, professional invoice template with modern typography',
      category: 'Financial',
      dateCreated: '2024-01-15',
      lastModified: '2024-01-20',
      isActive: true,
      imageUrl: '/news/news1.jpg',
      tags: ['professional', 'clean', 'modern']
    },
    {
      id: '2',
      name: 'Business Proposal',
      description: 'Elegant proposal template for client presentations',
      category: 'Business',
      dateCreated: '2024-01-10',
      lastModified: '2024-01-18',
      isActive: true,
      imageUrl: '/news/news2.jpg',
      tags: ['elegant', 'presentation', 'client']
    },
    {
      id: '3',
      name: 'Service Contract',
      description: 'Comprehensive contract template for service agreements',
      category: 'Legal',
      dateCreated: '2024-01-05',
      lastModified: '2024-01-15',
      isActive: true,
      imageUrl: '/news/news4.jpg',
      tags: ['legal', 'contract', 'service']
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    imageUrl: '',
    tags: ''
  });

  const categories = ['All', 'Financial', 'Business', 'Legal', 'Marketing', 'HR', 'Other'];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTemplate: Template = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      category: formData.category,
      dateCreated: new Date().toISOString().split('T')[0],
      lastModified: new Date().toISOString().split('T')[0],
      isActive: true,
      imageUrl: formData.imageUrl || undefined,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };
    setTemplates([...templates, newTemplate]);
    setFormData({ name: '', description: '', category: '', imageUrl: '', tags: '' });
    setShowModal(false);
  };


  const getCategoryColor = (category: string) => {
    const colors = {
      Financial: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      Business: 'bg-blue-100 text-blue-700 border-blue-200',
      Legal: 'bg-purple-100 text-purple-700 border-purple-200',
      Marketing: 'bg-pink-100 text-pink-700 border-pink-200',
      HR: 'bg-orange-100 text-orange-700 border-orange-200',
      Other: 'bg-gray-100 text-gray-700 border-gray-200'
    };
    return colors[category as keyof typeof colors] || colors.Other;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
 

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" size={22} />
              <input
                type="text"
                placeholder="Search templates, tags, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg placeholder-slate-400"
              />
            </div>
            <div className="relative group">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" size={22} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-8 py-4 bg-white/80 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 appearance-none min-w-[200px] text-lg"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
            >
            
             {/* Image */}
<div className="relative h-80 overflow-hidden"> {/* ⬅ bigger height */}
  {template.imageUrl ? (
    <img
      src={template.imageUrl}
      alt={template.name}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
  ) : (
    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
      <ImageIcon size={64} className="text-slate-400" /> {/* ⬅ bigger placeholder */}
    </div>
  )}
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(template.category)}`}>
    {template.category}
  </div>
</div>


              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{template.description}</p>
                </div>

                {/* Tags */}
                {template.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-slate-500 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{template.lastModified}</span>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    template.isActive 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {template.isActive ? 'Active' : 'Inactive'}
                  </div>
                </div>

             
           
              </div>
            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-12 max-w-md mx-auto">
              <ImageIcon className="mx-auto text-slate-400 mb-6" size={64} />
              <h3 className="text-2xl font-bold text-slate-800 mb-3">No templates found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your search or create your first template.</p>
              <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200"
              >
                Create Template
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Create New Template</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-xl transition-colors duration-200"
                >
                  <X size={24} className="text-slate-400" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Template Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter template name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Description</label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none"
                    placeholder="Describe your template"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Category</label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  >
                    <option value="">Select a category</option>
                    {categories.slice(1).map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Image URL (Optional)</label>
                  <div className="relative">
                    <Upload className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="url"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Tags (Optional)</label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="professional, modern, clean (comma separated)"
                  />
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-6 py-3 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl font-semibold transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    Create Template
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;