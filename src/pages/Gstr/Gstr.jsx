import React from 'react'
import { Header } from '../../common/Header'
import { Link } from 'react-router-dom'
import { FaPercentage } from 'react-icons/fa'
import { BiPlus } from 'react-icons/bi'

export function Gstr() {
    return (
        <>
            <section className='main'>
                <Header />

                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <FaPercentage className='ms-2 me-2' />GSTR</div>
                </section>

                <div className='input_common_outer d-flex'>





                    <div className='w-100 bg-white  rounded-1 mt-3'>   

                        <div className='w-75 px-2 m-auto d-flex justify-content-between py-3 pb-4 text-white'>
                            <div className='w-25 text-center me-1 border border-1 border-black'>
                                <label className='w-100 bg-secondary p-3'>
                                    <h5>Details of outward supplies of goods and services</h5>
                                    <h6 className=' text-center'>GSTR 1</h6>
                                </label>

                                <div className='w-100 d-flex justify-content-evenly py-2'>
                                    <Link className='w-50 border border-1 border-black mx-2 py-2 bg-black text-white text-decoration-none fw-bold'>
                                        View GSTR
                                    </Link>
                                    <Link to={"/add-gstr-1"} className='w-50 border border-1 border-black mx-2 py-2 bg-black text-white text-decoration-none fw-bold'>
                                        Add GSTR
                                    </Link>
                                </div>
                            </div>


                            <div className='w-25 text-center me-1 border border-1 border-black'>
                                <label className='w-100 bg-secondary p-3'>
                                    <h5>Inward supplies received by taxpayer</h5>
                                    <h6 className=' text-center'>GSTR 2</h6>
                                </label>

                                <div className='w-100 d-flex justify-content-evenly py-2'>
                                    <Link className='w-50 border border-1 border-black mx-2 py-2 bg-black text-white text-decoration-none fw-bold'>
                                        View GSTR
                                    </Link>
                                    <Link className='w-50 border border-1 border-black mx-2 py-2 bg-black text-white text-decoration-none fw-bold'>
                                        Add GSTR
                                    </Link>
                                </div>
                            </div>


                            <div className='w-25 text-center me-1 border border-1 border-black'>
                                <label className=' w-100 bg-secondary p-3 py-4'>
                                    <h5>Monthly Return</h5>
                                    <h6 className=' text-center'>GSTR 3b</h6>
                                </label>

                                <div className='w-100 d-flex justify-content-evenly py-2 pt-3'>
                                    <Link to={'/view-gstr-3b'} className='w-50 border border-1 border-black mx-2 py-2 bg-black text-white text-decoration-none fw-bold'>
                                        View GSTR
                                    </Link>
                                    <Link to={"/add-gstr-3b"} className='w-50 border border-1 border-black mx-2 py-2 bg-black text-white text-decoration-none fw-bold'>
                                        Add GSTR
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='input_common_outer d-flex'>





                    <div className='w-100  rounded-1 mt-3'>
                        <div className='border-bottom border-1 border-secondary bg-primary text-white mb-3'>
                            <h3 className='pt-3 pb-2 px-4 d-flex align-items-center'>
                                <div className='fs-2 d-flex align-items-center me-2'>
                                    <BiPlus />
                                </div>
                                Add Checklist
                            </h3>
                        </div>

                        <div className='w-75 px-2 m-auto d-flex justify-content-between py-3 pb-4 text-white'>
                            <div className='w-25 text-center me-1 border border-1 border-black'>
                                <label className='w-100 bg-secondary p-3'>
                                    <h5>Checklist</h5>
                                    <h6 className=' text-center'>GSTR 1</h6>
                                </label>

                                <div className='w-100 d-flex justify-content-evenly pt-3'>
                                    <Link className='w-50 border border-1 border-black mx-2 py-2 bg-black text-white text-decoration-none fw-bold'>
                                        View Checklist
                                    </Link>
                                    <Link className='w-50 border border-1 border-black mx-2 py-2 bg-black text-white text-decoration-none fw-bold'>
                                        Add Checklist
                                    </Link>
                                </div>
                            </div>


                            <div className='w-25 text-center me-1 border border-1 border-black'>
                                <label className='w-100 bg-secondary p-3'>
                                    <h5>Checklist</h5>
                                    <h6 className=' text-center'>GSTR 2</h6>
                                </label>

                                <div className='w-100 d-flex justify-content-evenly pt-3'>
                                    <Link className='w-50 border border-1 border-black mx-2 py-2 bg-black text-white text-decoration-none fw-bold'>
                                        View Checklist
                                    </Link>
                                    <Link className='w-50 border border-1 border-black mx-2 py-2 bg-black text-white text-decoration-none fw-bold'>
                                        Add Checklist
                                    </Link>
                                </div>
                            </div>


                            <div className='w-25 text-center me-1 border border-1 border-black'>
                                <label className=' w-100 bg-secondary p-3'>
                                    <h5>Checklist</h5>
                                    <h6 className=' text-center'>GSTR 3b</h6>
                                </label>

                                <div className='w-100 d-flex justify-content-evenly py-2 pt-3'>
                                    <Link className='w-50 border border-1 border-black mx-2 py-2 bg-black text-white text-decoration-none fw-bold'>
                                        View Checklist
                                    </Link>
                                    <Link className='w-50 border border-1 border-black mx-2 py-2 bg-black text-white text-decoration-none fw-bold'>
                                        Add Checklist
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </section>
        </>
    )
}
