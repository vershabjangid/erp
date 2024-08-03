import React from 'react'
import { Header } from '../../../common/Header'
import { FaPercent } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoIosArrowDropright } from 'react-icons/io'

export function View_Gstr_3b() {
  return (
    <>
      <section className='main'>
        <Header/>


        <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
          <div className='d-flex align-items-center'> <FaPercent className='ms-2 me-2' />  View GSTR-3b List</div>
          <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/view-customer"}>View Customer <IoIosArrowDropright /></Link></div>
        </section>


        
      </section>
    </>
  )
}
