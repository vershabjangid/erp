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

                                    <div className='col-1 text-center'>
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

                                    <div className='col-1 text-center'>
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

                                    <div className='col-1 text-center'>
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
                                    <div className='col-1 text-center'>
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
                                    <div className='col-1 text-center'>
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
                                    <div className='col-1 text-center'>
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
                                    <div className='col-1 text-center'>
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
                                    <div className='col-1 text-center'>
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
                                    <div className='col-1 text-center'>
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
                                    <div className='col-1 text-center'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>

                                </section>

                                <section className='border-bottom border-1 border-black'>
                                    <div className='col-12 text-center'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" disabled />
                                    </div>
                                </section>

                                {/* 7 - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    7- Taxable supplies (Net of debit and credit notes) to unregistered persons (other than the supplies covered in Table 5) including supplies made through e-commerce operator attracting TCS - B2CS (Others)
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Net Value
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
                                    <div className='col-1 text-center'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                </section>


                                <section className='border-bottom border-1 border-black'>
                                    <div className='col-12 text-center'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" disabled />
                                    </div>
                                </section>



                                {/* 8 section  */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    8 - Nil rated, exempted and non GST outward supplies
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-6 border-end border-1 border-black text-center p-1'>
                                        Total
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
                                    <div className='col-1 text-center'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                </section>



                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-6 border-end border-1 border-black text-center p-1'>
                                        - Nil
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
                                    <div className='col-6 border-end border-1 border-black text-center p-1'>
                                        - Exempted
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
                                    <div className='col-6 border-end border-1 border-black text-center p-1'>
                                        - Non-GST
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



                                {/* 9 - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    9A - Amendment to taxable outward supplies made to registered person in returns of earlier tax periods in table 4 - B2B Regular
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Amended amount - Total
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
                                        Net differential amount (Amended - Original)
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


                                {/* 9-a second - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    9A - Amendment to taxable outward supplies made to registered person in returns of earlier tax periods in table 4 - B2B Reverse charge
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Amended amount - Total
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
                                        Net differential amount (Amended - Original)
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








                                {/* 9-a third - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    9A - Amendment to Inter-State supplies made to unregistered person (where invoice value is more than Rs.2.5 lakh) in returns of earlier tax periods in table 5 - B2CL (Large)
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Amended amount - Total
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
                                        Net differential amount (Amended - Original)
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






                                {/* 9-a fourth - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    9A - Amendment to Export supplies in returns of earlier tax periods in table 6A (EXPWP/EXPWOP)
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Amended amount - Total
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
                                        Net differential amount (Amended - Original) - Total
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








                                {/* 9-a fifth - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    9A - Amendment to supplies made to SEZ units or SEZ developers in returns of earlier tax periods in table 6B (SEZWP/SEZWOP)
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Amended amount - Total
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
                                        Net differential amount (Amended - Original) - Total
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




                                {/* 9-a sixth - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    9A - Amendment to Deemed Exports in returns of earlier tax periods in table 6C (DE)
                                </section>

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Amended amount - Total
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
                                        Net differential amount (Amended - Original) - Total
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




                                {/* 9-b first - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    9B - Credit/Debit Notes (Registered) – CDNR
                                </section>
                                {/* 9-b first entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total - Net off debit/credit notes (Debit notes - Credit notes)
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 text-primary" disabled value={"Credit / Debit notes issued to registered person for taxable outward supplies in table 4 other than table 6 - B2B Regular"} />
                                    </div>
                                </section>


                                {/* 9-b second entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Net Total (Debit notes – Credit notes)
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 text-primary" disabled value={"Credit / Debit notes issued to registered person for taxable outward supplies in table 4 other than table 6 - B2B Reverse charge"} />
                                    </div>
                                </section>


                                {/* 9-b third entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Net Total (Debit notes – Credit notes)
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 text-primary" disabled value={"Credit / Debit notes issued to registered person for taxable outward supplies in table 6B - SEZWP/SEZWOP"} />
                                    </div>
                                </section>







                                {/* 9-b fourth entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Net Total (Debit notes – Credit notes)
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 text-primary" disabled value={"Credit / Debit notes issued to registered person for taxable outward supplies in table 6C – DE"} />
                                    </div>
                                </section>





                                {/* 9-b fifth entry */}

                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Net Total (Debit notes – Credit notes)
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 text-primary" disabled />
                                    </div>
                                </section>











                                {/* 9-b second - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    9B - Credit/Debit Notes (Unregistered) – CDNUR
                                </section>
                                {/* 9-b first entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total - Net off debit/credit notes (Debit notes - Credit notes)
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" disabled value={"Unregistered Type "} />
                                    </div>
                                </section>


                                {/* 9-b second entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        - B2CL
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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







                                {/* 9-b third entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        - EXPWP
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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



                                {/* 9-b fourth entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        - EXPWOP
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 " disabled />
                                    </div>
                                </section>









                                {/* 9-c first - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    9C - Amended Credit/Debit Notes (Registered) - CDNRA
                                </section>
                                {/* 9-c first entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Amended amount - Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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




                                {/* 9-c second entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Net Differential amount (Net Amended Debit notes - Net
                                        Amended Credit notes) - Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 text-primary" disabled value={"Amended Credit / Debit notes issued to registered person for taxable outward supplies in table 4 other than table 6 - B2B Regular "} />
                                    </div>
                                </section>





                                {/* 9-c third entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Net total (Net Amended Debit notes - Net Amended Credit notes)

                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 text-primary" disabled value={"Amended Credit / Debit notes issued to registered person for taxable outward supplies in table 4 other than table 6 - B2B Reverse charge"} />
                                    </div>
                                </section>





                                {/* 9-c fourth entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Net total (Net Amended Debit notes - Net Amended Credit notes)

                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 text-primary" disabled value={"Amended Credit / Debit notes issued to registered person for taxable outward supplies in table 6B - SEZWP/SEZWO"} />
                                    </div>
                                </section>





                                {/* 9-c fourth entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Net total (Net Amended Debit notes - Net Amended Credit notes)

                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 text-primary" disabled value={"Amended Credit / Debit notes issued to registered person for taxable outward supplies in table 6C – DE"} />
                                    </div>
                                </section>





                                {/* 9-b fifth entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Net total (Net Amended Debit notes - Net Amended Credit notes)

                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 " disabled />
                                    </div>
                                </section>





                                {/* 9-c second - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    9C - Amended Credit/Debit Notes (Unregistered) - CDNURA
                                </section>
                                {/* 9-c first entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Amended amount - Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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




                                {/* 9-c second entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Net Differential amount (Net Amended Debit notes - Net Amended Credit notes) - Total

                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 " disabled value={"Unregistered Type"} />
                                    </div>
                                </section>





                                {/* 9-c third entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        - B2CL
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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





                                {/* 9-c fourth entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        - EXPWP
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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


                                {/* 9-c fourth entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        - EXPWOP
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Note
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 " disabled />
                                    </div>
                                </section>








                                {/* 10 second - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    10 - Amendment to taxable outward supplies made to unregistered person in returns for earlier tax periods in table 7 including supplies made through e-commerce operator attracting TCS - B2C (Others)
                                </section>
                                {/* 10 first entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Amended amount - Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Net Value
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
                                {/* 10 second entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Net differential amount (Amended - Original)
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Net Value
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 " disabled />
                                    </div>
                                </section>






                                {/* 11  section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    11A(1), 11A(2) - Advances received for which invoice has not been issued (tax amount to be added to the output tax liability) (Net of refund vouchers, if any)
                                </section>
                                {/* 11 first entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Net Value
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 " disabled />
                                    </div>
                                </section>





                                {/* 11  second - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    11B(1), 11B(2) - Advance amount received in earlier tax period and adjusted against the supplies being shown in this tax period in Table Nos. 4, 5, 6 and 7 (Net of refund vouchers, if any)
                                </section>
                                {/* 11 first entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Net Value
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 " disabled />
                                    </div>
                                </section>





                                {/* 11  third - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    11A - Amendment to advances received in returns for earlier tax periods in table 11A(1), 11A(2) (Net of refund vouchers, if any)
                                </section>
                                {/* 11 first entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Amended amount - Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Net Value
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


                                {/* 11 second entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Net Value
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 " disabled />
                                    </div>
                                </section>




                                {/* 11  fourth - section */}
                                <section className='gstr1_entry border-bottom border-1 border-black p-2 '>
                                    11B - Amendment to advances adjusted in returns for earlier tax periods in table 11B(1), 11B(2) (Net of refund vouchers, if any)
                                </section>
                                {/* 11 first entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Amended amount - Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Net Value
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


                                {/* 11 second entry */}
                                <section className=' border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black text-center p-1'>
                                        Total
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black'>
                                        <Field type="text" className=" col-12 h-100 border-0 p-1" placeholder="0.00" />
                                    </div>
                                    <div className='col-1 text-center border-end border-1 border-black py-1'>
                                        Net Value
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
                                        <Field type="text" className=" col-12 h-100 border-0 p-1 " disabled />
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
