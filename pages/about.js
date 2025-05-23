import Layout from '../components/Layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About Mojo's Hemp House
          </h1>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Indianapolis' Trusted Hemp & CBD Destination</h2>
              <p className="text-xl">
                Since opening our doors, we've been dedicated to providing the highest quality CBD and hemp products 
                to help our community discover natural wellness solutions.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Mojo's Hemp House was born from a passion for natural wellness and a desire to help our Indianapolis 
                community access high-quality CBD and hemp products. We saw the incredible potential of these natural 
                compounds to improve lives and knew we had to share this with our neighbors.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small shop has grown into Indianapolis' premier destination for CBD education and 
                premium hemp products. We've helped thousands of customers find natural solutions for pain, stress, 
                sleep issues, and overall wellness.
              </p>
              <p className="text-gray-700">
                Today, we continue our mission of providing exceptional products, honest education, and personalized 
                service to everyone who walks through our doors.
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl block mb-4">🌿</span>
                <p className="text-xl font-semibold text-green-800">Serving Indianapolis Since Day One</p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-semibold text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We source only the finest hemp products from trusted suppliers who share our commitment to excellence.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600">
                  We believe in empowering our customers with knowledge about CBD and hemp to make informed decisions.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  We're proud to be part of the Indianapolis community and committed to improving lives through natural wellness.
                </p>
              </div>
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-8">What Sets Us Apart</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-green-600 mr-3">🔬</span>
                  Third-Party Lab Testing
                </h3>
                <p className="text-gray-700">
                  Every product we carry comes with comprehensive third-party lab results. We verify potency, purity, 
                  and safety so you can shop with complete confidence.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-green-600 mr-3">👥</span>
                  Personalized Consultation
                </h3>
                <p className="text-gray-700">
                  Our knowledgeable staff takes the time to understand your unique needs and guide you to the perfect 
                  products. No rush, no pressure - just honest, helpful advice.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-green-600 mr-3">🌱</span>
                  Curated Selection
                </h3>
                <p className="text-gray-700">
                  We don't just stock everything - we carefully select only the best brands and products that meet our 
                  high standards for quality and effectiveness.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-green-600 mr-3">📍</span>
                  Local Expertise
                </h3>
                <p className="text-gray-700">
                  As Indianapolis locals, we understand our community's needs and preferences. We're your neighbors, 
                  and we're here to help you on your wellness journey.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-green-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto">
              Our team is passionate about hemp wellness and dedicated to providing you with the best possible experience. 
              Each member is extensively trained in CBD education and committed to helping you find the perfect products 
              for your needs. Stop by and let us share our knowledge and enthusiasm with you!
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Experience the Mojo's Difference</h2>
            <p className="text-lg text-gray-700 mb-8">
              Visit us today and discover why Indianapolis trusts Mojo's Hemp House for their CBD and hemp needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                Visit Our Store
              </Link>
              <Link href="/products" className="inline-block border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}