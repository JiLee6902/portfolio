import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { IoLogoReact } from 'react-icons/io5';
import { BsArrowRight, BsInstagram, BsTwitter } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { AiFillFacebook } from 'react-icons/ai';
import { SiNestjs } from "react-icons/si";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoBagRemoveSharp } from "react-icons/io5";

interface IProject {
    image: JSX.Element;
    title: string;
    description: string;
    detail: {
        description: string,
        frontend: string,
        backend: string,
        member: number,
        role: string,
        github: string,
    }
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null)

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDataDetail(null)
    }

    const dataProjects: IProject[] = [
        {
            image: <IoLogoReact
                size={50}
                color={'#2bebfd'}
            />,
            title: "React about Quiz",
            description: "Website về quiz",
            detail: {
                description: "(Seft-learning) Xây dựng website cơ bản về trắc nghiệm ôn tập và quản lý",
                frontend: "React, Redux Toolkit",
                backend: "Node.JS, MongoDB",
                member: 1,
                role: "Developers",
                github: "https://github.com/JiLee6902/quiz_react"
            }
        },
        {
            image: <IoLogoReact
                size={50}
                color={'#4096ff'}
            />,
            title: "React about Recruitment Jobs",
            description: "Website về tuyển dụng việc làm",
            detail: {
                description: "(Seft-learning) Xây dựng website cơ bản về tuyển dụng việc làm cho user và hr",
                frontend: "React, Redux Toolkit, Ant Design",
                backend: "",
                member: 1,
                role: "Developers",
                github: "https://github.com/JiLee6902/cv_reactfornest"
            }
        },
        {
            image: <SiNestjs
                size={50}
                color={'#ff4096'}
            />,
            title: "Nest about Recruitment Jobs",
            description: "Website về tuyển dụng việc làm",
            detail: {
                description: "(Seft-learning) Xây dựng website cơ bản về tuyển dụng việc làm cho user và hr",
                frontend: "",
                backend: "Nest.JS, MongoDB",
                member: 1,
                role: "Developers",
                github: "https://github.com/JiLee6902/cv_nestjs"
            }
        },
        {
            image: <IoBagRemoveSharp
                size={50}
                color={'#b2b4b4'}
            />,
            title: ".NET about Recruitment Jobs",
            description: "Website về tuyển dụng việc làm",
            detail: {
                description: "(Seft-learning) Xây dựng website cơ bản về tuyển dụng việc làm cho user và company tuyển dụng",
                frontend: "Bootstrap",
                backend: "SQLServer, .NET",
                member: 1,
                role: "Developers",
                github: "https://github.com/JiLee6902/cv_net"
            }
        },
        {
            image: <FaMoneyCheckAlt
                size={50}
                color={'#ffa940'}
            />,
            title: ".NET about Money Management",
            description: "Website về việc cho người dùng quản lý chi - tiêu của mình",
            detail: {
                description: "(Seft-learning) Xây dựng website cơ bản về việc quản lý dòng tiền của bản thân",
                frontend: "Bootstrap",
                backend: "SQLServer, .NET",
                member: 1,
                role: "Developers",
                github: "https://github.com/JiLee6902/finance_net"
            }
        }
    ]
    return (
        <>
            <Modal
                title={dataDetail && dataDetail.title ? `Dự án ${dataDetail?.title}` : ""}
                open={isModalOpen}
                onOk={() => handleCloseModal()}
                onCancel={() => handleCloseModal()}
                footer={null}
                maskClosable={false}
            >
                {dataDetail &&
                    <ul>
                        <li>Miêu tả: {dataDetail.detail.description}</li>
                        <li>Frontend: {dataDetail.detail.frontend}</li>
                        <li>Backend: {dataDetail.detail.backend}</li>
                        <li>Số lượng thành viên dự án: {dataDetail.detail.member}</li>
                        <li>Vai trò: {dataDetail.detail.role}</li>
                        <li>Github:<a href={dataDetail.detail.github}>{dataDetail.detail.github}
                        </a> </li>
                    </ul>
                }
            </Modal>

            <div className="arlo_tm_section" id="projects">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Projects</h3>
                            <span>Meet my projects</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects.map((item, index) => {
                                    return (
                                        <li key={`${index}-project`}>
                                            <div className="inner" title="Xem Chi Tiết"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    setDataDetail(item)
                                                    setIsModalOpen(true)
                                                }}
                                            >
                                                <div className="icon">
                                                    {item.image}

                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="view_detail" style={{ padding: "5px 0" }} onClick={showModal}>
                                                    <span style={{ cursor: "pointer" }} >
                                                        <BsArrowRight />
                                                        &nbsp;
                                                        Xem Chi Tiết
                                                    </span>
                                                </div>


                                            </div>
                                        </li>

                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;
