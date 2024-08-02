import React, { useEffect, useState } from 'react'
import { Header } from '../common/Header'
import { IoHomeOutline } from "react-icons/io5";
import axios from 'axios';

export function Dashboard() {

  let getlocaldata = JSON.parse(localStorage.getItem("customerdata"))


  let [data, setdata] = useState([]);

  let getdata = () => {
    axios.get(`/erp/view-project.php`)
      .then((res) => {
        setdata(res.data.Details)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getdata();
  }, [])



  return (
    <>

      <section className='main d-flex'>

        <section className='dashboard_section border border-2 border-success w-100'>
          <Header />

          <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
            <div className='d-flex align-items-center'> <IoHomeOutline className='ms-1 me-2' />  Dashboard</div>
          </section>
        </section>
      </section>
    </>
  )
}
