import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    return (
        <>
            <div className="arlo_tm_section" id="skill">
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>FrontEnd</h4>
                                </div>
                                <li>HTML, CSS </li>
                                <li>ReactJs </li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                            <span><span className="label">HTML, CSS- <span className="experience"></span></span><span className="number">95%</span></span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar completed={95}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                            <span><span className="label">REACTJS  <span className="experience"></span></span><span className="number">85%</span></span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar completed={85}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>BackEnd</h4>
                                </div>
                                <li>NodeJs</li>
                                <li>NestJs</li>
                                <li>PostgresDB, MySQL, SQLServer, MongoDB</li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                            <span><span className="label">NODEJS<span className="experience"></span></span><span className="number">85%</span></span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar completed={95}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                            <span><span className="label">NESTJS<span className="experience"></span></span><span className="number">80%</span></span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar completed={85}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="90" data-color="#000">
                                            <span><span className="label">SQL & NOSQL<span className="experience"></span></span><span className="number">80%</span></span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar completed={90}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skill;
