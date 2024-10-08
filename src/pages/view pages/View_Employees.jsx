import React, { useEffect, useState } from 'react'
import { Header } from '../../common/Header'
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { IoIosArrowDropright, IoIosLink } from "react-icons/io";
import { IoHomeOutline } from 'react-icons/io5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';



export function View_Employees() {

    let successnotify = (success) => toast.success(success);
    let error = (error) => toast.error(error)

    let localdata = JSON.parse(localStorage.getItem("customerdata"))

    let [data, setdata] = useState([])
    const viewemployee = () => {
        axios.get('/erp/view-employe.php')
            .then((res) => {
                console.log(res)
                if (res.data.Details === "No Data Found") {
                    setdata("No Data Found")
                }
                else {
                    setdata(res.data.Details.filter((items) => items.Admin_id == localdata.UserDetails.id))
                }
            })
    }

    useEffect(() => {
        viewemployee();
    }, [])

    const deleteemployee = (deletedata) => {
        axios.delete(`/erp/delete-employe.php?id=${deletedata}`)
            .then((res) => {
                successnotify(res.data.msg)
                viewemployee();
            })
    }

    let count = 1;

    let navigate = useNavigate();

    let updatedata = (employedata) => {
        navigate('/add-employee', { state: employedata })
    }

    console.log(data)
    return (
        <>
            <section className='main'>
                <Header />

                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <FontAwesomeIcon icon={faUserTie} className='ms-2 me-2' />  View Employee</div>
                    <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/add-employee"}>Add Employee <IoIosArrowDropright /></Link></div>
                </section>


                <section className='table_overflow_section'>
                    <div className='table_main'>

                        <div className='table_section'>
                            {
                                data == "No Data Found" || data == "" ?

                                    <div className='text-center fs-1 text-danger fw-bold '>
                                        <div>
                                            No Data Found
                                        </div>

                                        <Link to={"/add-employee"} className='text-decoration-none'>
                                            <div className='fs-3'>
                                                <IoIosLink className='me-2' />
                                                Go To Add Employee
                                            </div>
                                        </Link>
                                    </div>

                                    :
                                    <table>
                                        <tr className=' border border-1 border-black'>
                                            <th>S.No</th>
                                            <th className='first_name_table_heading border border-1 border-black text-center px-1'>First Name</th>
                                            <th className='last_name_table_heading border border-1 border-black text-center px-1'>Last Name</th>
                                            <th className='email_table_heading border border-1 border-black text-center px-1'>Email</th>
                                            <th className=' border border-1 border-black text-center px-1'>Phone Number</th>
                                            <th className='address_table_heading border border-1 border-black text-center px-1'>Address</th>
                                            <th className='border border-1 border-black text-center px-1'>Organization Email</th>
                                            <th className='border border-1 border-black text-center px-1'>CTC / Hrs</th>
                                            <th className='border border-1 border-black text-center px-1'>Billable / Hrs</th>
                                            <th className='border border-1 border-black text-center px-1'>Password</th>
                                            <th className='border border-1 border-black text-center px-1'>CTC / Monthly</th>
                                            <th className='border border-1 border-black text-center px-1'>Gender</th>
                                            <th className='border border-1 border-black text-center px-1'>Date Of Birth</th>
                                            <th className='border border-1 border-black text-center px-1'>Date Of Joining</th>
                                            <th className='border border-1 border-black text-center px-1'>Date of Leaving</th>
                                            <th className='border border-1 border-black text-center px-1'>Referred by</th>
                                            <th className='border border-1 border-black text-center px-1'>Designation</th>
                                            <th className='border border-1 border-black text-center px-1'>Working Under</th>
                                            <th className='border border-1 border-black text-center px-1'>Reporting To</th>
                                            <th className='border border-1 border-black text-center px-1'>Enable Login Access</th>
                                            <th className='border border-1 border-black text-center px-1'>Activate User</th>
                                            <th className='border border-1 border-black text-center px-1'>Lead Handler</th>
                                            <th className='border border-1 border-black text-center px-1'>Show Only Assigned Customer List</th>
                                            <th className='border border-1 border-black text-center px-1'>Show Customer Billing</th>
                                            <th className='border border-1 border-black text-center px-1'>Actions</th>
                                        </tr>

                                        {
                                            data.map((items, i) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td className='border border-1 border-black text-center'>{count++}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.First_Name}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Last_Name}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Email}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Phone}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Address}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Org_Email}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.CTC_Hrs}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Billable}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Password}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.CTC_Mon}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Gender}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.DOB}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Date_Of_Joining}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Date_Of_Leaving}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Referred}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Designation}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Working_under}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Reporting}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Login_Access}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Active_User}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Lead_Handler}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Customer_List}</td>
                                                            <td className='border border-1 border-black text-center px-1'>{items.Show_Billing}</td>
                                                            <td className='border border-1 border-black text-center px-1'>
                                                                <div className='d-flex justify-content-center align-items-center flex-column'>
                                                                    <Dropdown className="d-inline my-2 mx-2">
                                                                        <Dropdown.Toggle className='bg-secondary border-0 py-3 px-5' id="dropdown-autoclose-true">
                                                                            Action
                                                                        </Dropdown.Toggle>

                                                                        <Dropdown.Menu className='table_action_dropdown p-0 rounded-0 bg-transparent border-0'>
                                                                            <Link className='text-decoration-none'><Dropdown.Item href="#" className='bg-primary text-center rounded text-white fw-bold py-2'>View</Dropdown.Item></Link>
                                                                            <Dropdown.Item href="#" className='bg-success text-center rounded text-white my-1 fw-bold py-2 ' onClick={() => updatedata(items)} >Edit</Dropdown.Item>
                                                                            <Dropdown.Item href="#" className='bg-danger text-center rounded text-white fw-bold py-2' onClick={() => deleteemployee(items.id)}>Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </div>
                                                            </td>
                                                        </tr>


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
