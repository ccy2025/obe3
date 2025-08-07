import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import PageIndicator from '@/components/PageIndicator';
import Cover from '@/components/sections/Cover';
import About from '@/components/sections/About';
import Concept from '@/components/sections/Concept';
import Solution from '@/components/sections/Solution';
import Cases from '@/components/sections/Cases';
import Thanks from '@/components/sections/Thanks';
import Footer from '@/components/Footer';

// 定义所有章节ID
const sections = ['cover', 'about', 'concept', 'solution', 'cases', 'thanks'];

export default function Home() {
  const [currentSection, setCurrentSection] = useState('cover');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // 处理滚动事件，更新当前激活章节
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = sectionRefs.current[section];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 滚动到指定章节
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = sectionRefs.current[sectionId];
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // 注册章节引用
  const registerSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };

  return (
    <div className="relative">
      {/* 导航栏 */}
      <Navigation 
        currentSection={currentSection} 
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      {/* 页面指示器 */}
      <PageIndicator 
        currentSection={currentSection} 
        scrollToSection={scrollToSection}
      />
      
      {/* 主内容区 - 横版画册容器 */}
      <div className="max-w-7xl mx-auto bg-white shadow-xl overflow-hidden">
        {/* 封面页 */}
        <div ref={(el) => registerSectionRef('cover', el)}>
          <Cover scrollToSection={scrollToSection} />
        </div>
        
        {/* 公司简介 */}
        <div ref={(el) => registerSectionRef('about', el)}>
          <About />
        </div>
        
        {/* 概念介绍 */}
        <div ref={(el) => registerSectionRef('concept', el)}>
          <Concept />
        </div>
        
        {/* 方案架构 */}
        <div ref={(el) => registerSectionRef('solution', el)}>
          <Solution />
        </div>
        
        {/* 客户案例 */}
        <div ref={(el) => registerSectionRef('cases', el)}>
          <Cases />
        </div>
        
        {/* 感谢页 */}
        <div ref={(el) => registerSectionRef('thanks', el)}>
          <Thanks />
        </div>
      </div>
      
      {/* 页脚 */}
      <Footer />
    </div>
  );
}