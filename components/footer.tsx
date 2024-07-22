const Footer = () => {
  return (
    <footer className="bg-second-gray text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">NFT Marketplace</h2>
            <p className="text-gray-400 mb-4">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className="text-gray-400 mb-4">Join our community</p>
            <div className="flex space-x-4"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Explore</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Marketplace
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Rankings
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Connect a wallet
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Join Our Weekly Digest</h2>
            <p className="text-gray-400 mb-4">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full px-3 py-2 rounded-l-lg focus:outline-none"
              />
              <button className="bg-purple-500 text-white px-4 py-2 rounded-r-lg hover:bg-purple-600 focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-gray-500 text-center mt-8">
          © NFT Market. Use this template freely.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
