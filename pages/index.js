import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-purple-800 via-deep-purple-700 to-deep-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-deep-purple-600/20 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-neon-pulse text-lime-green-400">
              Welcome to Mojo's Hemp House
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-deep-purple-100">
              Indianapolis' Premier CBD & Hemp Wellness Destination
            </p>
            <Link href="/products" className="inline-block bg-lime-green-500 text-deep-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-lime-green-400 transition transform hover:scale-105 neon-hover shadow-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </section>      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-lime-green-600">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-100 hover:border-lime-green-200">
              <div className="h-48 bg-gradient-to-br from-lime-green-50 to-lime-green-100 flex items-center justify-center">
                <span className="text-6xl">🌿</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-deep-purple-800">CBD Tinctures</h3>
                <p className="text-gray-600 mb-4">Premium full-spectrum and broad-spectrum CBD oil tinctures for daily wellness.</p>
                <Link href="/products" className="text-lime-green-600 font-semibold hover:text-lime-green-700 neon-hover">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-100 hover:border-lime-green-200">
              <div className="h-48 bg-gradient-to-br from-lime-green-50 to-lime-green-100 flex items-center justify-center">
                <span className="text-6xl">💊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-deep-purple-800">Hemp Capsules</h3>
                <p className="text-gray-600 mb-4">Easy-to-take hemp extract capsules for consistent daily dosing.</p>
                <Link href="/products" className="text-lime-green-600 font-semibold hover:text-lime-green-700 neon-hover">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-100 hover:border-lime-green-200">
              <div className="h-48 bg-gradient-to-br from-lime-green-50 to-lime-green-100 flex items-center justify-center">
                <span className="text-6xl">🧴</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-deep-purple-800">Topicals</h3>
                <p className="text-gray-600 mb-4">Soothing CBD-infused creams and balms for targeted relief.</p>
                <Link href="/products" className="text-lime-green-600 font-semibold hover:text-lime-green-700 neon-hover">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>      </section>

      {/* Purple Gradient Divider */}
      <div className="h-4 gradient-divider"></div>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-lime-green-600">
            Why Choose Hemp & CBD?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-green-100 to-lime-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😌</span>
              </div>
              <h3 className="font-semibold mb-2 text-deep-purple-800">Stress Relief</h3>
              <p className="text-gray-600">Natural support for daily stress and anxiety management.</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-green-100 to-lime-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😴</span>
              </div>
              <h3 className="font-semibold mb-2 text-deep-purple-800">Better Sleep</h3>
              <p className="text-gray-600">Promote restful sleep and healthy sleep cycles.</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-green-100 to-lime-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="font-semibold mb-2 text-deep-purple-800">Pain Management</h3>              <p className="text-gray-600">Natural alternative for chronic pain and inflammation.</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-green-100 to-lime-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="font-semibold mb-2 text-deep-purple-800">Overall Wellness</h3>
              <p className="text-gray-600">Support your body's natural balance and healing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Purple Gradient Divider */}
      <div className="h-4 gradient-divider"></div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-deep-purple-700 via-deep-purple-800 to-deep-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-deep-purple-600/20 to-transparent animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-lime-green-400">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 text-deep-purple-100">
            Visit us in Indianapolis for personalized recommendations and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-lime-green-500 text-deep-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-lime-green-400 transition neon-hover shadow-lg">
              Visit Our Store
            </Link>
            <Link href="/wellness" className="inline-block border-2 border-lime-green-400 text-lime-green-400 px-8 py-3 rounded-full font-semibold hover:bg-lime-green-400 hover:text-deep-purple-900 transition neon-hover">
              Learn About CBD
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}