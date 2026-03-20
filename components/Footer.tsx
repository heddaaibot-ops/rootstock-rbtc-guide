
export default function Footer() {
  return (
    <footer className="bg-rsk-text-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4 text-rsk-orange">资源</h4>
            <ul className="space-y-2">
              <li><a href="https://rootstock.io/" target="_blank" rel="noopener noreferrer" className="hover:text-rsk-orange">官方网站</a></li>
              <li><a href="https://dev.rootstock.io/" target="_blank" rel="noopener noreferrer" className="hover:text-rsk-orange">开发者文档</a></li>
              <li><a href="https://rootstock.io/ecosystem/" target="_blank" rel="noopener noreferrer" className="hover:text-rsk-orange">生态系统</a></li>
              <li><a href="https://blog.rootstock.io/" target="_blank" rel="noopener noreferrer" className="hover:text-rsk-orange">博客</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-rsk-orange">社区</h4>
            <ul className="space-y-2">
              <li><a href="https://discord.gg/rootstock" target="_blank" rel="noopener noreferrer" className="hover:text-rsk-orange">Discord</a></li>
              <li><a href="https://twitter.com/rootstock_io" target="_blank" rel="noopener noreferrer" className="hover:text-rsk-orange">Twitter</a></li>
              <li><a href="https://t.me/rskofficialcommunity" target="_blank" rel="noopener noreferrer" className="hover:text-rsk-orange">Telegram</a></li>
              <li><a href="https://github.com/rsksmart/" target="_blank" rel="noopener noreferrer" className="hover:text-rsk-orange">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-rsk-orange">关于</h4>
            <p className="text-gray-300">
              本网站是 rBTC 获取教程，旨在帮助用户了解和获取 rBTC。
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© 2024 Rootstock. 本站为教程网站，非官方网站。</p>
        </div>
      </div>
    </footer>
  );
}
