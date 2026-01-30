import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

// Enquiry Modal Component
function EnquiryModal({ isOpen, onClose, product }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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
    console.log('Enquiry submitted:', formData, 'Product:', product?.title);
    alert('Enquiry submitted successfully!');
    onClose();
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-60 flex items-center justify-center z-50 p-4 ">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 relative border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-4 rounded-t-lg relative">
          <h2 className="text-lg font-bold text-center uppercase tracking-wide">Product Enquiry</h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors duration-200"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {product && (
            <div className="mb-4 p-3 bg-blue-50 border-l-4 border-blue-800 rounded-r">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-blue-800">Product:</span> 
                <span className="font-medium text-gray-800 ml-1">{product.title}</span>
              </p>
            </div>
          )}

          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 transition-colors duration-200 text-gray-800 placeholder-gray-500"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 transition-colors duration-200 text-gray-800 placeholder-gray-500"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 transition-colors duration-200 text-gray-800 placeholder-gray-500"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 transition-colors duration-200 text-gray-800 placeholder-gray-500 resize-none"
            />
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200 rounded-md hover:bg-gray-100"
            >
              CLOSE
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2.5 rounded-md hover:from-red-700 hover:to-red-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>SUBMIT</span>
              <span className="text-xs"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnquiryModal;