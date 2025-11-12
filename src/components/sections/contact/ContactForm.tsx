import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='w-full bg-base p-4 rounded-2xl max-w-xl'>
      {/* Header */}
      <div className='mb-6 md:mb-8'>
        <h2 className='text-2xl md:text-3xl font-bold text-accent mb-3'>
          Send us a message
        </h2>
        <p className='text-sm text-accent/70 max-w-sm'>
          Have a specific question or feedback? Fill out the form below, and
          we'll get back to you promptly.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className='space-y-5'>
        {/* Your name */}
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-accent mb-2'
          >
            Your name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your name'
            className='w-full px-4 py-3 border border-accent/20 rounded-lg text-accent placeholder:text-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all'
            required
          />
        </div>

        {/* Email address */}
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-accent mb-2'
          >
            Email address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            className='w-full px-4 py-3 border border-accent/20 rounded-lg text-accent placeholder:text-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all'
            required
          />
        </div>

        {/* Inquiry type */}
        <div>
          <label
            htmlFor='inquiryType'
            className='block text-sm font-medium text-accent mb-2'
          >
            Inquiry type
          </label>
          <select
            id='inquiryType'
            name='inquiryType'
            value={formData.inquiryType}
            onChange={handleChange}
            className='w-full px-4 py-3 border border-accent/20 rounded-lg text-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all bg-white bg-size-[12px] bg-position-[right_1rem_center] bg-no-repeat'
            required
          >
            <option value=''>Enter a subject...</option>
            <option value='general'>General Inquiry</option>
            <option value='support'>Technical Support</option>
            <option value='billing'>Billing Question</option>
            <option value='partnership'>Partnership Opportunity</option>
            <option value='feedback'>Feedback</option>
          </select>
        </div>

        {/* Your name (message) */}
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-accent mb-2'
          >
            Your name
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Enter your name'
            rows={5}
            className='w-full px-4 py-3 border border-accent/20 rounded-lg text-accent placeholder:text-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none'
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='inline-flex items-center gap-2 px-8  bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors py-3 cursor-pointer'
        >
          Send
          <span className='border bg-[#95F476] rounded-full p-2'>
            <HiArrowRight className='w-5 h-5 text-accent ' />
          </span>
        </button>
      </form>
    </div>
  );
};
