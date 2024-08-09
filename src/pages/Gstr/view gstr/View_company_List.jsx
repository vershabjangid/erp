import React, { useEffect, useState } from 'react'
import { Header } from '../../../common/Header'
import { FaPercent } from 'react-icons/fa'
import { json, Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDropright } from 'react-icons/io'
import axios from 'axios'

export function View_company_List() {

    let [data, setdata] = useState([])

    let fetchdata = () => {
        axios.get(`/erp/all-gstr3b-data-view.php`)
            .then((res) => {
                setdata(res.data.data);
            })
    }

    useEffect(() => {
        fetchdata()
    }, [])

    let location = useLocation();
    let indata = location.state || {}

    console.log(indata)
    let getdata = JSON.parse(localStorage.getItem('customerdata'))


    let naviget = useNavigate();

    let navigate = (value) =>{
        naviget('/3b-form',{state : value})
    }
    return (
        <>
            <section className='main'>
                <Header />


                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <FaPercent className='ms-2 me-2' />  View GSTR-3b List</div>
                    <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/view-customer"}>View Customer <IoIosArrowDropright /></Link></div>
                </section>
                <Formik>
                    <Form>
                        <section className='common_input_gstr position-relative'>
                            <h3 className='pb-2'>Company Details </h3>
                            <div className=''>
                                <div className=' position-absolute px-2 fs-5'>
                                    <BiSearch />
                                </div>
                                <div>
                                    <input type="text" className="w-100 rounded-5 border border-1 border-secondary py-1 px-5" />
                                </div>
                            </div>


                            <div className='border-bottom border-1 border-black mt-3 py-2 d-flex justify-content-between'>
                                <div className='company_name fw-bold col-3 text-center'>
                                    GSTIN
                                </div>
                                <div className='company_name fw-bold col-3 text-center'>
                                    Legal Register Name
                                </div>
                                <div className='company_name fw-bold col-3 text-center'>
                                    Trade Name
                                </div>
                                <div className='company_name fw-bold col-1 text-center'>
                                    Date
                                </div>
                                <div className='company_name fw-bold col-2 text-center'>
                                    Action
                                </div>
                            </div>



                            {
                                data.map((items, i) => {
                                    console.log(items)
                                    if (items.Admin_id === getdata.UserDetails.id) {
                                        if (indata.GSTIN === items.gstin && indata.Name === items.LegalName && indata.Trade_Name === items.TradeName) {
                                            return (

                                                <div className='border-bottom border-1 border-black mt-3 py-2 d-flex justify-content-between'>
                                                    <div className='company_name fw-bold col-3 d-flex align-items-center justify-content-center'>
                                                        {items.gstin}
                                                    </div>
                                                    <div className='company_name fw-bold col-3 d-flex align-items-center justify-content-center'>
                                                        {items.LegalName}
                                                    </div>
                                                    <div className='company_name fw-bold col-3 d-flex align-items-center justify-content-center'>
                                                        {items.TradeName}
                                                    </div>
                                                    <div className='company_name fw-bold col-1 text-center'>
                                                        Date
                                                    </div>
                                                    <div className='company_name fw-bold col-2 text-center'>
                                                        <button className='py-2 px-4 border-0  rounded bg-primary text-white' onClick={()=>navigate(items)} >
                                                            View All
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }
                                })
                            }

                        </section >

                    </Form>
                </Formik>
            </section>
        </>
    )
}
