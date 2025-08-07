import { motion } from 'framer-motion';

const Cases = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center section-title">专业领域应用</h2>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-6"
          >
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
              05
            </div>
            <h3 className="text-2xl font-semibold text-blue-800">典型案例解析</h3>
          </motion.div>

          {/* 阿司匹林生产案例 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h4 className="text-xl font-semibold mb-6 text-center text-blue-700">阿司匹林生产半实物仿真、中药浓缩提取半实物仿真工厂项目</h4>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  内蒙古工业大学-阿司匹林生产半实物仿真、中药浓缩提取半实物仿真工厂项目。将生产线设备按照与真实设备1：10的比例进行设计制造。现场阀门和仪表均使用真实的工业设备进行改造，能够与中控室远程通讯。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  这种设计让学生在实训过程中能够真实地感受设备的操作和运行状态，提高了实训的效果和质量。
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E9%98%BF%E5%8F%B8%E5%8C%B9%E6%9E%97%E7%94%9F%E4%BA%A7%E7%BA%BF%2C%E5%8D%8A%E5%AE%9E%E7%89%A9%E4%BB%BF%E7%9C%9F%2C%E5%B7%A5%E4%B8%9A%E8%AE%BE%E5%A4%87%2C%E5%AE%9E%E9%AA%8C%E5%AE%A4&sign=dc8d92a06d00f2b9faead65d55d3ab61" 
                  alt="阿司匹林生产" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E9%98%BF%E5%8F%B8%E5%8C%B9%E6%9E%97%E7%94%9F%E4%BA%A7%E5%B7%A5%E8%89%BA%E6%B5%81%E7%A8%8B%E5%9B%BE%2C%E5%B7%A5%E4%B8%9A%E6%B5%81%E7%A8%8B%2C%E6%8A%80%E6%9C%AF%E5%9B%BE%E8%A1%A8&sign=2c6da16ca385c0b564c5495920ed5647" 
                  alt="阿司匹林生产工艺" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E7%94%9F%E4%BA%A7%E8%AE%BE%E5%A4%87%E6%8E%A7%E5%88%B6%E9%9D%A2%E6%9D%BF%2C%E4%BB%AA%E8%A1%A8%2C%E6%8C%89%E9%92%AE%2C%E5%B7%A5%E4%B8%9A%E6%8E%A7%E5%88%B6&sign=60cb12e9abfb3449e981231e6748a970" 
                  alt="生产设备" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* 细胞培养案例 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h4 className="text-xl font-semibold mb-6 text-center text-blue-700">细胞培养生产抗体药生产半实物仿真实训</h4>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  江西省医药学校-以中国仓鼠卵巢（CHO）细胞为例，以一次性生物反应器、碟片式离心机等实际操作设备，结合操作软件，模拟细胞培养时的校准操作、细胞培养操作、放罐离心操作、CIP清洗操作、层析纯化操作等环节。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  校准操作采用软件模拟，包含蠕动泵校准，通过计时读体积的方式进行校准；pH传感器采用两点校准；DO传感器进行零点校准。通过校准模拟，可以让学生了解蠕动泵、pH传感器以及DO传感器的工作原理，熟悉校准方法。
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E7%BB%86%E8%83%9E%E5%9F%B9%E5%85%BB%E5%AE%9E%E9%AA%8C%E5%AE%A4%2C%E7%94%9F%E7%89%A9%E5%8F%8D%E5%BA%94%E5%99%A8%2C%E5%8C%BB%E8%8D%AF%E7%94%9F%E4%BA%A7%2C%E6%B4%81%E5%87%80%E5%AE%A4&sign=25d8925479fb7fc901a7219ca3cde79e" 
                  alt="细胞培养" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E7%94%9F%E7%89%A9%E5%8F%8D%E5%BA%94%E5%99%A8%2C%E7%BB%86%E8%83%9E%E5%9F%B9%E5%85%BB%2C%E5%8C%BB%E8%8D%AF%E8%AE%BE%E5%A4%87%2C%E5%AE%9E%E9%AA%8C%E5%AE%A4&sign=4332a9290f4688ae059890131d6d1d29" 
                  alt="反应器" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E7%A6%BB%E5%BF%83%E6%9C%BA%2C%E7%94%9F%E7%89%A9%E5%88%B6%E8%8D%AF%2C%E5%88%86%E7%A6%BB%E8%AE%BE%E5%A4%87%2C%E5%AE%9E%E9%AA%8C%E5%AE%A4&sign=41343886e8652552d9fc2bf7d19150bc" 
                  alt="离心机" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E5%8C%BB%E8%8D%AF%E5%82%A8%E7%BD%90%2C%E4%B8%8D%E9%94%88%E9%92%A2%E5%AE%B9%E5%99%A8%2C%E5%88%B6%E8%8D%AF%E8%AE%BE%E5%A4%87%2C%E5%AE%9E%E9%AA%8C%E5%AE%A4&sign=a32a767962cc3daf0dfc70c7b8462803" 
                  alt="储罐" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* 建设案例汇总 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold mb-6 text-center text-blue-700">建设案例</h4>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h5 className="font-semibold mb-4 text-blue-700">学校半实物及实训基地项目</h5>
              <ul className="text-gray-600 list-disc pl-5 columns-2 space-y-2">
                <li>连云港职业技术学院（2024）</li>
                <li>山西燃气工程高级技工学校（2024）</li>
                <li>河北工业大学（2024）</li>
                <li>四川轻化工大学（2024）</li>
                <li>呼和浩特职业（2024）</li>
                <li>内蒙古工业（2024）</li>
                <li>吉林工业职业技术学院（2023）</li>
                <li>青岛科技大学淄博实训基地（2022）</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h5 className="font-semibold mb-4 text-blue-700">政、企、校合作项目</h5>
              <ul className="text-gray-600 list-disc pl-5 columns-2 space-y-2">
                <li>泰兴经济开发区化工安全技能实训基地</li>
                <li>济宁高端化工产业公共实训基地</li>
                <li>日照高端化工产业公共实训基地</li>
                <li>江西永新县实训基地</li>
                <li>山东临邑化工园区实训基地</li>
                <li>江西东乡区经济开发区化工实训基地</li>
                <li>江苏食品药品职业技术学院虚拟仿真实训基地</li>
                <li>宜宾职业技术学院"匠心善酿"虚拟仿真实训基地</li>
                <li>江西铅山工业园化工集中区化工技能实训基地</li>
                <li>江西瑞昌码头工业城化工实训基地</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Cases;