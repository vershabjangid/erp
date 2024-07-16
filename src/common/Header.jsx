import React, { useState } from 'react'
import logo from "../images/360_F_513476156_AA8IEOmw88mX2R384H6ggnkPJFhLzxxU-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { sidebardata } from './Sidebar data/sidebardata';
export function Header() {

    let [option, setoption] = useState(false)
    let data = sidebardata
    let [sidedata, setsidedata] = useState(data[0].id)
    return (
        <>
            <header className=' d-flex '>
                <section className='w-50  d-flex align-items-center fs-5 '>
                    <div className='h-100'>
                        <img src={logo} alt="" className='h-100' />
                    </div>

                    <div className=' ms-3'>
                        <FontAwesomeIcon icon={faBars} />
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
            </header>

            <section className='sidebar border border-1 border-danger text-white'>
                {
                    data.map((items, i) => {
                        console.log(items)
                        if (items.path) {
                            return (
                                <>
                                    <Link className=' text-decoration-none text-white' to={items.path}>
                                        <section className='border border-1'>
                                            <div className='border border-1 bg-black border-danger d-flex justify-content-center align-items-center py-3'>
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
                                    <section className='border border-1 position-relative ' onClick={() => setsidedata(items.id)}>
                                        <div className='border border-1 bg-black border-danger d-flex justify-content-center align-items-center py-3'>
                                            <div className=''>
                                                {items.icon}
                                            </div>

                                            <div className='ms-2'>
                                                {items.name}
                                            </div>
                                        </div>

                                        <div className={items.id == sidedata ? "suboptions position-absolute top-100 w-100 bg-black " : "d-none"}>
                                            {
                                                items.subcategory.map((v, i) => {
                                                    return (
                                                        <>
                                                            <div className='w-100 border py-3 text-center d-flex justify-content-center'>
                                                                <div className=''>
                                                                    {v.sub_icon}
                                                                </div>

                                                                <div className='ms-2'>
                                                                    {v.subcategory_name}
                                                                </div>
                                                            </div>
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
        </>
    )
}
