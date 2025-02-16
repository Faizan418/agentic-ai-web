import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { LuBot } from "react-icons/lu";

const Header = () => {
  return (
    <div className="h-screen w-full">
      <div className={styles.navbar_imp}>
      <Navbar />
      </div>

      <div className={`${styles.main_container} flex flex-col items-center justify-center px-4 md:px-8`}>
  
        <div className="inline-flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse z-0"></span>
          <span className="text-sm text-purple-400">POWERED BY PANAVERSITY</span>
        </div>

        <div className={`${styles.hero_text} text-center`}>
          <span className=" bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-transparent bg-clip-text sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Enterprise AI Agents
          </span>
          <span className="text-lg  sm:text-2xl md:text-3xl lg:text-4xl block">for the Future</span>
        </div>

        <div className="max-w-2xl mx-auto bg-white/5 rounded-xl p-6 mb-12 backdrop-blur-sm border border-purple-500/20 w-full sm:w-3/4 z-0">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <LuBot className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-300 text-sm sm:text-base">
                  I can help optimize your workflows with neural networks.
                  <span className="inline-block w-0.5 h-5 ml-1 bg-purple-500 animate-pulse"></span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.button_group} flex flex-col sm:flex-row gap-4`}>
          <button
            type="button"
            className="group bg-gradient-to-r from-purple-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] flex items-center justify-center w-full sm:w-auto"
          >
            Deploy Your AI Agent
          </button>
          <button
            type="button"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] w-full sm:w-auto"
          >
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
