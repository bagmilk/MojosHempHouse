import Layout from '../components/Layout';
import Link from 'next/link';

export default function Wellness() {
  return (
    <Layout>
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            CBD & Hemp Wellness Guide
          </h1>

          {/* Introduction */}
          <div className="bg-green-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Understanding CBD & Hemp</h2>
            <p className="text-gray-700 mb-4">
              CBD (Cannabidiol) is a natural compound found in hemp plants that has been studied for its potential therapeutic benefits. 
              Unlike THC, CBD is non-psychoactive and won't make you feel "high." Instead, it works with your body's endocannabinoid 
              system to promote balance and wellness.
            </p>
            <p className="text-gray-700">
              At Mojo's Hemp House, we're committed to providing high-quality CBD and hemp products to support your wellness journey. 
              Our knowledgeable staff can help you find the right products for your specific needs.
            </p>
          </div>

          {/* Benefits Grid */}
          <h2 className="text-3xl font-semibold text-center mb-8">Potential Benefits of CBD</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Physical Wellness</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Pain Management:</strong> May help reduce chronic pain and inflammation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Recovery Support:</strong> Popular among athletes for post-workout recovery
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Joint Health:</strong> May provide relief for arthritis and joint discomfort
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Skin Health:</strong> Topical CBD may help with various skin conditions
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Mental Wellness</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Stress Relief:</strong> May help manage daily stress and promote relaxation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Sleep Support:</strong> Many users report improved sleep quality
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Mood Balance:</strong> May help maintain emotional equilibrium
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <div>
                    <strong>Focus Enhancement:</strong> Some users experience improved concentration
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Dosing Guide */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Finding Your Ideal CBD Dose</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-700">1</span>
                </div>
                <h3 className="font-semibold mb-2">Start Low</h3>
                <p className="text-gray-600">Begin with 10-20mg of CBD per day and observe how your body responds.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-700">2</span>
                </div>
                <h3 className="font-semibold mb-2">Go Slow</h3>
                <p className="text-gray-600">Gradually increase your dose every few days until you find your sweet spot.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-700">3</span>
                </div>
                <h3 className="font-semibold mb-2">Be Consistent</h3>
                <p className="text-gray-600">Take CBD at the same time daily for best results and to establish a routine.</p>
              </div>
            </div>
          </div>

          {/* Types of CBD */}
          <h2 className="text-3xl font-semibold text-center mb-8">Types of CBD Products</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Full Spectrum CBD</h3>
              <p className="text-gray-700 mb-3">
                Contains all naturally occurring compounds from the hemp plant, including trace amounts of THC (less than 0.3%). 
                This creates an "entourage effect" where compounds work together synergistically.
              </p>
              <p className="text-sm text-green-600 font-semibold">Best for: Maximum therapeutic benefit</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Broad Spectrum CBD</h3>
              <p className="text-gray-700 mb-3">
                Contains multiple hemp compounds but with THC completely removed. Offers many benefits of full spectrum 
                without any THC.
              </p>
              <p className="text-sm text-green-600 font-semibold">Best for: Those who want to avoid THC entirely</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-3">CBD Isolate</h3>
              <p className="text-gray-700 mb-3">
                Pure CBD with all other compounds removed. Contains 99%+ pure CBD with no taste or odor.
              </p>
              <p className="text-sm text-green-600 font-semibold">Best for: Precise dosing and sensitive individuals</p>
            </div>
          </div>

          {/* Safety Section */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Safety & Considerations</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Always consult with your healthcare provider before starting any CBD regimen</li>
              <li>• CBD may interact with certain medications - discuss with your doctor</li>
              <li>• Start with a low dose and increase gradually</li>
              <li>• Purchase from reputable sources that provide third-party lab testing</li>
              <li>• CBD is not intended to diagnose, treat, cure, or prevent any disease</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center bg-green-700 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Wellness Journey?</h2>
            <p className="text-lg mb-6">Our knowledgeable staff is here to help you find the perfect CBD products for your needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="inline-block bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition">
                Shop Products
              </Link>
              <Link href="/contact" className="inline-block border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition">
                Visit Our Store
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}