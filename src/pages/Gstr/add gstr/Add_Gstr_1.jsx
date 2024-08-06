import React from 'react'
import { Header } from '../../../common/Header'
import { FaPercent } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoIosArrowDropright } from 'react-icons/io'
import { Formik, Form, Field } from 'formik'

export function Add_Gstr_1() {
    return (
        <>
            <section className='main'>
                <Header />

                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <FaPercent className='ms-2 me-2' />  Add GSTR-1</div>
                    <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/view-gstr-3b"}>View GSTR-1 List <IoIosArrowDropright /></Link></div>
                </section>




                <Formik>
                    <Form>
                        <section className='gstr_form_section bg-white border border-1 border-black'>
                            <h5 className='text-center'>FORM GSTR-1</h5>
                            <h5 className='text-center'>[See rule 59(1)]</h5>
                            <h5 className='text-center'>Details of outward supplies of goods or services</h5>
                            {/* date section */}
                            <section className='form_3_date_section mb-3 d-flex justify-content-end'>
                                <table className='mt-3 h-100 form_3_date_table'>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-50 text-center p-2 border-end border-1 border-black gstr_label '>Financial year</th>
                                        <td className='w-75 h-100'>
                                            <Field type="number" placeholder='Enter Year' className='w-100 border-0 h-100' name="year" /></td>
                                    </tr>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-50 text-center p-2 border-end border-1 border-black gstr_label '>Tax Period</th>
                                        <td className='w-50 h-100'>
                                            <Field type="text" placeholder='Enter Period' className='w-100 border border-1 border-white h-100' name="month" /></td>
                                    </tr>
                                </table>
                            </section>
                            {/* userinformation section */}
                            <section className='border border-1 border-black'>
                                <section className='d-flex'>
                                    <div className='col-2 border-end border-bottom border-1 border-black p-1'>1</div>
                                    <div className='table_label col-5 border-bottom border-end border-1 border-black p-1'>GSTIN</div>
                                    <div className='col-5 border-bottom border-1 border-black'><Field type="text" className="col-12 p-1 border-0" placeholder="GSTIN" /></div>
                                </section>
                                <section className='d-flex'>
                                    <div className='col-2 border-end border-1 border-black p-1'>2</div>
                                    <div className='table_label col-5'>
                                        <div className='col-12 d-flex border-bottom border-1 border-black'>
                                            <div className='col-2 p-1 border-end border-1 border-black'>(a)</div>
                                            <div className='col-10 p-1 border-end border-1 border-black'>
                                                Legal name of the registered person
                                            </div>
                                        </div>


                                        <div className='col-12 d-flex border-bottom border-1 border-black'>
                                            <div className='col-2  p-1 border-end border-1 border-black'>(b)</div>
                                            <div className='col-10 p-1 border-end border-1 border-black'>
                                                Trade name if any
                                            </div>
                                        </div>

                                        <div className='col-12 d-flex border-bottom border-1 border-black'>
                                            <div className='col-2 p-1 border-end border-1 border-black'>(c)</div>
                                            <div className='col-10 p-1 border-end border-1 border-black'>
                                                ARN
                                            </div>
                                        </div>

                                        <div className='col-12  d-flex'>
                                            <div className='col-2 p-1 border-end border-1 border-black'>(d)</div>
                                            <div className='col-10 p-1 border-end border-1 border-black'>
                                                ARN date
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-5 '>
                                        <div className='col-12 border-bottom border-1 border-black'>
                                            <Field type="text" className="col-12 p-1 border-0" placeholder=" Legal name of the registered person" />
                                        </div>

                                        <div className='col-12 border-bottom border-1 border-black'>
                                            <Field type="text" className="col-12 p-1 border-0" placeholder="Trade name if any" />
                                        </div>

                                        <div className='col-12 border-bottom border-1 border-black'>
                                            <Field type="text" className="col-12 p-1 border-0" placeholder=" ARN" />
                                        </div>

                                        <div className='col-12 '>
                                            <Field type="text" className="col-12 p-1 border-0" placeholder="ARN date" />
                                        </div>
                                    </div>
                                </section>
                            </section>
                            {/* userinformation section closed*/}
                            <section className='multiple_entries_section border border-1 border-black mt-4'>
                                <section className='border-bottom border-1 border-black bg-primary text-white fw-bold d-flex'>
                                    <div className='col-4 d-flex justify-content-center align-items-center border-end border-1 border-black py-1 text-center'>
                                        Description
                                    </div>
                                    <div className='col-1 p-1 d-flex justify-content-center align-items-center text-center border-end border-1 border-black'>No. of records</div>
                                    <div className='col-1 p-1 d-flex justify-content-center align-items-center text-center border-end border-1 border-black'>Document Type</div>
                                    <div className='col-1 p-1 d-flex justify-content-center align-items-center text-center border-end border-1 border-black'>Value (₹)</div>
                                    <div className='col-1 p-1 d-flex justify-content-center align-items-center text-center border-end border-1 border-black'>Integrated Tax (₹)</div>
                                    <div className='col-1 p-1 d-flex justify-content-center align-items-center text-center border-end border-1 border-black'>Central Tax (₹)</div>
                                    <div className='col-2 p-1 d-flex justify-content-center align-items-center text-center border-end border-1 border-black'>State/UT Tax (₹) </div>
                                    <div className='col-1 p-1 d-flex justify-content-center align-items-center text-center '>Cess (₹)</div>
                                </section>

                                {/* 4A section  */}

                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    4A - Taxable outward supplies made to registered persons (other than reverse charge supplies) including supplies made through e-commerce operator attracting TCS - B2B Regular
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Invoice
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-2 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                </section>


                                <section className='border-bottom border-1 border-black'>
                                    <div className='col-12 text-center'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" disabled />
                                    </div>
                                </section>


                                {/* 4b section  */}

                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    4B - Taxable outward supplies made to registered persons attracting tax on reverse charge - B2B Reverse charge
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Invoice
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-2 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                </section>


                                <section className='border-bottom border-1 border-black'>
                                    <div className='col-12 text-center'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" disabled />
                                    </div>
                                </section>

                                {/* 5 section  */}

                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    5 - Taxable outward inter-state supplies made to unregistered persons (where invoice value is more than Rs.2.5 lakh) including supplies made through e-commerce operator, rate wise - B2CL (Large)
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Invoice
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-2 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                </section>


                                <section className='border-bottom border-1 border-black'>
                                    <div className='col-12 text-center'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" disabled />
                                    </div>
                                </section>

                                {/* 6A section  */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    6A – Exports (with/without payment)
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Invoice
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-2 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                </section>


                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        - EXPWP
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Invoice
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-2 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                </section>


                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        - EXPWOP
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Invoice
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-2 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                </section>




                                <section className='border-bottom border-1 border-black'>
                                    <div className='col-12 text-center'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" disabled />
                                    </div>
                                </section>
                                {/* 6b section  */}



                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    6B - Supplies made to SEZ unit or SEZ developer - SEZWP/SEZWOP
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Invoice
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-2 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                </section>


                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        - SEZWP
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Invoice
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-2 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                </section>


                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        - SEZWOP
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Invoice
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-2 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                </section>




                                <section className='border-bottom border-1 border-black'>
                                    <div className='col-12 text-center'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" disabled />
                                    </div>
                                </section>



                                {/* 6c section  */}


                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                6C - Deemed Exports – DE
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Invoice
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-2 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                </section>





                                <section className='border-bottom border-1 border-black'>
                                    <div className='col-12 text-center'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" disabled />
                                    </div>
                                </section>
                            </section>


                        </section>

                    </Form>
                </Formik>
            </section>

        </>
    )
}
