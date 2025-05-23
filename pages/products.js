import Layout from '../components/Layout';
import { useState } from 'react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Full Spectrum CBD Tincture',
      category: 'tinctures',
      strength: '1000mg',
      price: '$59.99',
      description: 'Premium full-spectrum CBD oil with natural hemp terpenes.',
      benefits: ['Stress relief', 'Better sleep', 'Pain management']
    },
    {
      id: 2,
      name: 'Broad Spectrum CBD Tincture',
      category: 'tinctures',
      strength: '750mg',
      price: '$49.99',
      description: 'THC-free broad spectrum CBD oil for daily wellness.',
      benefits: ['Daily wellness', 'Mood support', 'Focus']
    },
    {
      id: 3,
      name: 'CBD Isolate Tincture',
      category: 'tinctures',
      strength: '500mg',
      price: '$39.99',
      description: 'Pure CBD isolate in MCT oil, unflavored.',
      benefits: ['Pure CBD', 'No THC', 'Versatile use']
    },
    {
      id: 4,
      name: 'Hemp Extract Softgels',
      category: 'capsules',
      strength: '25mg per capsule',
      price: '$44.99',
      description: 'Easy-to-swallow softgels with hemp extract.',
      benefits: ['Convenient dosing', 'Travel-friendly', 'Consistent effects']
    },
    {
      id: 5,
      name: 'CBD Relief Cream',
      category: 'topicals',
      strength: '500mg',
      price: '$34.99',
      description: 'Cooling relief cream with CBD and menthol.',
      benefits: ['Targeted relief', 'Fast-acting', 'Soothing']
    },
    {
      id: 6,
      name: 'Hemp Healing Balm',
      category: 'topicals',
      strength: '300mg',
      price: '$29.99',
      description: 'Natural healing balm with hemp extract and essential oils.',
      benefits: ['Skin health', 'Moisturizing', 'Natural ingredients']
    },
    {
      id: 7,
      name: 'CBD Gummies',
      category: 'edibles',
      strength: '10mg per gummy',
      price: '$24.99',
      description: 'Delicious fruit-flavored CBD gummies.',
      benefits: ['Great taste', 'Pre-measured doses', 'Discreet']
    },
    {
      id: 8,
      name: 'Hemp Honey',
      category: 'edibles',
      strength: '250mg',
      price: '$19.99',
      description: 'Raw honey infused with hemp extract.',
      benefits: ['Natural sweetener', 'Versatile use', 'Immune support']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'tinctures', name: 'Tinctures' },
    { id: 'capsules', name: 'Capsules' },
    { id: 'topicals', name: 'Topicals' },
    { id: 'edibles', name: 'Edibles' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);
  return (
    <Layout>
      <section className="py-12 bg-gradient-to-br from-deep-purple-800 via-deep-purple-700 to-deep-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-lime-green-400 animate-neon-pulse">
            Our Products
          </h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}                className={`px-6 py-2 rounded-full font-semibold transition neon-hover ${
                  selectedCategory === cat.id
                    ? 'bg-lime-green-500 text-deep-purple-900 shadow-lg'
                    : 'bg-white text-deep-purple-800 hover:bg-lime-green-100'
                }`}
              >
                {cat.name}
              </button>
            ))}          </div>
        </div>
      </section>

      {/* Purple Gradient Divider */}
      <div className="h-4 gradient-divider"></div>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-100 hover:border-lime-green-200">
                <div className="h-48 bg-gradient-to-br from-lime-green-100 to-lime-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl mb-2 block">
                      {product.category === 'tinctures' && '🌿'}
                      {product.category === 'capsules' && '💊'}
                      {product.category === 'topicals' && '🧴'}
                      {product.category === 'edibles' && '🍯'}
                    </span>
                    <span className="text-deep-purple-700 font-semibold">{product.strength}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-deep-purple-800">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-deep-purple-700 mb-2">Benefits:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-lime-green-100 text-lime-green-700 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                    <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-lime-green-600">{product.price}</span>
                    <button className="bg-lime-green-500 text-deep-purple-900 px-4 py-2 rounded hover:bg-lime-green-400 transition neon-hover font-semibold">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>          {/* Info Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-center text-lime-green-600">Quality You Can Trust</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="font-semibold mb-2 text-deep-purple-800">Lab Tested</h3>
                <p className="text-gray-600">All products are third-party lab tested for purity and potency.</p>
              </div>
              <div className="hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">🌱</div>
                <h3 className="font-semibold mb-2 text-deep-purple-800">Organic Hemp</h3>
                <p className="text-gray-600">Sourced from organically grown hemp farms in the USA.</p>
              </div>
              <div className="hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">✅</div>
                <h3 className="font-semibold mb-2 text-deep-purple-800">Legal & Safe</h3>
                <p className="text-gray-600">All products contain less than 0.3% THC and are federally legal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}