import React, { useState } from 'react'
import { Header } from '../common/Header'
import { Sidebar } from '../common/Sidebar'

export function Dashboard() {

  let getlocaldata = JSON.parse(localStorage.getItem("customerdata"))
  console.log(getlocaldata)
  
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
