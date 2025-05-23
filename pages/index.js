import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Mojo's Hemp House
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Indianapolis' Premier CBD & Hemp Wellness Destination
            </p>
            <Link href="/products" className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition transform hover:scale-105">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <span className="text-6xl">🌿</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">CBD Tinctures</h3>
                <p className="text-gray-600 mb-4">Premium full-spectrum and broad-spectrum CBD oil tinctures for daily wellness.</p>
                <Link href="/products" className="text-green-600 font-semibold hover:text-green-700">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <span className="text-6xl">💊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hemp Capsules</h3>
                <p className="text-gray-600 mb-4">Easy-to-take hemp extract capsules for consistent daily dosing.</p>
                <Link href="/products" className="text-green-600 font-semibold hover:text-green-700">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <span className="text-6xl">🧴</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Topicals</h3>
                <p className="text-gray-600 mb-4">Soothing CBD-infused creams and balms for targeted relief.</p>
                <Link href="/products" className="text-green-600 font-semibold hover:text-green-700">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Hemp & CBD?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😌</span>
              </div>
              <h3 className="font-semibold mb-2">Stress Relief</h3>
              <p className="text-gray-600">Natural support for daily stress and anxiety management.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😴</span>
              </div>
              <h3 className="font-semibold mb-2">Better Sleep</h3>
              <p className="text-gray-600">Promote restful sleep and healthy sleep cycles.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="font-semibold mb-2">Pain Management</h3>
              <p className="text-gray-600">Natural alternative for chronic pain and inflammation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="font-semibold mb-2">Overall Wellness</h3>
              <p className="text-gray-600">Support your body's natural balance and healing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Visit us in Indianapolis for personalized recommendations and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
              Visit Our Store
            </Link>
            <Link href="/wellness" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition">
              Learn About CBD
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}