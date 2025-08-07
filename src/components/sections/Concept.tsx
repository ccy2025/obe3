import { motion } from 'framer-motion';

const Concept = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center section-title">概念介绍</h2>
        </motion.div>

        {/* 数字化实训 */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-6"
          >
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
              01
            </div>
            <h3 className="text-2xl font-semibold text-blue-800">数字化实训</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-6 leading-relaxed">
                数字化实训是一种融合半实物、实物实训与智慧实训室的新型实训模式，通过整合智慧实训平台、数字技术（如虚拟仿真、AI、XR、数字孪生等）与线下实体半实物、实物设备，实现"线上+线下"一体化实训。
               </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E6%95%B0%E5%AD%97%E5%8C%96%E5%AE%9E%E8%AE%AD%E5%AE%A4%2C%E9%AB%98%E7%A7%91%E6%8A%80%E8%AE%BE%E5%A4%87%2C%E5%AD%A6%E7%94%9F%E5%AE%9E%E8%AE%AD%E5%9C%BA%E6%99%AF%2C%E7%8E%B0%E4%BB%A3%E5%8C%96&sign=fd4db8ef5cf24614eee42096f386383e" 
                alt="数字化实训" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* 政策支持 */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-6"
          >
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
              02
            </div>
            <h3 className="text-2xl font-semibold text-blue-800">政策支持</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="policy-card"
            >
              <h4 className="font-semibold mb-3 text-blue-700">《加快数字人才培育支撑数字经济发展行动方案（2024-2026年）》</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                明确将虚拟仿真、AI、数字孪生等技术纳入数字技术工程师培育体系，要求职业院校与企业联合开发虚实结合的实训课程，并通过"工学一体化"模式培养复合型数字技能人才。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="policy-card"
            >
              <h4 className="font-semibold mb-3 text-blue-700">《教育部等九部门关于加快推进教育数字化的意见》（2025年）</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                提出建设国家智慧教育平台，要求职业院校重点开发虚拟仿真实习实践资源，并通过"AI+教育"实现大规模因材施教。
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E6%94%BF%E7%AD%96%E6%96%87%E4%BB%B6%2C%E6%95%99%E8%82%B2%E6%95%B0%E5%AD%97%E5%8C%96%2C%E8%99%9A%E6%8B%9F%E4%BB%BF%E7%9C%9F%2C%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3&sign=30b8736cd3e45d28062d3c26764ad173" 
                alt="政策文件" 
                className="w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="policy-card"
            >
              <h4 className="font-semibold mb-3 text-blue-700">《职业教育示范性虚拟仿真实训基地建设指南》</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                要求实训基地必须融合半实物操作与虚拟仿真，配备数字孪生系统和AI指导模块，实现实训过程数据实时采集与智能分析。
              </p>
            </motion.div>
          </div>
        </div>

        {/* 高校需求与痛点分析 */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-6"
          >
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
              03
            </div>
            <h3 className="text-2xl font-semibold text-blue-800">高校需求与痛点分析</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm mb-8"
          >
            <h4 className="font-semibold mb-4 text-blue-700">传统实训依赖实体设备，存在"三高、三难"问题：</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="timeline-item">
                <h5 className="font-medium mb-2">高投入、高损耗、高风险</h5>
                <p className="text-gray-600 text-sm">设备损耗快、维护成本高，频繁实操易导致设备故障，影响教学连续性。</p>
              </div>
              <div className="timeline-item">
                <h5 className="font-medium mb-2">难实施、难观摩、难再现</h5>
                <p className="text-gray-600 text-sm">学生人均实操机会少，高成本、高风险实验难以开展，只能通过理论讲解替代。</p>
              </div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-blue-700">破解实体资源限制与实训需求的矛盾</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                数字化实训通过虚拟仿真与实物、半实物结合，突破实体资源的物理限制，让每个学生获得充足的"实操"机会。
              </p>
              
              <h4 className="font-semibold mb-4 text-blue-700">弥补传统实训过程管理与效果评估的短板</h4>
              <p className="text-gray-600 leading-relaxed">
                传统实训中，教师难以实时监控每个学生的操作细节，对"操作规范性""错误原因"的判断依赖人工观察，评估主观性强；且实训数据难以留存分析，无法针对性优化教学。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E9%AB%98%E6%A0%A1%E5%AE%9E%E9%AA%8C%E5%AE%A4%2C%E8%AE%BE%E5%A4%87%E6%93%8D%E4%BD%9C%2C%E5%AD%A6%E7%94%9F%E5%AE%9E%E9%AA%8C%2C%E6%95%99%E8%82%B2%E5%9C%BA%E6%99%AF&sign=3c4582f0b3bb3b279506c372c06ad815" 
                alt="高校实训痛点" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Concept;