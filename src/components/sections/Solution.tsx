import { motion } from 'framer-motion';

const Solution = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center section-title">整体解决方案</h2>
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
              04
            </div>
            <h3 className="text-2xl font-semibold text-blue-800">方案架构</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-center text-blue-700">智慧实训平台</h4>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="solution-card p-4 rounded-lg text-center">
                <div className="text-blue-600 text-2xl mb-2"><i className="fa-solid fa-book-open"></i></div>
                <h5 className="font-medium mb-2">线上课程预习</h5>
                <p className="text-gray-600 text-sm">课前预习理论知识，了解实验流程</p>
              </div>
              <div className="solution-card p-4 rounded-lg text-center">
                <div className="text-blue-600 text-2xl mb-2"><i className="fa-solid fa-question-circle"></i></div>
                <h5 className="font-medium mb-2">线上理论答题</h5>
                <p className="text-gray-600 text-sm">检验预习效果，巩固理论知识</p>
              </div>
              <div className="solution-card p-4 rounded-lg text-center">
                <div className="text-blue-600 text-2xl mb-2"><i className="fa-solid fa-vr-cardboard"></i></div>
                <h5 className="font-medium mb-2">线上虚拟仿真</h5>
                <p className="text-gray-600 text-sm">安全无风险的虚拟操作练习</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="solution-card p-4 rounded-lg text-center">
                <div className="text-blue-600 text-2xl mb-2"><i className="fa-solid fa-laptop"></i></div>
                <h5 className="font-medium mb-2">线上设备实操</h5>
                <p className="text-gray-600 text-sm">远程控制真实设备进行操作</p>
              </div>
              <div className="solution-card p-4 rounded-lg text-center">
                <div className="text-blue-600 text-2xl mb-2"><i className="fa-solid fa-flask"></i></div>
                <h5 className="font-medium mb-2">线下设备实操</h5>
                <p className="text-gray-600 text-sm">实地操作真实设备</p>
              </div>
              <div className="solution-card p-4 rounded-lg text-center">
                <div className="text-blue-600 text-2xl mb-2"><i className="fa-solid fa-chart-line"></i></div>
                <h5 className="font-medium mb-2">线上报告</h5>
                <p className="text-gray-600 text-sm">自动生成实训报告</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg mb-8"
          >
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E6%95%B0%E5%AD%97%E5%8C%96%E5%AE%9E%E8%AE%AD%E6%95%B4%E4%BD%93%E6%9E%B6%E6%9E%84%E5%9B%BE%2C%E7%B3%BB%E7%BB%9F%E5%9B%BE%E8%A1%A8%2C%E6%8A%80%E6%9C%AF%E5%9B%BE%E8%A1%A8&sign=2364a46ec125f2815d281d9eaa962957" 
              alt="数字化实训整体架构" 
              className="w-full h-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-4 text-blue-700">智慧实训室——线上线下混合</h4>
              <p className="text-gray-600 mb-6">体系培训智慧化新突破，通过线上线下结合的方式，实现理论知识与实践操作的无缝衔接。</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1 text-blue-700">01 线上课程</h5>
                  <p className="text-gray-600 text-xs">理论知识与虚拟操作</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1 text-blue-700">02 线上预约线下实操</h5>
                  <p className="text-gray-600 text-xs">灵活安排实训时间</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1 text-blue-700">03 开放式自由搭建</h5>
                  <p className="text-gray-600 text-xs">个性化学习路径</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1 text-blue-700">04 数据收集自动评分</h5>
                  <p className="text-gray-600 text-xs">客观评价学习效果</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1 text-blue-700">05 AI评价</h5>
                  <p className="text-gray-600 text-xs">智能反馈与指导</p>
                </div>
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
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E6%99%BA%E6%85%A7%E5%AE%9E%E8%AE%AD%E5%AE%A4%2C%E8%AE%BE%E5%A4%87%E6%99%BA%E8%83%BD%E5%8C%96%2C%E7%BA%BF%E4%B8%8A%E7%BA%BF%E4%B8%8B%E6%B7%B7%E5%90%88%2C%E5%AE%9E%E9%AA%8C%E5%AE%A4%E6%99%AF&sign=2df03ddd8aab4e67c7a4b349fea4ac13" 
                alt="智慧实训室" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-center text-blue-700">智慧实训室——智慧平台</h4>

            <div className="grid md:grid-cols-5 gap-4 mb-8">
              <div className="solution-card p-4 rounded-lg text-center">
                <div className="text-blue-600 text-2xl mb-2">Ⅰ</div>
                <h5 className="font-medium mb-2">智慧实验室管理平台</h5>
              </div>
              <div className="solution-card p-4 rounded-lg text-center">
                <div className="text-blue-600 text-2xl mb-2">Ⅱ</div>
                <h5 className="font-medium mb-2">基础管理</h5>
              </div>
              <div className="solution-card p-4 rounded-lg text-center">
                <div className="text-blue-600 text-2xl mb-2">Ⅲ</div>
                <h5 className="font-medium mb-2">实验室预约</h5>
              </div>
              <div className="solution-card p-4 rounded-lg text-center">
                <div className="text-blue-600 text-2xl mb-2">Ⅳ</div>
                <h5 className="font-medium mb-2">智能实验指导</h5>
              </div>
              <div className="solution-card p-4 rounded-lg text-center">
                <div className="text-blue-600 text-2xl mb-2">Ⅴ</div>
                <h5 className="font-medium mb-2">远程管控</h5>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E6%99%BA%E6%85%A7%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0%E7%95%8C%E9%9D%A2%2C%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%2C%E6%8E%A7%E5%88%B6%E9%9D%A2%E6%9D%BF%2C%E7%A7%91%E6%8A%80%E6%84%9F&sign=1ffe071155cb545c290a53c16575096c" 
                alt="智慧平台" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-center text-blue-700">智慧实训室——远程控制</h4>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-600 mb-6">
                  虚拟仿真资源，能够让学生随时随地访问实验教学资源，从而更加便捷地进行课前预习和训练。虚拟实验还可设置各种异常场景，进行事故处理演练，弥补实际教学资源不足。
                </p>
                <p className="text-gray-600">学生进行虚拟仿真实验获得考核证书后方可以进行实操。</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E8%BF%9C%E7%A8%8B%E6%8E%A7%E5%88%B6%E5%AE%9E%E9%AA%8C%E8%AE%BE%E5%A4%87%2C%E7%94%9F%E4%BA%A7%E7%BB%84%E4%BB%B6%2C%E6%95%B0%E5%AD%97%E5%8C%96%E6%8E%A7%E5%88%B6%2C%E8%AE%BE%E5%A4%87%E6%93%8D%E4%BD%9C&sign=06cdba4238476234def389811cb5ebcf" 
                  alt="远程控制" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E8%99%9A%E6%8B%9F%E4%BB%BF%E7%9C%9F%E8%BD%AF%E4%BB%B6%E7%95%8C%E9%9D%A2%2C%E5%AE%9E%E8%AE%AD%E6%A8%A1%E6%8B%9F%2C%E6%95%B0%E5%AD%97%E5%8C%96%E5%B7%A5%E5%85%B7%2C%E8%BD%AF%E4%BB%B6%E6%8E%A7%E5%88%B6%E9%A1%B5%E9%9D%A2&sign=759757628dbbdff674ddfc30a515f6ce" 
                alt="虚拟仿真软件" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-center text-blue-700">智慧实训/实验室——物联网</h4>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h5 className="font-semibold mb-4 text-blue-700">智慧实验室功能：</h5>
                <p className="text-gray-600 mb-6">
                  AI检测：便于产品出现异常时可追踪溯源。在生产单元对应生产现场构建视频监控、智能环境监控系统，点击3D模拟场景中的传感器在屏幕上直接显示对应视频监控的实时画面以及设备的实时数据。
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E7%89%A9%E8%81%94%E7%BD%91%E5%AE%9E%E9%AA%8C%E5%AE%A4%2C%E4%BC%A0%E6%84%9F%E5%99%A8%E7%B3%BB%E7%BB%9F%2C%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%2C%E6%99%BA%E8%83%BD%E7%8E%AF%E5%A2%83%E7%9B%91%E6%8E%A7&sign=0eba5b5e41f6fcab373aea98c1e8200d" 
                  alt="物联网" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E5%AE%9E%E9%AA%8C%E5%AE%A4%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%2C%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%2C%E7%89%A9%E8%81%94%E7%BD%91%E7%B3%BB%E7%BB%9F%E6%8E%A7%E5%88%B6%E5%9B%BE&sign=90275a445d97cc0c06d6b33658d65d4d" 
                alt="实验室数据中心" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-center text-blue-700">智慧实训/实验室——智慧巡检</h4>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h5 className="font-semibold mb-4 text-blue-700">智慧实验室功能：</h5>
                <p className="text-gray-600 mb-6">
                  智能助教机器人巡检，用智能助教为实验人员提供交互式的指导，提高实验效率，降低风险。利用数字化的实验指导书，确保实验按照规定的标准执行。
                </p>
                <p className="text-gray-600">
                  实验过程中持续收集实验参数，利用收集到的数据优化未来的实验设计，从而达到教学目标的优化，并形成数据沉淀，让实验和教学数据实时来源于一线。
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E6%99%BA%E8%83%BD%E5%B7%A1%E6%A3%80%E6%9C%BA%E5%99%A8%E4%BA%BA%2C%E5%AE%9E%E9%AA%8C%E5%AE%A4%E6%99%BA%E8%83%BD%E5%8C%96%2C%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A7%E5%88%B6%2C%E7%A7%91%E6%8A%80%E6%99%AF&sign=edc73e6e753326831ba33bddc272dc85" 
                  alt="智慧巡检" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%B7%A1%E6%A3%80%E7%B3%BB%E7%BB%9F%2C%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%2C%E7%AE%A1%E7%90%86%E7%95%8C%E9%9D%A2%2C%E8%BF%9C%E7%A8%8B%E7%9B%91%E6%8E%A7&sign=b68ac32dea13eef4a6c8722fb69bbb84" 
                alt="巡检系统" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-center text-blue-700">智慧实训室——AI视频分析</h4>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h5 className="font-semibold mb-4 text-blue-700">智慧实验室功能：</h5>
                <p className="text-gray-600 mb-6">
                  AI视频分析：AI视频分析系统通过深度学习、图像识别等技术，可以实现对监控区域内的实时分析和识别。一旦系统识别到安全异常事件能够迅速作出反应，及时弹出告警窗口，并将告警事件推送至负责人或当事人。
                </p>
                <p className="text-gray-600">
                  通过对实验室的人，物、行为进行抓拍、检测与识别，对异常情况进行智能提醒和通知。目前可检测：皮肤裸露、未佩戴口罩、未佩戴手套、未穿实验服，人员越界、人员摔倒、人员睡岗。
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=AI%E8%A7%86%E9%A2%91%E5%88%86%E6%9E%90%E7%B3%BB%E7%BB%9F%2C%E5%AE%9E%E9%AA%8C%E5%AE%A4%E5%AE%89%E5%85%A8%E7%9B%91%E6%8E%A7%2C%E4%BA%BA%E8%BE%BE%E6%A3%80%E6%B5%8B%2C%E6%99%BA%E8%83%BD%E7%AE%A1%E7%90%86&sign=3359f6f1cc703cec2a504ebbd0dc3603" 
                  alt="AI视频分析" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E8%A7%86%E9%A2%91%E5%88%86%E6%9E%90%E7%B3%BB%E7%BB%9F%E7%95%8C%E9%9D%A2%2C%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%2C%E4%BA%BA%E4%BD%93%E8%A1%8C%E4%B8%BA%E7%9B%91%E6%B5%8B%2C%E6%99%BA%E8%83%BD%E6%8E%A7%E5%88%B6%E5%9B%BE&sign=33d33189aeb2a03a31d79439b1f6a966" 
                alt="视频分析系统" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-center text-blue-700">智慧实训/实验室——数据中心</h4>

            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E7%95%8C%E9%9D%A2%2C%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96%2C%E6%95%B0%E6%8D%AE%E6%8E%A7%E5%88%B6%E5%9B%BE%2C%E7%BB%9F%E8%AE%A1%E6%95%B0%E6%8D%AE%E5%9B%BE%E8%A1%A8&sign=748c271cf7a7fa9f52a470740fd5aa0d" 
                alt="数据中心" 
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%E8%AF%BE%E7%A8%8B%E8%B5%84%E6%BA%90%E6%B1%87%E6%80%BB%2C%E6%95%99%E5%AD%A6%E8%B5%84%E6%BA%90%E7%B3%BB%E7%BB%9F%2C%E5%AD%A6%E4%B9%A0%E7%B3%BB%E7%BB%9F%2C%E6%95%B0%E5%AD%97%E5%8C%96%E5%86%85%E5%AE%B9&sign=001e1014384e543f940e7547c9a6cb81" 
                  alt="课程资源" 
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h5 className="font-semibold mb-4 text-blue-700">课前：课程资源汇总</h5>
                <p className="text-gray-600 mb-6">学生依据教材和教师上传的教学课件进行预习，了解专业基础知识。遇到问题时通过AI助手提问，AI结合知识库精准解答。</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h6 className="font-medium text-sm mb-1 text-blue-700">课程教师讲义</h6>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h6 className="font-medium text-sm mb-1 text-blue-700">学员工作手册式教材</h6>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h6 className="font-medium text-sm mb-1 text-blue-700">练习考试题库</h6>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h6 className="font-medium text-sm mb-1 text-blue-700">教师线上培训视频</h6>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;