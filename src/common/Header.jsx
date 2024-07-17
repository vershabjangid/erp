import React, { useState } from 'react'
import logo from "../images/360_F_513476156_AA8IEOmw88mX2R384H6ggnkPJFhLzxxU-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { sidebardata } from './Sidebar data/sidebardata';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
export function Header() {

    let [option, setoption] = useState(false)
    let data = sidebardata
    let [sidedata, setsidedata] = useState(data[0].id)
    let [sidebar,setsidebar]=useState(false); 
    return (
        <>
            <header className=' position-relative d-flex '>
                <section className='w-50  d-flex align-items-center fs-5 '>
                    <div className='h-100'>
                        {/* <img src={logo} alt="" className='h-100' /> */}
                    </div>

                    <div className=' ms-3'>
                        <FontAwesomeIcon icon={faBars} onClick={()=>setsidebar(!sidebar)} />
                    </div>
                </section>
                <section className='w-50 d-flex justify-content-end pe-4'>
                    <div className='d-flex align-items-center position-relative' onClick={() => setoption(!option)}>
                        <div className='fs-4'>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </div>

                        <div className='ms-2'>
                            User Name
                        </div>


                        <div className={option ? "position-absolute top-100 end-0 bg-black" : "header-options position-absolute"}>
                            <Link to={"/"} className=' text-decoration-none text-white'>
                                <div className='logout py-2 px-5 d-flex justify-content-between'>Logout

                                    <div className='text-white ms-4'>
                                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            <section className={sidebar? "sidebar_active position-absolute top-100 text-white" : "sidebar_deactive position-absolute top-100 text-white"}>
                {
                    data.map((items, i) => {
                        
                        if (items.path) {
                            return (
                                <>
                                    <Link className=' text-decoration-none text-white' to={items.path}>
                                        <section className='border-bottom'>
                                            <div className='sideoptions d-flex justify-content-center align-items-center py-3'>
                                                <div className=''>
                                                    {items.icon}
                                                </div>

                                                <div className='ms-2'>
                                                    {items.name}
                                                </div>
                                            </div>
                                        </section>
                                    </Link>
                                </>
                            )
                        }


                        else {
                            return (
                                <>
                                    <section className=' border-bottom  position-relative ' onClick={() => (setsidedata(items.id))}>
                                        <div className=' border-bottom  sideoptions  d-flex justify-content-center align-items-center py-3'>
                                            <div className=''>
                                                {items.icon}
                                            </div>

                                            <div className='ms-2'>
                                                {items.name}
                                            </div>


                                            <div className={items.id == sidedata ? "ms-5 arrow_rotate" : "arrow_rotate_disabled ms-5"}>
                                                <FontAwesomeIcon icon={faChevronRight} />
                                            </div>
                                        </div>

                                        <div className={items.id == sidedata ? "suboptions top-100 w-100 bg-primary " : "sub_options_deactive"}>
                                            {
                                                items.subcategory.map((v, i) => {
                                                    return (
                                                        <>
                                                            <Link className='text-white text-decoration-none' to={v.path}>
                                                                <div className='w-100 sideoptions border-top py-3 text-center d-flex justify-content-center'>
                                                                    <div className=''>
                                                                        {v.sub_icon}
                                                                    </div>

                                                                    <div className='ms-2'>
                                                                        {v.subcategory_name}
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </section>
                                </>
                            )
                        }
                    })
                }


            </section>
            </header>

        </>
    )
}
