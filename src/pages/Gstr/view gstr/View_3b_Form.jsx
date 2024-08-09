import axios from 'axios'
import { Field } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Header } from '../../../common/Header'
import { IoIosArrowDropright } from 'react-icons/io'
import { FaPercent } from 'react-icons/fa'

export function View_3b_Form() {
    let [data, setdata] = useState([])

    let fetchdata = () => {
        axios.get(`/erp/all-gstr3b-data-view.php`)
            .then((res) => {
                setdata(res.data.data)
            })
    }


    useEffect(() => {
        fetchdata();
    }, [])


    let location = useLocation();
    let outerdata = location.state || {}
    return (
        <>
            {
                data.map((item, i) => {
                    if (outerdata.id === item.id) {
                        return (
                            <>

                            </>
                        )
                    }
                })
            }



            <section className='main'>
                <Header />


                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'> <FaPercent className='ms-2 me-2' />  GSTR-3b</div>
                </section>

                <section className='gstr_form_section bg-white border border-1 border-black'>
                    <h3 className='text-center'>Form GSTR-3B</h3>
                    <h5 className='text-center'>[See rule 61(5)]</h5>

                    {
                        data.map((item, i) => {
                            if (outerdata.id == item.id) {
                                return (
                                    <>
                                        {/* date and period section  */}
                                        <section className='form_3_date_section mb-3 d-flex justify-content-end'>
                                            <table className='w-25 h-100 form_3_date_table'>
                                                <tr className='w-100 border border-1 border-black'>
                                                    <th className='w-25 text-center p-2 border-end border-1 border-black gstr_label '>Year</th>
                                                    <td className='w-75 h-100'>
                                                        <div className='w-100 border-0 h-100 d-flex align-items-center' >{item.year}</div>
                                                    </td>
                                                </tr>
                                                <tr className='w-100 border border-1 border-black'>
                                                    <th className='w-25 text-center p-2 border-end border-1 border-black gstr_label '>Period</th>
                                                    <td className='w-75 h-100'>
                                                        <div type="text" className='w-100 border border-1 border-white h-100 d-flex align-items-center'>
                                                            {item.month}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </section>


                                        <section className=''>
                                            {/* personal information section  */}
                                            <table className='w-100 h-100 form_3_date_table'>
                                                <tr className='w-100 border border-1 border-black'>
                                                    <th className='w-25  p-2 border-end border-1 border-black gstr_label '>GSTIN of the supplier</th>
                                                    <td className='w-50 h-100'>
                                                        <div className='w-100 border-0 h-100 d-flex align-items-center'>
                                                            {item.gstin}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='w-100 border border-1 border-black'>
                                                    <th className='w-25  p-2 border-end border-1 border-black gstr_label '>2(a). Legal name of the registered person</th>
                                                    <td className='w-50 h-100 '>
                                                        <div className='w-100 border border-1 border-white h-100 d-flex align-items-center'>
                                                            {item.LegalName}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='w-100 border border-1 border-black'>
                                                    <th className='w-25  p-2 border-end border-1 border-black gstr_label '>2(b). Trade name, if any </th>
                                                    <td className='w-50 h-100'>
                                                        <div className='w-100 border-0 h-100 d-flex align-items-center'>
                                                            {item.TradeName}
                                                        </div>

                                                    </td>
                                                </tr>
                                                <tr className='w-100 border border-1 border-black'>
                                                    <th className='w-25  p-2 border-end border-1 border-black gstr_label'>2(c). ARN </th>
                                                    <td className='w-50 h-100'>
                                                        <div className='w-100 border border-1 border-white h-100 d-flex align-items-center'>
                                                            {item.arn}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='w-100 border border-1 border-black'>
                                                    <th className='w-25  p-2 border-end border-1 border-black gstr_label '>2(d). Date of ARN </th>
                                                    <td className='w-50 h-100'>
                                                        <div placeholder='Enter Date of ARN' className='w-100 border-0 h-100 d-flex align-items-center'>
                                                            {item.arnDate}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </section>



                                        {/*3.1 section*/}
                                        <div className='table_label px-1 py-1 my-3'>3.1 Details of Outward supplies and inward supplies liable to reverse charge (other than those covered by Table 3.1.1)</div>

                                        {/*3.1 section heading*/}
                                        <div className='entries_main_section border-bottom-0'>
                                            <div className='border-bottom border-1 border-black d-flex'>
                                                <div className='col-5 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                                    Nature Of Supplies
                                                </div>

                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                    Total Taxable Value
                                                </div>

                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                    Integrated Tax
                                                </div>

                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                    Central Tax
                                                </div>

                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                    State/UT Tax
                                                </div>

                                                <div className='text-center fw-bold  col-1'>
                                                    Cess
                                                </div>
                                            </div>




                                            {
                                                item.gstr3b_31.map((items, i) => {
                                                    return (
                                                        <>
                                                            {/*3.1 section 1st entry section*/}
                                                            <div className='border-bottom border-1 border-black d-flex'>
                                                                <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                    (a) Outward taxable supplies (other than zero rated, nil rated and
                                                                    exempted)
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >
                                                                        {items.TTV3_1}
                                                                    </div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"   >
                                                                        {items.IT3_1}
                                                                    </div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"   >
                                                                        {items.CT3_1}
                                                                    </div>
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"   >
                                                                        {items.ST3_1}
                                                                    </div>
                                                                </div>

                                                                <div className='text-center fw-bold  col-1'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"  >
                                                                        {items.C3_1}
                                                                    </div>
                                                                </div>
                                                            </div>



                                                            {/*3.1 section 2nd entry section*/}
                                                            <div className='border-bottom border-1 border-black d-flex'>
                                                                <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                    (b) Outward taxable supplies (zero rated)
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >
                                                                        {items.TTV3_2}
                                                                    </div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >
                                                                        {items.IT3_2}
                                                                    </div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >
                                                                        {items.CT3_2}
                                                                    </div>
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >
                                                                        {items.ST3_2}
                                                                    </div>
                                                                </div>

                                                                <div className='text-center fw-bold  col-1'>
                                                                    <div className="w-100 h-100 border-0 ps-2" >
                                                                        {items.C3_2}
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            {/*3.1 section 3rd entry section*/}
                                                            <div className='border-bottom border-1 border-black d-flex'>
                                                                <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                    (c) Other outward supplies (nil rated, exempted)
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"  >
                                                                        {items.TTV3_3}
                                                                    </div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >
                                                                        {items.IT3_3}
                                                                    </div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"  >
                                                                        {items.CT3_3}
                                                                    </div>
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >
                                                                        {items.ST3_3}
                                                                    </div>
                                                                </div>

                                                                <div className='text-center fw-bold  col-1'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >
                                                                        {items.C3_3}
                                                                    </div>
                                                                </div>
                                                            </div>




                                                            {/*3.1 section 4th entry section*/}
                                                            <div className='border-bottom border-1 border-black d-flex'>
                                                                <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                    (d) Inward supplies (liable to reverse charge)
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"  >
                                                                        {items.TTV3_4}
                                                                    </div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"   >
                                                                        {items.IT3_4}
                                                                    </div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"   >
                                                                        {items.CT3_4}
                                                                    </div>
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"  >
                                                                        {items.ST3_4}
                                                                    </div>
                                                                </div>

                                                                <div className='text-center fw-bold  col-1'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"  >
                                                                        {items.C3_4}
                                                                    </div>
                                                                </div>
                                                            </div>



                                                            {/*3.1 section 5th entry section*/}
                                                            <div className='border-bottom border-1 border-black d-flex'>
                                                                <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                    (e) Non-GST outward supplies
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"   >
                                                                        {items.TTV3_5}
                                                                    </div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"   >
                                                                        {items.IT3_5}
                                                                    </div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"   >
                                                                        {items.CT3_5}
                                                                    </div>
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"   >
                                                                        {items.ST3_5}
                                                                    </div>
                                                                </div>

                                                                <div className='text-center fw-bold  col-1'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2"  >
                                                                        {items.C3_5}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </>
                                                    )
                                                })
                                            }

                                        </div>


                                        {
                                            item.gstr3b_311.map((items, i) => {
                                                return (
                                                    <>
                                                        {/*3.1 section*/}
                                                        <div className='table_label px-1 py-1 my-3'>3.1.1 Details of Supplies notifed under section 9(5) of the CGST Act, 2017 and corresponding provisions in IGST/UTGST/
                                                            SGST Acts
                                                        </div>


                                                        <div className='entries_main_section border-bottom-0'>
                                                            <div className='border-bottom border-1 border-black d-flex'>
                                                                <div className='col-5 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                                                    Nature Of Supplies
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    Total Taxable Value
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    Integrated Tax
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    Central Tax
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    State/UT Tax
                                                                </div>

                                                                <div className='text-center fw-bold  col-1'>
                                                                    Cess
                                                                </div>
                                                            </div>




                                                            <div className='border-bottom border-1 border-black d-flex'>
                                                                <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                    (i) Taxable supplies on which electronic commerce operator pays tax u/s 9(5) [to
                                                                    be furnished by electronic commerce operator]
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >{items.TTV3_1_1}</div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2">{items.IT3_1_1}</div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >{items.CT3_1_1}</div>
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2">{items.ST3_1_1}</div>
                                                                </div>

                                                                <div className='text-center fw-bold  col-1'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2">{items.C3_1_1}</div>
                                                                </div>
                                                            </div>




                                                            <div className='border-bottom border-1 border-black d-flex'>
                                                                <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                    (ii) Taxable supplies made by registered person through electronic commerce
                                                                    operator, on which electronic commerce operator is required to pay tax u/s 9(5)
                                                                    [to be furnished by registered person making supplies through electronic
                                                                    commerce operator]

                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >{items.TTV3_1_2}</div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >{items.IT3_1_2}</div>
                                                                </div>

                                                                <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >{items.CT3_1_2}</div>
                                                                </div>

                                                                <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >{items.ST3_1_2}</div>
                                                                </div>

                                                                <div className='text-center fw-bold  col-1'>
                                                                    <div className="w-100 h-100 border-0 ps-2">{items.C3_1_2}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }




                                        {
                                            item.gstr3b_32.map((items, i) => {
                                                return (
                                                    <>

                                                        {/*3.2 section*/}
                                                        <div className='table_label px-1 py-1 my-3'>
                                                            3.2 Out of supplies made in 3.1 (a) and 3.1.1 (i), details of inter-state supplies made
                                                        </div>

                                                        <div className='entries_main_section border-bottom-0'>
                                                            <div className='border-bottom border-1 border-black d-flex'>
                                                                <div className='col-6 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                                                    Nature Of Supplies
                                                                </div>

                                                                <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    Total Taxable Value
                                                                </div>

                                                                <div className='col-3 text-center fw-bold fw-bold'>
                                                                    Integrated Tax
                                                                </div>
                                                            </div>




                                                            <div className='border-bottom border-1 border-black d-flex'>
                                                                <div className='col-6 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                    Supplies made to Unregistered Persons
                                                                </div>

                                                                <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2">{items.TTV32_1}</div>
                                                                </div>

                                                                <div className='col-3 text-center fw-bold  fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2">{items.IT32_1}</div>
                                                                </div>

                                                            </div>




                                                            <div className='border-bottom border-1 border-black d-flex'>
                                                                <div className='col-6 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                    Supplies made to Composition Taxable
                                                                    Persons
                                                                </div>

                                                                <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2" >{items.TTV32_2}</div>
                                                                </div>

                                                                <div className='col-3 text-center fw-bold  fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2">{items.IT32_2}</div>
                                                                </div>

                                                            </div>


                                                            <div className='border-bottom border-1 border-black d-flex'>
                                                                <div className='col-6 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                    Supplies made to UIN holders
                                                                </div>


                                                                <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2">{items.TTV32_3}</div>
                                                                </div>

                                                                <div className='col-3 text-center fw-bold  fw-bold'>
                                                                    <div className="w-100 h-100 border-0 ps-2 py-2">{items.IT32_3}</div>
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </>
                                                )
                                            })
                                        }











                                        {
                                            item.gstr3b_4.map((items, i) => {
                                                return (
                                                    <>
                                                        {/* 4. section */}
                                                        <section>
                                                            <div className='table_label px-1 py-1 my-3'>4. Eligible ITC</div>

                                                            <div className='entries_main_section border-bottom-0'>
                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                                                        Nature Of Supplies
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        Integrated Tax
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        Central Tax
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        State/UT Tax
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        Cess
                                                                    </div>
                                                                </div>




                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1 fw-bold'>
                                                                        A. ITC Available (whether in full or part)
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>

                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>

                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>

                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>

                                                                    </div>
                                                                </div>




                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        (1) Import of goods
                                                                    </div>


                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IT4_1}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.CT4_1}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.ST4_1}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 d-flex justify-content-center align-items-center">{items.C4_1}</div>
                                                                    </div>
                                                                </div>


                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        (2) Import of services
                                                                    </div>


                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IT4_2}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.CT4_2}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.ST4_2}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 d-flex justify-content-center align-items-center">{items.C4_2}</div>
                                                                    </div>
                                                                </div>


                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        (3) Inward supplies liable to reverse charge (other than 1 & 2 above)
                                                                    </div>


                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.IT4_3}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.CT4_3}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.ST4_3}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 d-flex justify-content-center align-items-center">{items.C4_3}</div>
                                                                    </div>
                                                                </div>


                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        (4) Inward supplies from ISD
                                                                    </div>


                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.IT4_4}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2"  >{items.CT4_4}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.ST4_4}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 d-flex justify-content-center align-items-center" >{items.C4_4}</div>
                                                                    </div>
                                                                </div>

                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        (5) All other ITC
                                                                    </div>


                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.IT4_5}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.CT4_5}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.ST4_5}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 d-flex justify-content-center align-items-center">{items.C4_5}</div>
                                                                    </div>
                                                                </div>





                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1 fw-bold'>
                                                                        B. ITC Reversed
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>

                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>

                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>

                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1 d-flex justify-content-center align-items-center'>

                                                                    </div>
                                                                </div>



                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        (1) As per rules 38,42 & 43 of CGST Rules and section 17(5)
                                                                    </div>


                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IT4_6}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.CT4_6}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.ST4_6}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 d-flex justify-content-center align-items-center">{items.C4_6}</div>
                                                                    </div>
                                                                </div>



                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        (2) Others
                                                                    </div>


                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IT4_7}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.CT4_7}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.ST4_7}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 d-flex justify-content-center align-items-center">{items.C4_7}</div>
                                                                    </div>
                                                                </div>


                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1 fw-bold'>
                                                                        C. Net ITC available (A-B)
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.IT4_8}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.CT4_8}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.ST4_8}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2 d-flex justify-content-center align-items-center">{items.C4_8}</div>
                                                                    </div>
                                                                </div>



                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1 fw-bold'>
                                                                        (D) Other Details
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.IT4_9}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.CT4_9}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.ST4_9}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2 d-flex justify-content-center align-items-center">{items.C4_9}</div>
                                                                    </div>
                                                                </div>






                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        (1) ITC reclaimed which was reversed under Table 4(B)(2) in earlier tax period
                                                                    </div>


                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IT4_10}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.CT4_10}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.ST4_10}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 d-flex justify-content-center align-items-center">{items.C4_10}</div>
                                                                    </div>
                                                                </div>


                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        (2) Ineligible ITC under section 16(4) & ITC restricted due to PoS rules
                                                                    </div>


                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 d-flex py-2 d-flex justify-content-center align-items-center">{items.IT4_11}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 d-flex py-2 d-flex justify-content-center align-items-center" >{items.CT4_11}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 d-flex py-2 d-flex justify-content-center align-items-center">{items.ST4_11}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 d-flex justify-content-center align-items-center">{items.C4_11}</div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </section >

                                                    </>
                                                )
                                            })
                                        }



                                    </>
                                )
                            }
                        })
                    }

                </section>
            </section >
        </>
    )
}


