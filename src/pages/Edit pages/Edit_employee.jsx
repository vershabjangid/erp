import React from 'react'
import { Header } from '../../common/Header'
import { Field, Formik ,Form } from 'formik'
import { ToastContainer } from 'react-toastify'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export  function Edit_employee() {
  return (
    <>
      <section className='main w-100'>
                <Header />


                <Formik

                    initialValues={{
                        First_Name: "",
                        Last_Name: " ",
                        Email: "",
                        Phone: "",
                        Org_Email: "",
                        Password: "",
                        Address: "",
                        CTC_Hrs: "",
                        Billable: "",
                        CTC_Mon: "",
                        Gender: "",
                        Photo: "",
                        DOB: "",
                        Date_Of_Joining: "",
                        Date_Of_Leaving: "",
                        Referred: "",
                        Address_Proof: "",
                        Designation: "",
                        Working_under: "",
                        Reporting: "",
                        Login_Access: "",
                        Active_User: "",
                        Lead_Handler: "",
                        Customer_List: "",
                        Show_Billing: ""
                    }}


                    onSubmit={(values)=>{
                        // datainsert(values)
                    }}
                >
                    <div className='add_employee_secction w-100 border border-1 border-success'>
                        <Form className='add_employee_secction '>
                            <div className='input_common_outer d-flex'>
                                <div className='common_input_section_card bg-white  rounded-1'>
                                    <div className='border-bottom border-1 border-secondary'>
                                        <h3 className='p-2'>Employee Details</h3>
                                    </div>

                                    <div className='px-2 d-flex pb-3 pt-2'>
                                        <div className='w-50 me-1'>
                                            <label>
                                                First Name
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="First_Name" />
                                            </div>
                                        </div>


                                        <div className='w-50 ms-1'>
                                            <label>
                                                Last Name
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Last_Name" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Email
                                            </label>

                                            <div>
                                                <Field type="email" className="w-100" name="Email" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Phone Number
                                            </label>

                                            <div>
                                                <Field type="number" className="w-100" name="Phone" />
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
                                                Organization Email
                                            </label>

                                            <div>
                                                <Field type="email" className="w-100" name="Org_Email" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-50 me-1'>
                                            <label>
                                                CTC / Hrs
                                            </label>

                                            <div>
                                                <Field type="number" className="w-100" name="CTC_Hrs" />
                                            </div>
                                        </div>


                                        <div className='w-50 ms-1'>
                                            <label>
                                                Billable / Hrs
                                            </label>

                                            <div>
                                                <Field type="number" className="w-100" name="Billable" />
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
                                        <div className='w-50 me-1'>
                                            <label>
                                                CTC / Monthly
                                            </label>

                                            <div>
                                                <Field type="number" className="w-100" name="CTC_Mon" />
                                            </div>
                                        </div>


                                        <div className='w-50 ms-1'>
                                            <label>
                                                Gender
                                            </label>

                                            <div>
                                                <Field as="select" className="w-100" name="Gender">
                                                    <option>
                                                        Choose Gender
                                                    </option>

                                                    <option value="Male">
                                                        Male
                                                    </option>

                                                    <option value="Female">
                                                        Female
                                                    </option>

                                                    <option value="Other">
                                                        Other
                                                    </option>
                                                </Field>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Photo
                                            </label>

                                            <div>
                                                <Field type="file" className="w-100 border border-1 border-black p-1" name="Photo" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Date Of Birth
                                            </label>

                                            <div>
                                                <Field type="date" className="w-100 border border-1 border-black p-1" name="DOB" />
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className='common_input_section_card bg-white rounded-1'>
                                    <div className='border-bottom border-1 border-secondary'>
                                        <h3 className='p-2'>Joining Details</h3>
                                    </div>

                                    <div className='px-2 d-flex pb-3 pt-2'>
                                        <div className='w-50 me-1'>
                                            <label>
                                                Date Of Joining
                                            </label>

                                            <div>
                                                <Field type="date" className="w-100" name="Date_Of_Joining" />
                                            </div>
                                        </div>


                                        <div className='w-50 ms-1'>
                                            <label>
                                                Date of Leaving
                                            </label>

                                            <div>
                                                <Field type="date" className="w-100" name="Date_Of_Leaving" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Referred by
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Referred" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Address Proof
                                            </label>

                                            <div>
                                                <Field type="file" className="w-100 p-1 border border-1 border-black" name="Address_Proof" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Designation
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Designation" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Working Under
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Working_under" />
                                            </div>
                                        </div>
                                    </div>



                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Reporting To
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100 border border-1 border-black p-1" name="Reporting" />
                                            </div>
                                        </div>
                                    </div>

                                <div className='common_input_section_card bg-white  rounded-1'>
                                    <div className='border-bottom border-1 border-secondary'>
                                        <h3 className='p-2'>Login Permission</h3>
                                    </div>



                                    <div className='px-2 d-flex pb-3 pt-2'>
                                        <div className='w-100 me-1 d-flex justify-content-between align-items-center'>
                                            <label>
                                                Enable Login Access
                                            </label>

                                            <Field type="checkbox" className="" name="Login_Access" />
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3 '>
                                        <div className='w-100 me-1 d-flex justify-content-between align-items-center'>
                                            <label>
                                                Activate User
                                            </label>

                                            <Field type="checkbox" className=" border border-1 border-black"  name="Active_User" />
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1 d-flex justify-content-between align-items-center'>
                                            <label>
                                               Lead Handler
                                            </label>

                                            <Field type="checkbox" className="" name="Lead_Handler" />
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1 d-flex justify-content-between align-items-center'>
                                            <label>
                                                Show Only Assigned Customer List
                                            </label>

                                            <Field type="checkbox" className="" name="Customer_List" />
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1 d-flex justify-content-between align-items-center'>
                                            <label>
                                                Show Customer Billing
                                            </label>

                                            <Field type="checkbox" className=""   name="Show_Billing" />
                                        </div>
                                    </div>
                                <div className=' d-flex justify-content-center my-3'>
                                    <button type='submit' className='bg-primary me-1 px-5 py-2 rounded border-0 text-white fw-bold fs-5'>Save</button>
                                    <button type='reset' className='bg-danger px-5 py-2 rounded border-0 text-white fw-bold fs-5'>Clear</button>
                                </div>
                                </div>
                                </div>



                            </div>
                        </Form>



                    </div>


                </Formik>


                <section className='customize_btn border border-1 border-danger position-fixed  px-2 py-1'>
                    <HiAdjustmentsHorizontal className='fs-3' />
                    Customize
                </section>
            </section>

            <ToastContainer/>
    </>
  )
}
