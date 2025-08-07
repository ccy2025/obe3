const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <p className="text-gray-400">北京欧倍尔集团成立于2012年，总部位于北京，业务遍及全国所有省份及港澳台、新加坡等地。</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <p className="text-gray-400 mb-2">北京总公司地址：北京市海淀区清河永泰园甲1号建金商厦5层</p>
            <p className="text-gray-400">山东分公司地址：济南市市中区经十路22068号山东出版智能产业大厦9、10层</p>
          </div><div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <p className="text-gray-400 mb-2">电话：010-82830966</p>
            <p className="text-gray-400 mb-2">山东分公司：400-076-5556</p>
            <p className="text-gray-400">产业园：13285419153</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">网站信息</h3>
            <p className="text-gray-400 mb-2">网址：www.bjoberj.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2024 北京欧倍尔软件技术开发有限公司. 保留所有权利.</p>
          <p className="text-gray-400">created by <a href="https://space.coze.cn" className="text-blue-400 hover:text-blue-300">coze space</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;