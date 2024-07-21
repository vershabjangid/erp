import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";

import { FaBars } from "react-icons/fa";
import { Sidebar } from './Sidebar';
import { Dashboard } from '../pages/Dashboard';
import logo from '../images/360_F_513476156_AA8IEOmw88mX2R384H6ggnkPJFhLzxxU-removebg-preview.png'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { sidebardata } from './Sidebar data/sidebardata';
import { Link } from 'react-router-dom';


export function Header() {
    let [option, setoption] = useState(false)
    let sidedata = sidebardata
    let [current, setcurrent] = useState(sidedata[0].id)

    let [sidecollapse,setcollapse]=useState(false)
    return (
        <>

            <header className='bg-white w-100 position-relative'>
                <div className='col-6 h-100 d-flex align-items-center'>

                    <div className='menubar ms-4 fs-5 justify-content-center d-flex align-items-center' onClick={()=>setcollapse(!sidecollapse)}>
                        <FaBars />
                    </div>
                </div>

                <div className='col-6 d-flex justify-content-end'>
                    <div className='header_profile border border-1 border-secondary  me-4 fs-2 justify-content-center d-flex align-items-center'>
                        <CgProfile />
                    </div>
                </div>

                
            <section className={sidecollapse ? "sidebar position-absolute top-100" : "sidebar_deactive position-absolute top-100"}>
                <section className='px-2'>
                    <section className='w-100  d-flex justify-content-center mb-2 align-items-center'>
                        <img src={logo} alt="" className='w-50' />
                    </section>

                    {
                        sidedata.map((items, i) => {
                            if (items.path) {
                                return (
                                    <>
                                        <Link className='text-decoration-none'>
                                            <section className='sidebar_options d-flex align-items-center'>
                                                <div className='col-12'>
                                                    <div className='d-flex align-items-center'>
                                                        {items.icon}
                                                        <span className='ms-2 '>{items.name}</span>
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

                                        <section className='' onClick={() => setcurrent(items.id)}>
                                            <section className='sidebar_options position-relative d-flex align-items-center'>
                                                <div className='col-10'>
                                                    <div className='d-flex align-items-center'>
                                                        {items.icon}
                                                        <span className='ms-2 '>{items.name}</span>
                                                    </div>
                                                </div>

                                                <div className='col-2 fs-5 d-flex justify-content-center align-items-center'>
                                                    <IoIosArrowBack />
                                                </div>
                                            </section>

                                            <div className={items.id == current ? 'subnav_active col-12' : 'subnav_de-active col-12'}>
                                                <div className='w-100'>
                                                    {
                                                        items.subcategory.map((items, i) => {
                                                            if (items.path) {
                                                                return (
                                                                    <>
                                                                        <Link className=' text-decoration-none text-white' to={items.path}>
                                                                            <div className=' d-flex justify-content-center py-2 border-bottom border-1 border-black w-100'>
                                                                                <div className='me-2'>
                                                                                    {items.sub_icon}
                                                                                </div>
                                                                                <div className=''>
                                                                                    {items.subcategory_name}
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </>
                                                                )
                                                            }


                                                            else {
                                                                return (
                                                                    <>
                                                                        <Link className=' text-decoration-none text-white' to={items.path}>
                                                                            <div className=' d-flex justify-content-center py-2 border-bottom border-1 border-black w-100'>
                                                                                <div className='me-2'>
                                                                                    {items.sub_icon}
                                                                                </div>
                                                                                <div className=''>
                                                                                    {items.subcategory_name}
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    </>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                )
                            }
                        })
                    }



                </section>
            </section>

            </header>



        </>
    )
}
