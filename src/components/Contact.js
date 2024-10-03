import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://iamjanmejayakhandual-default-rtdb.asia-southeast1.firebasedatabase.app/UserFeedBack.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success('Thanks for your feedback!', {
          position: 'top-right',
          autoClose: 3000,
        });
        reset();
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      toast.error('Error sending message. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <ToastContainer />
      <div className="w-full max-w-2xl mx-auto p-8">
        <h1 className="text-5xl font-bold text-center mb-4 text-white mt-12">
          Contact <span className="text-cyan-500">Me</span>
        </h1>
        <p className="text-center text-gray-400 mb-4 text-lg">
          Let's Work Together
        </p>
        <p className="text-justify text-gray-400 mb-8">
          I'd love to hear from you. Whether you have a question, a project in mind, or just want to connect, feel free to drop me a message.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register('name', { required: true, pattern: /^[A-Za-z ]+$/ })}
              className={`w-full px-4 py-2 bg-gray-800 text-white border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded`}
            />
            {errors.name && errors.name.type === 'required' && (
              <p className="text-red-500 mt-1">Name is required</p>
            )}
            {errors.name && errors.name.type === 'pattern' && (
              <p className="text-red-500 mt-1">Name can only contain letters and spaces</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register('email', { 
                required: true, 
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
              })}
              className={`w-full px-4 py-2 bg-gray-800 text-white border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded`}
            />
            {errors.email && errors.email.type === 'required' && (
              <p className="text-red-500 mt-1">Email is required</p>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <p className="text-red-500 mt-1">Enter a valid email address</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              {...register('phone', {
                required: true,
                pattern: /^\d{10}$/
              })}
              className={`w-full px-4 py-2 bg-gray-800 text-white border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded`}
            />
            {errors.phone && errors.phone.type === 'required' && (
              <p className="text-red-500 mt-1">Phone number is required</p>
            )}
            {errors.phone && errors.phone.type === 'pattern' && (
              <p className="text-red-500 mt-1">Enter a valid 10-digit phone number</p>
            )}
          </div>
          <div>
            <textarea
              placeholder="Enter Your Message"
              {...register('message', { required: true })}
              className={`w-full px-4 py-2 bg-gray-800 text-white border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded h-32`}
            />
            {errors.message && (
              <p className="text-red-500 mt-1">Message is required</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded mt-4 h-12 hover:scale-110"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <div className="text-center mt-8 text-lg">
          <p className="flex items-center justify-center">
            <i className="fas fa-envelope text-cyan-500 mr-2"></i>
            <a href="mailto:janmejayakhandual223@gmail.com" className="text-cyan-500 hover:underline text-lg">
              janmejayakhandual223@gmail.com
            </a>
          </p>
          <p className="mt-2 flex items-center justify-center">
            <i className="fas fa-phone text-cyan-500 mr-2"></i>
            <a href="tel:7326919304" className="text-cyan-500 hover:underline">
              7326919304
            </a>
          </p>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <a href="https://x.com/janmejaya7326?t=ayNCJYfgJO4aswYVQBZpxw&s=08" className="text-cyan-500 hover:text-cyan-400 hover:scale-125">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/janmejaya_khandual?igsh=MXNlaWJtOHRkcDdmMQ==" className="text-cyan-500 hover:text-cyan-400 hover:scale-125">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/janmejaya-khandual-012535267" className="text-cyan-500 hover:text-cyan-400 hover:scale-125">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="spinner-border animate-spin inline-block w-9 h-9 border-4 rounded-full border-t-transparent border-cyan-500"></div>
            <p className="text-cyan-500 text-xl">Sending...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
