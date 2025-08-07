import { FC } from 'react';

interface NavigationProps {
  currentSection: string;
  scrollToSection: (sectionId: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navigation: FC<NavigationProps> = ({ 
  currentSection, 
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen
}) => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                className="h-8 w-auto" 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=%E6%AC%A7%E5%80%8D%E5%B0%94%E9%9B%86%E5%9B%A2logo%2C%E8%93%9D%E8%89%B2%E6%B8%90%E5%8F%98%2C%E7%AE%80%E6%B4%81%E7%8E%B0%E4%BB%A3&sign=7383535ebca49bcec3f72955853261e2" 
                alt="欧倍尔集团"
              />
              <span className="ml-2 text-xl font-bold text-blue-800 hidden sm:inline-block">欧倍尔数字化实训室解决方案</span>
              <span className="ml-2 text-lg font-bold text-blue-800 sm:hidden">数字化实训室方案</span>
            </div>
          </div>
          
          {/* 桌面导航 */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <button 
              onClick={() => scrollToSection('cover')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentSection === 'cover' 
                  ? 'text-blue-600 border-b-2 border-blue-500' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              首页
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentSection === 'about' 
                  ? 'text-blue-600 border-b-2 border-blue-500' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              公司简介
            </button>
            <button 
              onClick={() => scrollToSection('concept')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentSection === 'concept' 
                  ? 'text-blue-600 border-b-2 border-blue-500' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              概念介绍
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentSection === 'solution' 
                  ? 'text-blue-600 border-b-2 border-blue-500' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              方案架构
            </button>
            <button 
              onClick={() => scrollToSection('cases')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentSection === 'cases' 
                  ? 'text-blue-600 border-b-2 border-blue-500' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              客户案例
            </button>
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="-mr-2 flex items-center md:hidden">
            <button 
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">打开主菜单</span>
              <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} h-6 w-6`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-in slide-in-from-top duration-300">
          <div className="pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('cover')}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                currentSection === 'cover' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              首页
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                currentSection === 'about' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              公司简介
            </button>
            <button
              onClick={() => scrollToSection('concept')}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                currentSection === 'concept' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              概念介绍
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                currentSection === 'solution' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              方案架构
            </button>
            <button
              onClick={() => scrollToSection('cases')}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                currentSection === 'cases' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              客户案例
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;