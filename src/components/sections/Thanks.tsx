import { motion } from 'framer-motion';

const Thanks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">感谢聆听</h2>
          <p className="text-xl mb-12 opacity-90">北京欧倍尔软件技术开发有限公司</p>

          <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-8 mb-12">
            <div className="mb-6 sm:mb-0">
              <div className="text-2xl font-bold mb-2">CBR_欧倍尔软件</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">400-076-5556</div>
            </div>
          </div>

          <div className="bg-white text-blue-800 p-6 rounded-xl max-w-2xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold mb-4">医药专业</h3>
            <p className="mb-4 opacity-80">专注于优质虚拟仿真教学、实训、企业培训资源建设,医药教育行业领军者。</p>
            <p className="opacity-70">北京欧倍尔软件技术开发有限公司</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Thanks;