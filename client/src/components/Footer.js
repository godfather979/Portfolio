import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faPinterest, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const handleClick = () => {
  window.open('https://www.linkedin.com/in/k-t-v-talele/', '_blank');
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-5 text-slate-300">Get in Touch</h2>
        <p className="text-lg mb-8">
        Dean of Students, Alumni & External Relations @ Bharatiya Vidya Bhavans’ Sardar Patel Institute of Technology Andheri Mumbai
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          
          <button
          onClick={handleClick}
          >
          <a href="" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          </button>

         
        
        </div>
        <div className="flex justify-center space-x-8">
         
          <div className="bg-gray-800 p-6 rounded">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 mb-2" />
            <p>kiran.talele@spit.ac.in</p>
          </div>
        </div>
      </div>
      <div className='py-5'>
        <div className=' w-full bg-gray-700'>

        </div>

        <div className='flex items-center justify-center flex-col  opacity-70'>
              <h1 className="text-white">
                  Designed and Developed By
              </h1>
             <h className="text-white">
                <span className="text-white">Ved Thakker</span>
             </h>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
