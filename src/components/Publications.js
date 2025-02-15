import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import wileyImage from '../img/WhatsApp Image 2025-01-18 at 20.38.57.jpeg';

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showModal, setShowModal] = useState(false);

  const handleDownloadTemplate = () => {
    const link = document.createElement('a');
    link.href = '/documents/Updated conference proceedings template_NITK Crest 2025 (2).pdf';
    link.download = 'NITK-CREST 2025 Conference Proceedings Template.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section ref={ref} className="py-24 bg-gradient-to-b from-white to-green-50" id="publications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-green-700 mb-4">Publications</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Conference Proceedings */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Conference Proceedings</h3>
              <p className="text-gray-600 mb-6">
                Selected good quality papers will be published in Springer conference proceedings. Separate communication will be shared with the participants regarding the submission of full papers after the conference.
              </p>
              <button
                onClick={handleDownloadTemplate}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center space-x-2 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Proceedings</span>
              </button>
            </motion.div>

            {/* Publication Partner */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Special Issue Publication</h3>
              <div 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-all"
                onClick={() => setShowModal(true)}
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Wiley Publication</h4>
                  <p className="text-gray-600">Material Science and Engineering Technology (SCIE, IF-1.2)</p>
                </div>
                <img src={wileyImage} alt="Wiley Publication" className="h-16 object-contain" />
              </div>
            </motion.div>
          </div>

          {/* Presentation Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Instructions for Presentations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Poster Presentation</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Poster Size: A0 (W:84.1 cm x H:118.9 cm)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Oral Presentation</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Duration: 10 minutes total</li>
                  <li>8 minutes for presentation</li>
                  <li>2 minutes for interaction</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative bg-white rounded-xl overflow-hidden max-w-3xl w-full"
            >
              <img 
                src={wileyImage} 
                alt="Publication Partner" 
                className="w-full h-auto"
              />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Publications;