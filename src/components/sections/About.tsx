import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center section-title">公司简介</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">欧倍尔集团</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              北京欧倍尔集团成立于2012年，总部位于北京，业务遍及全国所有省份及港澳台、新加坡等地。集团现有员工540余人，下属北京欧倍尔软件技术开发有限公司、山东欧倍尔软件科技有限责任公司、山东欧倍尔智能设备有限公司三个全资子公司。
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              集团拥有卓越的产品设计和开发团队，专注于研发具有自主核心技术和知识产权的产品。业务涵盖虚拟仿真软件开发、实训基地建设、实训装置研发生产、特种作业考试中心建设等多个领域，现已发展为虚拟仿真行业及实训基地建设领域内的卓越品牌。
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">74项软件著作权</div>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">国家级高新技术企业</div>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">1500+院校合作</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E7%8E%B0%E4%BB%A3%E5%8C%96%E5%8A%9E%E5%85%AC%E7%8E%AF%E5%A2%83%2C%E7%A7%91%E6%8A%80%E5%85%AC%E5%8F%B8%2C%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E5%9C%BA%E6%99%AF%2C%E4%B8%93%E4%B8%9A%E6%B0%9B%E5%9B%B4&sign=8265b33301f5f7d3e71d1ce246f90128" 
              alt="欧倍尔公司" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-6 rounded-xl text-center feature-card"
          >
            <div className="text-blue-600 text-4xl font-bold mb-3">540+</div>
            <h4 className="text-lg font-semibold mb-2">员工人数</h4>
            <p className="text-gray-600 text-sm">技术研发团队硕士以上学历占比超过60%</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-6 rounded-xl text-center feature-card"
          >
            <div className="text-blue-600 text-4xl font-bold mb-3">1500+</div>
            <h4 className="text-lg font-semibold mb-2">院校合作</h4>
            <p className="text-gray-600 text-sm">与全国1500多所院校建立长期合作关系</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-6 rounded-xl text-center feature-card"
          >
            <div className="text-blue-600 text-4xl font-bold mb-3">50+</div>
            <h4 className="text-lg font-semibold mb-2">企业合作</h4>
            <p className="text-gray-600 text-sm">服务50多家知名化工企业</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;