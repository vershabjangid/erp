import React, { useEffect, useState } from 'react'
import { Header } from '../../common/Header'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowDropright, IoIosConstruct, IoIosLink } from 'react-icons/io'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'

export function View_Project() {

    let notifyerror = (error) => toast.error(error)
    let notifysucccess = (success) => toast.success(success)



    let [data, setdata] = useState([]);

    let getdata = () => {
        axios.get(`/erp/view-project.php`)
            .then((res) => {
                setdata(res.data.Details)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getdata();
    }, [])

    let count = 1


    let deletecustomer = (deleteid) => {
        axios.delete(`/erp/delete-project.php?id=${deleteid}`)
            .then((res) => {
                notifysucccess(res.data.msg)
                getdata();
            })
            .catch((error) => {
                notifyerror(error)
            })
    }

    let navigate = useNavigate();
    let updateproject = (updatevalue) => {
        navigate('/add-project', { state: updatevalue })
    }

    let getlocaldata = JSON.parse(localStorage.getItem("customerdata"))
    console.log(getlocaldata)
    return (
        <>
            <section className='main'>
                <Header />

                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <IoIosConstruct className='ms-2 me-2' />  View Project</div>
                    <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/add-project"}>Add Project <IoIosArrowDropright /></Link></div>
                </section>

                <section className='table_overflow_section'>
                    <div className='table_main'>

                        <div className='table_section'>
                            {
                                data == "No Data Found" ?

                                    <div className='text-center fs-1 text-danger fw-bold '>
                                        <div>
                                            No Data Found
                                        </div>

                                        <Link to={"/add-project"} className='text-decoration-none'>
                                            <div className='fs-3'>
                                                <IoIosLink className='me-2' />
                                                Go To Add Project
                                            </div>
                                        </Link>
                                    </div>

                                    :
                                    <table>
                                        <tr className=' border border-1 border-black'>
                                            <th>S.No</th>
                                            <th className='border border-1 border-black text-center px-1'>Project Name</th>
                                            <th className='border border-1 border-black text-center px-1'>Start Date</th>
                                            <th className='border border-1 border-black text-center px-1'>End Date</th>
                                            <th className='border border-1 border-black text-center px-1'>Customer</th>
                                            <th className='border border-1 border-black text-center px-1'>Assigned Employee</th>
                                            <th className='border border-1 border-black text-center px-1'>List Of Task</th>
                                            <th className='border border-1 border-black text-center px-1'>Created By</th>
                                            <th className='border border-1 border-black text-center px-1'>Billable Amount</th>
                                            <th className='border border-1 border-black text-center px-1'>Actions</th>
                                        </tr>

                                        {
                                            data.map((items, i) => {
                                                return (
                                                    <>
                                                        {
                                                            items.Admin_id == getlocaldata.UserDetails.id ?
                                                                <tr>
                                                                    <td className='border border-1 border-black text-center'>{count++}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Project_Name}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Start_Date}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.End_Date}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Customer}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Assigned_Employee}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.List_Of_Task}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Created_By}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>{items.Billable_Amount}</td>
                                                                    <td className='border border-1 border-black text-center px-1'>
                                                                        <div className='d-flex justify-content-center align-items-center flex-column'>
                                                                            <Dropdown className="d-inline my-2 mx-2">
                                                                                <Dropdown.Toggle className='bg-secondary border-0 py-3 px-5' id="dropdown-autoclose-true">
                                                                                    Action
                                                                                </Dropdown.Toggle>

                                                                                <Dropdown.Menu className='table_action_dropdown p-0 rounded-0 bg-transparent border-0'>
                                                                                    <Link className='text-decoration-none'><Dropdown.Item href="#" className='bg-primary text-center rounded text-white fw-bold py-2'>View</Dropdown.Item></Link>
                                                                                    <Dropdown.Item href="#" className='bg-success text-center rounded text-white my-1 fw-bold py-2 ' onClick={() => updateproject(items)} >Edit</Dropdown.Item>
                                                                                    <Dropdown.Item href="#" className='bg-danger text-center rounded text-white fw-bold py-2' onClick={() => deletecustomer(items.id)}>Delete</Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                    </td>
                                                                </tr> :
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
