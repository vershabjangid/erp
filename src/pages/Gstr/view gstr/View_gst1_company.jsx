import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../../common/Header';
import { FaPercent } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';

export function View_gst1_company() {

    let [company, setcompany] = useState([]);
    let [records, setrecords] = useState([]);

    // get api fetching 

    let viewallcomapny = () => {
        axios.get(`/erp/getcustomer.php`)
            .then((res) => {
                setcompany(res.data.Details)
                setrecords(res.data.Details)
            })
    }

    useEffect(() => {
        viewallcomapny();
    }, [])


    // search handling 
    let handlesearch = (event) => {
        setrecords(company.filter((item) => item.Name.toLowerCase().includes(event.target.value) || item.GSTIN.toLowerCase().includes(event.target.value) || item.Trade_Name.toLowerCase().includes(event.target.value)))
    }



    // local storage data 
    let getlocaldata = JSON.parse(localStorage.getItem('customerdata'))

    // navigate to other function 

    let naviget = useNavigate();
    let navigate = (value) => {
        naviget('/view-gstr1-form-list', { state: value })
    }

    return (
        <>
            <section className='main'>
                <Header/>


                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <FaPercent className='ms-2 me-2' />  View GSTR-3b List</div>
                </section>

                <section className='common_input_gstr position-relative'>
                    <h3 className='pb-2'>Company List </h3>
                    <div className=''>
                        <div className=' position-absolute px-2 fs-5'>
                            <BiSearch />
                        </div>
                        <div>
                            <input type="text" className="w-100 rounded-5 border border-1 border-secondary py-1 px-5" onChange={handlesearch} />
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
                        <div className='company_name fw-bold col-3 text-center'>
                            Action
                        </div>
                    </div>



                    {
                        records.map((items, i) => {
                            if (items.Admin_id == getlocaldata.UserDetails.id) {
                                return (
                                    <>
                                        <div className='border-bottom border-1 border-black mt-3 py-2 d-flex justify-content-between'>
                                            <div className='company_name fw-bold col-3 d-flex align-items-center justify-content-center'>
                                                {items.GSTIN}
                                            </div>
                                            <div className='company_name fw-bold col-3 d-flex align-items-center justify-content-center'>
                                                {items.Name}
                                            </div>
                                            <div className='company_name fw-bold col-3 d-flex align-items-center justify-content-center'>
                                                {items.Trade_Name}
                                            </div>
                                            <div className='company_name fw-bold col-3 text-center'>
                                                <button className='py-2 px-4 border-0  rounded bg-primary text-white' onClick={() => navigate(items)}>
                                                    View All
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }
                </section>
            </section>
        </>
    )
}
