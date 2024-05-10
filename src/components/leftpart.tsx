import { useState } from "react"
import { isMobile } from "react-device-detect";




interface IProps {
    showLeftPart: boolean
    setShowLeftPart: (value: boolean) => void
}

const LeftPart = (props: IProps) => {

    const [activeTab, setActiveTab] = useState<string>("home")
    return (
        <>
            <div className={props.showLeftPart === true ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img src="img/logo/desktop-logo.png" alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
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
                    <div className="leftpart_bottom">
                        <div className="social_wrap">
                            <ul>
                                <li><a href="#"><i className="xcon-facebook"></i></a></li>
                                <li><a href="#"><i className="xcon-twitter"></i></a></li>
                                <li><a href="#"><i className="xcon-linkedin"></i></a></li>
                                <li><a href="#"><i className="xcon-instagram"></i></a></li>
                                <li><a href="#"><i className="xcon-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    {!isMobile &&
                        <a
                            className={props.showLeftPart === true ? "arlo_tm_resize opened" : "arlo_tm_resize"}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                props.setShowLeftPart(!props.showLeftPart)
                            }
                            }
                        ><i className={props.showLeftPart === true ? "xcon-angle-left opened" : "xcon-angle-left"}></i>
                        </a>}
                </div>
            </div>
        </>
    )
}

export default LeftPart;