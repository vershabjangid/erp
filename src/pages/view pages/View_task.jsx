import React, { useEffect, useState } from 'react'
import { Header } from '../../common/Header'
import { Field, Formik, Form } from 'formik';
import axios from 'axios';
import { IoIosArrowDropright, IoIosLink } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { toast, ToastContainer } from 'react-toastify';
import { FaTasks } from 'react-icons/fa';

export function View_task() {

    let notifyerror = (error) => toast.error(error)
    let notifysuccess = (success) => toast.error(success)

    let [data, setdata] = useState([])

    let getdata = () => {
        axios.get(`/erp/view-task.php`)
            .then((res) => {
                setdata(res.data.Details)
            })
    }

    useEffect(() => {
        getdata();
    }, [])

    let count = 1;


    let deletedata = (deletevalue) =>{
        axios.delete(`/erp/delete-task.php?id=${deletevalue}`)
        .then((res)=>{
            if(res.data.status == 1){
                notifysuccess("data deleted");
                getdata();
            }
        })
    }



    let navigate = useNavigate();

    let updatetask = (updatevalue) => {
        navigate("/add-task",{state : updatevalue})
    }


    let getlocaldata = JSON.parse(localStorage.getItem("customerdata"))
    return (
        <>
            <section className='main'>
                <Header />

                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <FaTasks className='ms-2 me-2' />  View Task</div>
                    <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/add-task"}>Add Task <IoIosArrowDropright /></Link></div>
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

                                        <Link to={"/add-task"} className='text-decoration-none'>
                                            <div className='fs-3'>
                                                <IoIosLink className='me-2' />
                                                Go To Add Task
                                            </div>
                                        </Link>
                                    </div>

                                    :
                                    <table className='table_customer'>
                                        <tr className=' border border-1 border-black'>
                                            <th>S.No</th>
                                            <th className=' border border-1 border-black text-center px-1'>Admin Name</th>
                                            <th className=' border border-1 border-black text-center px-1'>Financial Year</th>
                                            <th className=' border border-1 border-black text-center px-1'>Service</th>
                                            <th className=' border border-1 border-black text-center px-1'>Customer</th>
                                            <th className=' border border-1 border-black text-center px-1'>Task Title</th>
                                            <th className=' border border-1 border-black text-center px-1'>  Task Instruction</th>
                                            <th className=' border border-1 border-black text-center px-1'>Assigned</th>
                                            <th className=' border border-1 border-black text-center px-1'> Reviewer</th>
                                            <th className=' border border-1 border-black text-center px-1'>Billing Details</th>
                                            <th className='border border-1 border-black text-center px-1'>Per Hour Charge</th>
                                            <th className='border border-1 border-black text-center px-1'>Start Date</th>
                                            <th className='border border-1 border-black text-center px-1'>End Date</th>
                                            <th className='border border-1 border-black text-center px-1'>Priority</th>
                                            <th className='border border-1 border-black text-center px-1'>Status</th>
                                            <th className='border border-1 border-black text-center px-1'>Action</th>
                                        </tr>
                                        {
                                            data.map((items, i) => {
                                                return (
                                                   <>
                                                   {
                                                    items.Admin_id == getlocaldata.UserDetails.id ? 
                                                    <tr>
                                                    <td className='border border-1 border-black text-center'>{count++}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Admin_Name}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Financial_Year}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Service}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Customer}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Task_Title}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Task_Instruction}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Assigned}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Reviewer}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Billing_Details}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Per_Hour_Charge}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Start_Date}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.End_Date}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Priority}</td>
                                                    <td className='border border-1 border-black text-center px-1'>{items.Status == 0 ? "De-active" : "Active"}</td>
                                                    <td className='view_customer_action_button border border-1 border-black text-center px-1'>
                                                        <div className='d-flex justify-content-center align-items-center flex-column'>
                                                        <Dropdown className="d-inline my-2 ">
                                                            <Dropdown.Toggle className='bg-secondary border-0 py-3 px-5' id="dropdown-autoclose-true">
                                                                Action
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className='table_action_dropdown p-0 rounded-0 bg-transparent border-0'>
                                                                <Link className='text-decoration-none'><Dropdown.Item href="#" className='bg-primary text-center rounded text-white fw-bold py-2'>View</Dropdown.Item></Link>
                                                                <Dropdown.Item href="#" className='bg-success text-center rounded text-white my-1 fw-bold py-2' onClick={()=>updatetask(items)}>Edit</Dropdown.Item>
                                                                <Dropdown.Item href="#" className='bg-danger text-center rounded text-white fw-bold py-2' onClick={()=>deletedata(items.id)}>Delete</Dropdown.Item>
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
            <ToastContainer/>
        </>
    )
}