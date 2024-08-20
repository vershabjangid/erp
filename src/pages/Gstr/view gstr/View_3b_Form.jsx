import axios from 'axios'
import { Field } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../../../common/Header'
import { IoIosArrowDropright } from 'react-icons/io'
import { FaEdit, FaPercent, FaPrint } from 'react-icons/fa'
import { RiFileExcel2Fill } from "react-icons/ri";
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useReactToPrint } from 'react-to-print'
import { FaFilePdf } from 'react-icons/fa6'


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

    // print function 
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    // update function 
    let navigate = useNavigate();
    let update = (value) => {
        navigate("/update-3b-form", { state: value })
    }

    return (
        <>


            <section className='main'>
                <Header />

                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'> <FaPercent className='ms-2 me-2' />  GSTR-3b</div>
                </section>




                <section className='gstr_form_section bg-white border border-0 border-black' >

                    {
                        data.map((item, i) => {
                            if (outerdata.id == item.id) {
                                return (
                                    <>
                                        <div className='px-3 bg-white border border-0 border-black' ref={componentRef}>
                                            <h3 className='text-center'>Form GSTR-3B</h3>
                                            <h5 className='text-center'>[See rule 61(5)]</h5>
                                            {/* date and period section  */}
                                            <section className='form_3_date_section mb-3 d-flex justify-content-end'>
                                                <table className='w-25 h-100 form_3_date_table'>
                                                    <tr className='w-100 border border-1 border-black'>
                                                        <th className='w-25 text-center p-2 border-end border-1 border-black gstr_label '>Year</th>
                                                        <td className='w-75 h-100'>
                                                            <div className='w-100 border-0 h-100 d-flex align-items-center ms-1'>{item.year}</div>
                                                        </td>
                                                    </tr>
                                                    <tr className='w-100 border border-1 border-black'>
                                                        <th className='w-25 text-center p-2 border-end border-1 border-black gstr_label '>Period</th>
                                                        <td className='w-75 h-100'>
                                                            <div type="text" className='w-100 border border-1 border-white h-100 d-flex align-items-center ms-1'>
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
                                                            <div className='w-100 border-0 h-100 d-flex align-items-center ms-1'>
                                                                {item.gstin}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='w-100 border border-1 border-black'>
                                                        <th className='w-25  p-2 border-end border-1 border-black gstr_label '>2(a). Legal name of the registered person</th>
                                                        <td className='w-50 h-100 '>
                                                            <div className='w-100 border border-1 border-white h-100 d-flex align-items-center ms-1'>
                                                                {item.LegalName}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='w-100 border border-1 border-black'>
                                                        <th className='w-25  p-2 border-end border-1 border-black gstr_label '>2(b). Trade name, if any </th>
                                                        <td className='w-50 h-100'>
                                                            <div className='w-100 border-0 h-100 d-flex align-items-center ms-1'>
                                                                {item.TradeName}
                                                            </div>

                                                        </td>
                                                    </tr>
                                                    <tr className='w-100 border border-1 border-black'>
                                                        <th className='w-25  p-2 border-end border-1 border-black gstr_label'>2(c). ARN </th>
                                                        <td className='w-50 h-100'>
                                                            <div className='w-100 border border-1 border-white h-100 d-flex align-items-center ms-1'>
                                                                {item.arn}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='w-100 border border-1 border-black'>
                                                        <th className='w-25  p-2 border-end border-1 border-black gstr_label '>2(d). Date of ARN </th>
                                                        <td className='w-50 h-100'>
                                                            <div placeholder='Enter Date of ARN' className='w-100 border-0 h-100 d-flex align-items-center ms-1'>
                                                                {item.arnDate}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <div className='text-end my-1'>(Amount in ₹ for all tables)</div>
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







                                            {
                                                item.gstr3b_5.map((items, i) => {
                                                    return (
                                                        <>
                                                            {/* 5th section */}


                                                            <div className='table_label px-1 py-1 my-3'>5 Values of exempt, nil-rated and non-GST inward supplies</div>


                                                            <div className='entries_main_section border-bottom-0'>
                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-6 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                                                        Nature Of Supplies
                                                                    </div>

                                                                    <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        Inter- State supplies
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-3'>
                                                                        Intra- State supplies
                                                                    </div>
                                                                </div>





                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-6 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        From a supplier under composition scheme, Exempt, Nil rated supply
                                                                    </div>

                                                                    <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.Inter_SS5_1}</div>
                                                                    </div>

                                                                    <div className='col-3 text-center fw-bold fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.Intra_SS5_1}</div>
                                                                    </div>

                                                                </div>



                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-6 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        Non GST supply
                                                                    </div>

                                                                    <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.Inter_SS5_2}</div>
                                                                    </div>

                                                                    <div className='col-3 text-center fw-bold fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.Intra_SS5_2}</div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }




                                            {
                                                item.gstr3b_51.map((items, i) => {
                                                    return (
                                                        <>

                                                            {/* 5.1 section  */}
                                                            <div className='table_label px-1 py-1 my-3'>5.1 Interest and Late fee for previous tax period</div>


                                                            <div className='entries_main_section border-bottom-0'>
                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-4 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                                                        Details
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        Integrated tax
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        Central tax
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        State/UT tax
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-2'>
                                                                        Cess
                                                                    </div>
                                                                </div>




                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-4 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        System computed
                                                                        Interest
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.IT5_1_1}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.CT5_1_1}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.ST5_1_1}</div>
                                                                    </div>



                                                                    <div className='col-2 text-center fw-bold fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2" >{items.C5_1_1}</div>
                                                                    </div>

                                                                </div>




                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-4 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        Interest Paid
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IT5_1_2}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.CT5_1_2}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.ST5_1_2}</div>
                                                                    </div>



                                                                    <div className='col-2 text-center fw-bold fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.C5_1_2}</div>
                                                                    </div>

                                                                </div>


                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-4 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        Late fee
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IT5_1_3}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.CT5_1_3}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.ST5_1_3}</div>
                                                                    </div>



                                                                    <div className='col-2 text-center fw-bold fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.C5_1_3}</div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }



                                            {
                                                item.gstr3b_6.map((items, i) => {
                                                    return (
                                                        <>

                                                            {/* {6.1 section} */}
                                                            <div className='table_label px-1 py-1 my-3'>6.1 Payment of tax</div>

                                                            <div className='entries_main_section border-bottom-0'>


                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-2 text-center border-end border-1 border-black fw-bold d-flex align-items-center justify-content-center ps-1'>
                                                                        Description
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold d-flex justify-content-center align-items-center'>
                                                                        Total tax payable
                                                                    </div>

                                                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className='col-12 border-bottom border-1 border-black'>
                                                                            Tax paid through ITC
                                                                        </div>
                                                                        <div className='col-12 d-flex'>
                                                                            <div className='col-3 border-end border-1 border-black'>
                                                                                Integrated tax
                                                                            </div>
                                                                            <div className='col-3 border-end border-1 border-black'>
                                                                                Central tax
                                                                            </div>
                                                                            <div className='col-3 border-end border-1 border-black'>
                                                                                State/UT tax
                                                                            </div>
                                                                            <div className='col-3'>
                                                                                Cess
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold d-flex justify-content-center align-items-center'>
                                                                        Tax Paid in cash
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold d-flex justify-content-center align-items-center'>
                                                                        Interest paid in cash
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1 d-flex justify-content-center align-items-center'>
                                                                        Late fee paid in cash
                                                                    </div>
                                                                </div>

                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-12 fw-bold d-flex align-items-center ps-1'>
                                                                        (A) Other than reverse charge
                                                                    </div>
                                                                </div>





                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        Integrated
                                                                        tax
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TTP6_1}</div>
                                                                    </div>

                                                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>

                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.IT6_1}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.CT6_1}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.ST6_1}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00">{items.C6_1}</div></div>
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TP6_1}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IP6_1}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.LF6_1}</div>
                                                                    </div>
                                                                </div>




                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        Central tax
                                                                    </div>


                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TTP6_2}</div>
                                                                    </div>

                                                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.IT6_2}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.CT6_2}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.ST6_2}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2">{items.C6_2}</div></div>
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TP6_2}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IP6_2}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.LF6_2}</div>
                                                                    </div>
                                                                </div>


                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        State/UT tax
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TTP6_3}</div>
                                                                    </div>

                                                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.IT6_3}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.CT6_3}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.ST6_3}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2">{items.C6_3}</div></div>
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TP6_3}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IP6_3}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.LF6_3}</div>
                                                                    </div>
                                                                </div>



                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        Cess
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TTP6_4}</div>
                                                                    </div>

                                                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.IT6_4}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.CT6_4}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.ST6_4}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2">{items.C6_4}</div></div>
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TP6_4}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IP6_4}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.LF6_4}</div>
                                                                    </div>
                                                                </div>




                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-12 fw-bold d-flex align-items-center ps-1'>
                                                                        (B) Reverse charge
                                                                    </div>
                                                                </div>



                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        Integrated
                                                                        tax
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TTP6_5}</div>
                                                                    </div>

                                                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.IT6_5}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.CT6_5}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.ST6_5}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2">{items.C6_5}</div></div>
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TP6_5}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IP6_5}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.LF6_5}</div>
                                                                    </div>
                                                                </div>


                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        Central tax
                                                                    </div>


                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TTP6_6}</div>
                                                                    </div>

                                                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.IT6_6}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.CT6_6}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.ST6_6}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2">{items.C6_6}</div></div>
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TP6_6}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IP6_6}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.LF6_6}</div>
                                                                    </div>
                                                                </div>


                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        State/UT tax
                                                                    </div>



                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TTP6_7}</div>
                                                                    </div>

                                                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.IT6_7}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.CT6_7}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.ST6_7}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2">{items.C6_7}</div></div>
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TP6_7}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IP6_7}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.LF6_7}</div>
                                                                    </div>
                                                                </div>





                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        Cess
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TTP6_8}</div>
                                                                    </div>

                                                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.IT6_8}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.CT6_8}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black">{items.ST6_8}</div></div>
                                                                        <div className='col-3'><div className="w-100 h-100 border-0 ps-2 py-2">{items.C6_8}</div></div>
                                                                    </div>

                                                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.TP6_8}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IP6_8}</div>
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-1'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.LF6_8}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }



                                            {
                                                item.gstr3b_7.map((items, i) => {
                                                    return (
                                                        <>

                                                            <div className='table_label px-1 py-1 my-3'>Breakup of tax liability declared (for interest computation)</div>


                                                            <div className='entries_main_section border-bottom-0'>
                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-4 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                                                        Period
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        Integrated tax
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        Central tax
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        State/UT tax
                                                                    </div>

                                                                    <div className='text-center fw-bold  col-2'>
                                                                        Cess
                                                                    </div>
                                                                </div>




                                                                <div className='border-bottom border-1 border-black d-flex'>
                                                                    <div className='col-4 border-end border-1 border-black d-flex align-items-center ps-1'>
                                                                        {items.NOS7_1}
                                                                    </div>


                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.IT7_1}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.CT7_1}</div>
                                                                    </div>

                                                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.ST7_1}</div>
                                                                    </div>



                                                                    <div className='col-2 text-center fw-bold fw-bold'>
                                                                        <div className="w-100 h-100 border-0 ps-2 py-2">{items.C7_1}</div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                            <p className='fw-bold mt-4'> Verifcation:</p>
                                            <p>I hereby solemnly affrm and declare that the information given herein above is true and correct to the best of my knowledge and belief and
                                                nothing has been concealed there from.
                                            </p>

                                        </div>
                                        <div className='col-9 m-auto d-flex justify-content-center align-items-center'>
                                            <button className='border border-0 bg-secondary text-white py-2 px-4 my-2 rounded' onClick={() => update(item)}><FaEdit className='me-2 fs-5' />Update</button>
                                            <button className='border border-0 bg-danger text-white py-2 px-4 my-2 mx-3 rounded' onClick={handlePrint}><FaFilePdf className='me-2' /> Save Pdf</button>
                                        </div>
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

