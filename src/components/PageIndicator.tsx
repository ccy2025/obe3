import { FC } from 'react';

interface PageIndicatorProps {
  currentSection: string;
  scrollToSection: (sectionId: string) => void;
}

const PageIndicator: FC<PageIndicatorProps> = ({ currentSection, scrollToSection }) => {
  // 章节名称映射
  const sectionNames = {
    cover: '封面',
    about: '公司简介',
    concept: '概念介绍',
    solution: '方案架构',
    cases: '客户案例',
    thanks: '感谢'
  };
  
  // 章节列表
  const sections = Object.keys(sectionNames) as Array<keyof typeof sectionNames>;

  return (
    <div className="hidden md:block fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all w-full justify-start ${
              currentSection === section 
                ? 'text-blue-700 font-medium bg-blue-50' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            aria-label={`前往${sectionNames[section]}页面`}
          >
            <div className={`w-2 h-2 rounded-full transition-all ${
              currentSection === section 
                ? 'bg-blue-600 w-3 h-3' 
                : 'bg-gray-400'
            }`}></div>
            <span>{sectionNames[section]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PageIndicator;