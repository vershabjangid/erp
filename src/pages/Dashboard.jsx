import React, { useEffect, useState } from 'react'
import { Header } from '../common/Header'
import { IoHomeOutline } from "react-icons/io5";
import axios from 'axios';
import { IoIosConstruct } from 'react-icons/io';

export function Dashboard() {

  let getlocaldata = JSON.parse(localStorage.getItem("customerdata"))


  let [data, setdata] = useState([]);
  let [employeedata, setemployeedata] = useState([]);

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


  console.log(data)

  
  
  let getemployeedata = () => {
    axios.get(`/erp/view-employe.php`)
    .then((res) => {
      setemployeedata(res.data.Details)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  useEffect(() => {
    getemployeedata();
  }, [])
  
  let count= 0;
  let employeecount = 0;
  
  return (
    <>

      <section className='main d-flex'>

        <section className='dashboard_section border border-2 border-success w-100'>
          <Header />

          <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
            <div className='d-flex align-items-center'> <IoHomeOutline className='ms-1 me-2' />  Dashboard</div>
          </section>


          <section className='total_information_dashboard'>
            <section className='total_employee text-center'>
              <h4>
                <IoIosConstruct className='text-white fs-1' />
              </h4>
              <h3 className='text-white'>Total Projects</h3>
              <h2 className='text-white'>
                {
                  data.map((items,i)=>{
                    if(getlocaldata.UserDetails.id == items.Admin_id){
                      count++
                    }

                  })
                }
                {count}
              </h2>
            </section>




            <section className='total_employee text-center'>
              <h4>
                <IoIosConstruct className='text-white fs-1' />
              </h4>
              <h3 className='text-white'>Total Employee</h3>
              <h2 className='text-white'>
                {
                  employeedata.map((items,i)=>{
                    if(getlocaldata.UserDetails.id == items.Admin_id){
                      employeecount++
                    }

                  })
                }
                {employeecount}
              </h2>
            </section>


            <section className='total_employee text-center'>
              <h4>
                <IoIosConstruct className='text-white fs-1' />
              </h4>
              <h3 className='text-white'>Total Projects</h3>
              <h2 className='text-white'>
                {
                  data.map((items,i)=>{
                    if(getlocaldata.UserDetails.id == items.Admin_id){
                      count++
                    }

                  })
                }
                {count}
              </h2>
            </section>



            <section className='total_employee text-center'>
              <h4>
                <IoIosConstruct className='text-white fs-1' />
              </h4>
              <h3 className='text-white'>Total Projects</h3>
              <h2 className='text-white'>
                {
                  data.map((items,i)=>{
                    if(getlocaldata.UserDetails.id == items.Admin_id){
                      count++
                    }

                  })
                }
                {count}
              </h2>
            </section>


            <section className='total_employee text-center'>
              <h4>
                <IoIosConstruct className='text-white fs-1' />
              </h4>
              <h3 className='text-white'>Total Projects</h3>
              <h2 className='text-white'>
                {
                  data.map((items,i)=>{
                    if(getlocaldata.UserDetails.id == items.Admin_id){
                      count++
                    }

                  })
                }
                {count}
              </h2>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}
