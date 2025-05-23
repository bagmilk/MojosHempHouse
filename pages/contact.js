import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (    <Layout>
      <section className="py-12 bg-gradient-to-br from-deep-purple-800 via-deep-purple-700 to-deep-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-lime-green-400 animate-neon-pulse">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Purple Gradient Divider */}
      <div className="h-4 gradient-divider"></div>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-gradient-to-br from-deep-purple-700 to-deep-purple-800 text-white rounded-lg p-8 mb-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-lime-green-400">Visit Mojo's Hemp House</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p>Indianapolis, Indiana</p>
                      <p className="text-deep-purple-200">In the heart of Indy</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🕐</span>
                    <div>
                      <h3 className="font-semibold mb-1">Store Hours</h3>
                      <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                      <p>Saturday: 10:00 AM - 9:00 PM</p>
                      <p>Sunday: 11:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📞</span>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p>(317) 555-HEMP</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">✉️</span>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p>info@mojoshemphouse.com</p>
                    </div>
                  </div>
                </div>
              </div>              {/* Why Visit */}
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-lime-green-600">Why Visit Our Store?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-lime-green-600 mr-2">✓</span>
                    <span>Free personalized consultations with our CBD experts</span>
                  </li>                  <li className="flex items-start">
                    <span className="text-lime-green-600 mr-2">✓</span>
                    <span>Sample products before you buy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-green-600 mr-2">✓</span>
                    <span>Exclusive in-store promotions and discounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-green-600 mr-2">✓</span>
                    <span>Educational materials and dosing guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-green-600 mr-2">✓</span>
                    <span>Immediate product availability - no waiting for shipping</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6 text-lime-green-600">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-deep-purple-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-green-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-deep-purple-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-green-500 focus:border-transparent transition"
                    />
                  </div>                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-deep-purple-700 mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-green-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-deep-purple-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-green-500 focus:border-transparent transition"
                      placeholder="How can we help you? Ask about products, dosing, or schedule a consultation..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-lime-green-500 text-deep-purple-900 py-3 rounded-lg font-semibold hover:bg-lime-green-400 transition neon-hover shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* FAQ Section */}
              <div className="mt-8 bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700">Do I need an appointment?</h4>
                    <p className="text-gray-600">No appointment needed! Walk-ins are always welcome.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Do you offer bulk or wholesale pricing?</h4>
                    <p className="text-gray-600">Yes! Contact us for wholesale opportunities.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Can I return products?</h4>
                    <p className="text-gray-600">We offer a 30-day satisfaction guarantee on unopened products.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl mb-4 block">📍</span>
              <p className="text-xl font-semibold text-gray-700">Find Us in Indianapolis</p>
              <p className="text-gray-600">Located in the heart of the city</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}