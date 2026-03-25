import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function FooterComponent() {
  return (
    <footer className="bg-base-100 rounded-2xl mt-auto pt-10">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          <div className="flex items-start gap-3 lg:w-1/3">
            <div className="flex items-center justify-center w-10 h-10 min-w-[40px] rounded-full bg-primary/10">
              <span className="text-primary font-extrabold text-sm">İD</span>
            </div>
            <div>
              <p className="font-bold text-base-content text-sm mb-0.5">İhsan DEMİRCİ</p>
              <p className="text-base-content/50 text-xs">
                Bilgisayar mühendisliği öğrencisi & yazılım geliştirici.
              </p>
            </div>
          </div>

          <div className="text-center lg:w-1/3">
            <h6 className="font-semibold text-sm mb-3 text-base-content">Sosyal Medya</h6>
            <div className="flex justify-center gap-1">
              <a
                href="https://linkedin.com/in/ihsan-demirci-408846335/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm hover:bg-[#0A66C2] hover:text-white"
              >
                <FaLinkedin size={22} color="#0A66C2" />
              </a>
              <a
                href="https://github.com/DoritosLover1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm hover:bg-[#333] hover:text-white"
              >
                <FaGithub size={22} className="text-base-content" />
              </a>
              <a
                href="https://hackerrank.com/profile/ihsan_demirci_10/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm hover:bg-[#2EC866] hover:text-white"
              >
                <FaHackerrank size={22} color="#2EC866" />
              </a>
              <a
                href="https://leetcode.com/u/DoritosLover1/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm hover:bg-[#FFA116] hover:text-white"
              >
                <SiLeetcode size={22} color="#FFA116" />
              </a>
            </div>
          </div>

          <div className="text-center lg:text-right lg:w-1/3">
            <p className="text-base-content/50 text-sm">
              © {new Date().getFullYear()} İhsan DEMİRCİ. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;