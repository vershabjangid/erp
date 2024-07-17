import React from 'react'
import { Header } from '../../common/Header'
import { Formik, Form, Field } from 'formik'

export function Add_employee() {
    return (
        <>
            <section className='main'>
                <Header />

                <section className='page_label  bg-primary d-flex justify-content-between align-items-center flex-column flex-lg-row h-auto'>
                    <div className='ms-1 ms-lg-5  d-flex align-items-center justify-content-center h-100 mt-2 mt-lg-0'>
                        <h1 className='fs-2 text-white'>Add Employee</h1>
                    </div>

                    <div className='me-1 me-lg-5  d-flex align-items-center justify-content-center h-100 my-2 my-lg-0'>
                        <h6 className=' text-white '>View Employee</h6>
                    </div>

                </section>



                <Formik >
                    <Form>

                        <section className='common_form_outer border border-1 border-black  mt-3'>

                            <section className='col-8 border border-1 border-success d-flex justify-content-center align-items-end flex-column'>

                            </section>
                        </section>
                    </Form>
                </Formik>
            </section>
        </>
    )
}
