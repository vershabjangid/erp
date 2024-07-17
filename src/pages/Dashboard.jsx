import React from 'react'
import { Header } from '../common/Header'

export function Dashboard() {
  return (
    <>
      <section className='main'>
        <Header />


        <section className='page_label  bg-primary d-flex justify-content-between align-items-center flex-column flex-lg-row h-auto'>
          <div className='ms-1 ms-lg-5  d-flex align-items-center justify-content-center h-100 mt-2 mt-lg-0'>
            <h1 className='fs-2 text-white'>Dashboard</h1>
          </div>

          <div className='me-1 me-lg-5  d-flex align-items-center justify-content-center h-100 my-2 my-lg-0'>
            <h6 className=' text-white '></h6>
          </div>

        </section>
      </section>
    </>
  )
}
