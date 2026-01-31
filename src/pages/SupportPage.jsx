import React from 'react';
import Header from '../components/mainnavbar';

export default function SupportPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-3 text-gray-900">
            Customer <span className="text-gray-900">Support</span>
          </h1>
          <p className="text-center text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-10">
            Need help with a project, product selection or after-sales service? Our
            support team is here to assist you.
          </p>

          <div className="grid lg:grid-cols-[1.1fr_1.1fr] gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Information</h2>
              <div className="space-y-4 text-sm md:text-base">
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+971-XXX-XXXX</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">support@ataelectronics.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      ATA Electronics<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 text-sm md:text-base">
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">Support Hours</h2>
                  <div className="space-y-1 text-gray-600">
                    <p>
                      <span className="font-semibold text-gray-900">Monday - Friday:</span> 9:00 AM - 6:00 PM
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">Saturday:</span> 10:00 AM - 4:00 PM
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">Sunday:</span> Closed
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold mb-1">Emergency Support</h3>
                    <p className="text-gray-600">
                      24/7 emergency response available for critical
                      installations and priority clients.
                    </p>
                  </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Submit a Request</h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                Share a few details about your requirement and our team will get
                back to you as soon as possible.
              </p>

              <form
                className="space-y-4 text-sm md:text-base"
                onSubmit={(e) => e.preventDefault()}
              >
                  <div>
                    <label className="block mb-1 font-medium" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-sm md:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-sm md:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium" htmlFor="topic">
                      Topic
                    </label>
                    <select
                      id="topic"
                      className="w-full rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-sm md:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option className="bg-white text-gray-900">Product enquiry</option>
                      <option className="bg-white text-gray-900">Project support</option>
                      <option className="bg-white text-gray-900">After-sales service</option>
                      <option className="bg-white text-gray-900">Warranty &amp; returns</option>
                      <option className="bg-white text-gray-900">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1 font-medium" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-sm md:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                      placeholder="Share details about your project, product, or issue..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center w-full rounded-full bg-gray-900 text-white font-semibold py-2.5 text-sm md:text-base hover:bg-black transition-colors"
                  >
                    Send Request
                  </button>
                </form>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-center text-xs md:text-sm text-gray-600">
            <div className="border border-gray-100 rounded-xl py-4 bg-white shadow-sm">
              <div className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Response</div>
              <div>Typical response within 24 business hours</div>
            </div>
            <div className="border border-gray-100 rounded-xl py-4 bg-white shadow-sm">
              <div className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Coverage</div>
              <div>Support across lighting, batteries, sound and electronics</div>
            </div>
            <div className="border border-gray-100 rounded-xl py-4 bg-white shadow-sm">
              <div className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Partners</div>
              <div>Dedicated support for consultants and integrators</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}