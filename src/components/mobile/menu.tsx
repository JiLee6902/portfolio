import { useState } from "react"

const MobileMenu = () => {
  const [activeTab, setActiveTab] = useState<string>("home")
  return (
    <>
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a href="index.html"><img src="img/logo/mobile_logo.png" alt="mobile_logo" /></a>
          </div>
          <div className="arlo_tm_trigger">
            <div className="hamburger hamburger--collapse-r">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap">
          <div className="mob_menu">
            <ul className="anchor_nav">
              <li><a href="#home" className={activeTab === 'home' ? "active" : ""}
                onClick={() => setActiveTab('home')}
              >Home</a></li>
              <li><a href="#about" className={activeTab === 'about' ? "active" : ""}
                onClick={() => setActiveTab('about')}
              >About Me</a></li>
              <li><a href="#skill" className={activeTab === 'skill' ? "active" : ""}
                onClick={() => setActiveTab('skill')}
              >Skills</a></li>
              <li><a href="#projects" className={activeTab === 'projects' ? "active" : ""}
                onClick={() => setActiveTab('projects')}
              >Projects</a></li>
              <li><a href="#news" className={activeTab === 'news' ? "active" : ""}
                onClick={() => setActiveTab('news')}
              >News</a></li>
              <li><a href="#contact" className={activeTab === 'contact' ? "active" : ""}
                onClick={() => setActiveTab('contact')}
              >Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu