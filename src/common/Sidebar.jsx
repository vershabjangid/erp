import React, { useState } from 'react'
import logo from '../images/360_F_513476156_AA8IEOmw88mX2R384H6ggnkPJFhLzxxU-removebg-preview.png'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { sidebardata } from './Sidebar data/sidebardata';
import { Link } from 'react-router-dom';


export function Sidebar() {
  let sidedata = sidebardata
  let [current, setcurrent] = useState(sidedata[0].id)
  
  

  return (
    <>
      <section className={ JSON.parse(localStorage.getItem('sidebar')) ? "sidebar_deactive" : "sidebar"}>
        <section className='px-2'>
          <section className='w-100 border border-1 border-success d-flex justify-content-center mb-2 align-items-center'>
            <img src={logo} alt="" className='w-50' />
          </section>

          {
            sidedata.map((items, i) => {
              if (items.path) {
                return (
                  <>
                    <Link className='text-decoration-none' to={items.path}>
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
    </>
  )
}
