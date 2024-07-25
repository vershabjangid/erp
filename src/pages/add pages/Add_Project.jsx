import { Field, Formik, Form } from 'formik'
import React from 'react'
import { Header } from '../../common/Header'


export function Add_Project() {
    return (
        <>
            <section className='main w-100'>
                <Header />
                <Formik>
                    <div className='add_employee_secction w-100 border border-1 border-success'>
                        <Form className='add_employee_secction '>
                            <div className='input_common_outer d-flex'>
                                <div className='common_input_section_card bg-white  rounded-1'>
                                    <div className='border-bottom border-1 border-secondary'>
                                        <h3 className='p-2'>Customer Details</h3>
                                    </div>




                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                File Code
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="File_Code" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Name
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Name" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                GSTIN
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="GSTIN" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Registration Date
                                            </label>

                                            <div>
                                                <Field type="date" className="w-100" name="Registration_Date" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Address
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Address" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Phone.No
                                            </label>

                                            <div>
                                                <Field type="number" className="w-100 border border-1 border-black p-1" name="Phone_Number" />
                                            </div>
                                        </div>
                                    </div>



                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Email
                                            </label>

                                            <div>
                                                <Field type="email" className="w-100 border border-1 border-black p-1" name="Email" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Username
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100 border border-1 border-black p-1" name="Username" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Password
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100 border border-1 border-black p-1" name="Password" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Status
                                            </label>

                                            <div>
                                                <Field as="select" className="w-100 border border-1 border-black p-1" name="Status" >
                                                    <option>choose one option</option>
                                                    <option value="0">De-active</option>
                                                    <option value="1">active</option>
                                                </Field>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Image
                                            </label>

                                            <div>
                                                <Field type="file" className="w-100 border border-1 border-black p-1" name="Image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' d-flex justify-content-center my-3'>
                                        <button type='submit' className='bg-primary me-1 px-5 py-2 rounded border-0 text-white fw-bold fs-5'>Save</button>
                                        <button type='reset' className='bg-danger px-5 py-2 rounded border-0 text-white fw-bold fs-5'>Clear</button>
                                    </div>
                                </div>
                            </div>

                        </Form>



                    </div>

                </Formik>
            </section>
        </>
    )
}
