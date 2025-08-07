import { FC } from 'react';
import { motion } from 'framer-motion';

interface CoverProps {
  scrollToSection: (sectionId: string) => void;
}

const Cover: FC<CoverProps> = ({ scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-white opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-white opacity-10"></div>
      </div>
      
      {/* 主要内容 */}
      <div className="text-center px-4 py-16 sm:px-6 lg:px-8 relative z-10 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=%E6%AC%A7%E5%80%8D%E5%B0%94%E9%9B%86%E5%9B%A2logo%2C%E8%93%9D%E8%89%B2%E6%B8%90%E5%8F%98%2C%E7%AE%80%E6%B4%81%E7%8E%B0%E4%BB%A3&sign=7383535ebca49bcec3f72955853261e2" 
            alt="欧倍尔集团" 
            className="h-20 mx-auto mb-8"
          />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          数字化实训室
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-4xl font-semibold mb-12 text-blue-100"
        >
          解决方案
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 bg-white text-blue-700 font-medium rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            了解更多
          </button>
          <button
            onClick={() => scrollToSection('cases')}
            className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition duration-300 transform hover:scale-105"
          >
            查看案例
          </button>
        </motion.div>
      </div>
      
      {/* 向下滚动指示 */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 text-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <button 
          onClick={() => scrollToSection('about')}
          className="inline-block text-white hover:text-blue-100 transition-colors"
          aria-label="向下滚动"
        >
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </button>
      </motion.div>
    </section>
  );
};

export default Cover;