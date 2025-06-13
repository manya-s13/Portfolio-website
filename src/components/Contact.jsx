import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  function handleSubmit() {
    console.log('Form submitted:', { name, email, msg });
    alert('Sent!')
    setName('');
    setEmail('');
    setMsg('');
  }

  return (
    <div id='contact' className='min-h-screen bg-black relative overflow-hidden'>
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div> */}

      <div className='relative z-10 container mx-auto px-4 py-16'>
        <div className='flex items-center justify-center gap-4 font-bold mb-16 animate-fade-in'>
          <span className='text-5xl text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Contact</span>
          <span className='text-pink-400 text-5xl bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent'>Me</span>
        </div>

        <div className='max-w-2xl mx-auto'>
          <div className='bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-8 hover:shadow-purple-500/25 transition-all duration-500'>
            <div className='space-y-8'>
              {/* Name Field */}
              <div className='relative group'>
                <label htmlFor='name' className='block text-white/90 text-sm font-medium mb-3 group-focus-within:text-pink-400 transition-colors'>
                  Full Name
                </label>
                <div className='relative'>
                  <User className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5 group-focus-within:text-pink-400 transition-colors' />
                  <input 
                    type='text' 
                    id='name'
                    placeholder='Enter your full name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full bg-white/5 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 hover:bg-white/10'
                  />
                </div>
              </div>

              <div className='relative group'>
                <label htmlFor='email' className='block text-white/90 text-sm font-medium mb-3 group-focus-within:text-pink-400 transition-colors'>
                  Email Address
                </label>
                <div className='relative'>
                  <Mail className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5 group-focus-within:text-pink-400 transition-colors' />
                  <input 
                    type='email' 
                    id='email'
                    placeholder='your.email@example.com' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full bg-white/5 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 hover:bg-white/10'
                  />
                </div>
              </div>

              <div className='relative group'>
                <label htmlFor='msg' className='block text-white/90 text-sm font-medium mb-3 group-focus-within:text-pink-400 transition-colors'>
                  Your Message
                </label>
                <div className='relative'>
                  <MessageSquare className='absolute left-4 top-6 text-white/50 w-5 h-5 group-focus-within:text-pink-400 transition-colors' />
                  <textarea 
                    id='msg'
                    placeholder='Tell me about your project or just say hello!' 
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    rows={5}
                    className='w-full bg-white/5 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 hover:bg-white/10 resize-none'
                  />
                </div>
              </div>

   
              <button 
                onClick={handleSubmit}
                className='cursor-pointer w-full bg-gradient-to-r from-pink-400 to-purple-600 hover:from-pink-500 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 flex items-center justify-center gap-3 group'
              >
                Send Message
                <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Contact;