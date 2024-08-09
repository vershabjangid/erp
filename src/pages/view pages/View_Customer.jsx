import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react'
import { IoIosArrowDropright, IoIosLink } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Header } from '../../common/Header'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineShoppingBag } from 'react-icons/md';

export function View_Customer() {

    let notifysuccess = (succeed) => toast.success(succeed)

    let count = 1;

    let [data, setdata] = useState([])

    let viewdata = () => {
        axios.get(`/erp/getcustomer.php`)
            .then((res) => {
                console.log(res)
                setdata(res.data.Details)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {
        viewdata();
    }, [])




    let deletedata = (deletedataid) => {
        axios.delete(`/erp/delete-customer.php?id=${deletedataid}`)
            .then((res) => {
                notifysuccess(res.data.msg)
                viewdata();
            })
    }


    let navigate = useNavigate();

    let updatecustomer = (navigatedata) => {
        navigate("/add-customer", { state: navigatedata })
    }



    let localdata = JSON.parse(localStorage.getItem("customerdata"))
    return (
        <>
            <section className='main'>
                <Header />

                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <MdOutlineShoppingBag className='ms-2 me-2' />  View Customer</div>
                    <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/add-customer"}>Add Customer <IoIosArrowDropright /></Link></div>
                </section>

                <section className='table_overflow_section'>
                    <div className='table_customer_main'>

                        <div className='table_section'>
                            {
                                data == "No Data Found" ?

                                    <div className='text-center fs-1 text-danger fw-bold '>
                                        <div>
                                            No Data Found
                                        </div>

                                        <Link to={"/add-customer"} className='text-decoration-none'>
                                            <div className='fs-3'>
                                                <IoIosLink className='me-2' />
                                                Go To Add Customer
                                            </div>
                                        </Link>
                                    </div>

                                    :
                                    <table className='table_customer'>
                                        <tr className=' border border-1 border-black'>
                                            <th>S.No</th>
                                            <th className=' border border-1 border-black text-center px-1'>File Code</th>
                                            <th className=' border border-1 border-black text-center px-1'> Name</th>
                                            <th className=' border border-1 border-black text-center px-1'>GSTIN</th>
                                            <th className='border border-1 border-black text-center px-1'>Trade Name</th>
                                            <th className=' border border-1 border-black text-center px-1'>Registration Date </th>
                                            <th className=' border border-1 border-black text-center px-1'>Address</th>
                                            <th className='border border-1 border-black text-center px-1'>Phone.No</th>
                                            <th className='border border-1 border-black text-center px-1'>Email</th>
                                            <th className='border border-1 border-black text-center px-1'>Username</th>
                                            <th className='border border-1 border-black text-center px-1'>Password</th>
                                            <th className='border border-1 border-black text-center px-1'>Status</th>
                                            <th className='border border-1 border-black text-center px-1'>Action</th>
                                        </tr>

                                        {
                                            data.map((items, i) => {
                                                return (
                                                    <>
                                                        {
                                                            items.Admin_id == localdata.UserDetails.id ?
                                                                <tr>
                                                                    <td className='border border-1 border-black text-center'>{count++}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.File_Code}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Name}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.GSTIN}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Trade_Name}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Registration_Date}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Address}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Phone_Number}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Email}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Username}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Password}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Status == 0 ? "De-active" : "Active"}</td>
                                                                    <td className='view_customer_action_button border border-1 border-black text-center px-1'>
                                                                        <div className='d-flex justify-content-center align-items-center flex-column'>
                                                                            <Dropdown className="d-inline my-2 ">
                                                                                <Dropdown.Toggle className='bg-secondary border-0 py-3 px-5' id="dropdown-autoclose-true">
                                                                                    Action
                                                                                </Dropdown.Toggle>

                                                                                <Dropdown.Menu className='table_action_dropdown p-0 rounded-0 bg-transparent border-0'>
                                                                                    <Link className='text-decoration-none'><Dropdown.Item href="#" className='bg-primary text-center rounded text-white fw-bold py-2'>View</Dropdown.Item></Link>
                                                                                    <Dropdown.Item href="#" className='bg-success text-center rounded text-white my-1 fw-bold py-2' onClick={() => updatecustomer(items)}>Edit</Dropdown.Item>
                                                                                    <Dropdown.Item href="#" className='bg-danger text-center rounded text-white fw-bold py-2' onClick={() => deletedata(items.id)}>Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                :
                                                                null
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </table>
                            }
                        </div>
                    </div>
                </section>
            </section>
            <ToastContainer />
        </>
    )
}
