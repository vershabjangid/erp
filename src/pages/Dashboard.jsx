import React, { useEffect, useState } from 'react'
import { Header } from '../common/Header'
import { IoHomeOutline } from "react-icons/io5";
import axios from 'axios';
import { IoIosConstruct } from 'react-icons/io';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

export function Dashboard() {

  let getlocaldata = JSON.parse(localStorage.getItem("customerdata"))
  console.log(getlocaldata)

  // let [data, setdata] = useState([]);
  // let [employeedata, setemployeedata] = useState([]);

  // let getdata = () => {
  //   axios.get(`/erp/view-project.php`)
  //     .then((res) => {
  //       setdata(res.data.Details)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  // useEffect(() => {
  //   getdata();
  // }, [])


  // console.log(data)



  // let getemployeedata = () => {
  //   axios.get(`/erp/view-employe.php`)
  //     .then((res) => {
  //       setemployeedata(res.data.Details)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  // useEffect(() => {
  //   getemployeedata();
  // }, [])


  return (
    <>

      <section className='main d-flex'>

        <section className='dashboard_section border border-2 border-success w-100'>
          <Header />

          <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
            <div className='d-flex align-items-center'> <IoHomeOutline className='ms-1 me-2' />  Dashboard</div>
          </section>


          <section className='welcome_user_banner col-6 border border-1 border-black my-2 p-3 bg-white rounded mx-1'>
            <section className=''>
              <h1 className='fs-3'>Welcome Back</h1>
              <h2>{getlocaldata.UserDetails.Name}</h2>
            </section>

            <section className='d-flex mt-4'>
              <div className='col-6 border border-1 border-danger'>
                <div className='col-3 my-4'>
                  <div className='text-center'>
                  <FontAwesomeIcon icon={faUserTie} className="fs-4 ms-1" />
                  </div>
                  <h5 className='text-center'>Total Employee</h5>
                </div>
                
              </div>
              <div className='col-6 border border-1 border-success'></div>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}
