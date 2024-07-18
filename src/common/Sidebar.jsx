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
      <section className='sidebar'>
        <section className='px-2'>
          <section className='w-100 border border-1 border-success d-flex justify-content-center mb-2 align-items-center'>
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
                    <section className='sidebar_options d-flex align-items-center'>
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
