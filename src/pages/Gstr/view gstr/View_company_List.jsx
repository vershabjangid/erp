import React, { useEffect, useState } from 'react'
import { Header } from '../../../common/Header'
import { FaPercent } from 'react-icons/fa'
import { json, Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDropright } from 'react-icons/io'
import axios, { toFormData } from 'axios'
import { toast, ToastContainer } from 'react-toastify'

export function View_company_List() {



    let getdata = JSON.parse(localStorage.getItem('customerdata'))


    let location = useLocation()
    let indata = location.state || {}

    console.log(indata)


    let [getform, setgetform] = useState([])
    let [getformfilter, setformfilter] = useState('')

    let getformdata = () => {
        axios.get(`/erp/all-gstr3b-data-view.php`)
            .then((res) => {
                console.log(res)
                if (res.data.data === "No Data Found") {
                    setgetform("No Data Found")
                    setformfilter("No Data Found")
                }
                else {
                    setgetform(res.data.data.filter((item) => item.gstin == indata.GSTIN && item.Name == indata.LegalName && item.Trade_Name == indata.TradeName))
                    setformfilter(res.data.data.filter((item) => item.gstin == indata.GSTIN && item.Name == indata.Name && item.Trade_Name == indata.TradeName))
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getformdata()
    }, [])


    let filter = (event) => {
        if (getformfilter == "") {
            getformdata();
        }
        else {
            setgetform(getformfilter.filter((items) => items.gstin.toLowerCase().includes(event)))
        }
    }


    let notify = (error) => toast.error(error)



    let naviget = useNavigate();

    let navigate = (value) => {
        naviget('/3b-form', { state: value })
    }


    let deletefuction = (event) => {
        console.log(event)
        axios.delete(`/erp/delete-gstr3b.php?gstr3b_id=${event}`,)
            .then((res) => {
                notify(res.data.message)
                getformdata()
            })
    }

    return (
        <>
            <section className='main'>
                <Header />


                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <FaPercent className='ms-2 me-2' />  View GSTR-3b List</div>
                    <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/view-customer"}>View Customer <IoIosArrowDropright /></Link></div>
                </section>

                <section className='common_input_gstr position-relative'>
                    <h3 className='pb-2'>Company Details </h3>
                    <div className=''>
                        <div className=' position-absolute px-2 fs-5'>
                            <BiSearch />
                        </div>
                        <div>
                            <input type="text" className="w-100 rounded-5 border border-1 border-secondary py-1 px-5" onChange={(e) => filter(e.target.value)} />
                        </div>
                    </div>

                    {
                        getform == "No Data Found" || getform == "" ?
                            <div className='text-center fw-bold fs-3 mt-3'>No Data Found</div>
                            :
                            <div className=''>
                                <div className='border-bottom border-1 border-black mt-3 py-2 d-flex justify-content-between'>
                                    <div className='company_name fw-bold col-2 text-center'>
                                        GSTIN
                                    </div>
                                    <div className='company_name fw-bold col-2 text-center'>
                                        Legal Register Name
                                    </div>
                                    <div className='company_name fw-bold col-3 text-center'>
                                        Trade Name
                                    </div>
                                    <div className='company_name fw-bold col-1 text-center'>
                                        Month
                                    </div>
                                    <div className='company_name fw-bold col-1 text-center'>
                                        Date
                                    </div>
                                    <div className='company_name fw-bold col-1 text-center'>
                                        Action
                                    </div>
                                    <div className='company_name fw-bold col-1 text-center'>
                                        Action
                                    </div>
                                </div>




                                {
                                    getform.map((items, i) => {
                                        return (
                                            <>
                                                <div className='border-bottom border-1 border-black mt-3 py-2 d-flex justify-content-between'>
                                                    <div className='company_name fw-bold col-2 d-flex align-items-center justify-content-center'>
                                                        {items.gstin}
                                                    </div>
                                                    <div className='company_name fw-bold col-2 d-flex align-items-center justify-content-center'>
                                                        {items.LegalName}
                                                    </div>
                                                    <div className='company_name fw-bold col-3 d-flex align-items-center justify-content-center'>
                                                        {items.TradeName}
                                                    </div>
                                                    <div className='company_name fw-bold col-1 text-center d-flex justify-content-center align-items-center'>
                                                        {items.month}
                                                    </div>
                                                    <div className='company_name fw-bold col-1 text-center d-flex justify-content-center align-items-center'>
                                                        {items.year}
                                                    </div>
                                                    <div className='company_name fw-bold col-1 text-center'>
                                                        <button className='py-2 px-4 border-0 rounded bg-primary text-white' onClick={() => navigate(items)} >
                                                            Select
                                                        </button>
                                                    </div>
                                                    <div className='company_name fw-bold col-1 text-center'>
                                                        <button className='py-2 px-4 border-0 rounded bg-danger text-white' onClick={() => deletefuction(items.id)} >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                    }




                </section >

            </section>
            <ToastContainer />
        </>
    )
}
