import React, { useEffect, useState } from 'react'
import { Header } from '../common/Header'
import { Sidebar } from '../common/Sidebar'
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

        <section className='dashboard_section border border-2 border-success w-100 position-relative'>
          <Header />

          <section className=''>
            
          </section>
        </section>
      </section>
    </>
  )
}
