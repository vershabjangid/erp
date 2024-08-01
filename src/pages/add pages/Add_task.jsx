import React from 'react'
import { Header } from '../../common/Header'
import { Field, Formik, Form } from 'formik';
import axios, { toFormData } from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';
import { IoIosArrowDropright } from 'react-icons/io';

export function Add_task() {

    let noitfyerror = (error) => toast.error(error)
    let noitfysuccess = (success) => toast.success(success)
    let Successfully = "Data Inserted"

    let sendtask = (inserting) => {
        axios.post(`/erp/add-task.php`, toFormData(inserting))
            .then((res) => {
                if (res.data.Status == 1) {
                    noitfysuccess(res.data.msg)
                }

                else {
                    noitfyerror(res.data.msg)
                }
            })
    }





    let location = useLocation();
    const data = location.state || {}
    let navigate = useNavigate();

    let updatetask = (updatevalue) => {
        axios.post(`/erp/update-task.php`, toFormData(updatevalue))
            .then((res) => {
                if (res.data.status == 1) {
                    noitfysuccess(res.data.msg);
                }
            })
    }


    let getlocaldata = JSON.parse(localStorage.getItem("customerdata"))
    return (
        <>
            <section className='main'>
                <Header />


                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <FaTasks className='ms-2 me-2' />  Add Task</div>
                    <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/view-task"}>View Task <IoIosArrowDropright /></Link></div>
                </section>


                <Formik

                    initialValues={{
                        Admin_id : getlocaldata.UserDetails.id,
                        Admin_Name: data.Admin_Name || "",
                        Financial_Year: data.Financial_Year || "",
                        Service: data.Service || "",
                        Customer: data.Customer || "",
                        Task_Title: data.Task_Title || "",
                        Task_Instruction: data.Task_Instruction || "",
                        Assigned: data.Assigned || "",
                        Reviewer: data.Reviewer || "",
                        Billing_Details: data.Billing_Details || "",
                        Per_Hour_Charge: data.Per_Hour_Charge || "",
                        Start_Date: data.Start_Date || "",
                        End_Date: data.End_Date || "",
                        Priority: data.Priority || "",
                        Status: data.Status || "",
                        id: data.id
                    }}


                    onSubmit={(values, { resetform }) => {

                        if (!data.id) {
                            sendtask(values);
                        }

                        else {
                            updatetask(values)
                            navigate("/view-task", { state: {} })
                        }


                        resetform = {
                            Admin_Name: "",
                            Financial_Year: "",
                            Service: "",
                            Customer: "",
                            Task_Title: "",
                            Task_Instruction: "",
                            Assigned: "",
                            Reviewer: "",
                            Billing_Details: "",
                            Per_Hour_Charge: "",
                            Start_Date: "",
                            End_Date: "",
                            Priority: "",
                            Status: "",
                            id: data.id
                        }
                    }}


                >
                    <div className='add_employee_secction w-100 border border-1 border-success'>
                        <Form>
                            <div className='input_common_outer d-flex'>
                                <div className='common_input_section_card bg-white  rounded-1'>
                                    <div className='border-bottom border-1 border-secondary'>
                                        <h3 className='p-2'>Task Details</h3>
                                    </div>




                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Admin Name
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Admin_Name" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Financial Year
                                            </label>

                                            <div>
                                                <Field type="number" className="w-100" name="Financial_Year" />
                                            </div>
                                        </div>
                                    </div>



                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Service
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Service" />
                                            </div>
                                        </div>
                                    </div>



                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Customer
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Customer" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Task Title
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Task_Title" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Task Instruction
                                            </label>

                                            <div>
                                                <Field as="textarea" className="w-100" name="Task_Instruction" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Assigned
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Assigned" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Reviewer
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Reviewer" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Billing Details
                                            </label>

                                            <div>
                                                <Field type="number" className="w-100" name="Billing_Details" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Per Hour Charge
                                            </label>

                                            <div>
                                                <Field type="number" className="w-100" name="Per_Hour_Charge" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Start Date
                                            </label>

                                            <div>
                                                <Field type="date" className="w-100" name="Start_Date" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                End Date
                                            </label>

                                            <div>
                                                <Field type="date" className="w-100" name="End_Date" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Priority
                                            </label>

                                            <div>

                                                <Field as="select" className="w-100" name="Priority" >
                                                    <option>choose one option</option>
                                                    <option value="0">Low</option>
                                                    <option value="1">Medium</option>
                                                    <option value="2">High</option>
                                                    <option value="3">Urgent</option>
                                                </Field>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Status
                                            </label>

                                            <div>
                                                <Field as="select" className="w-100" name="Status" >
                                                    <option>choose one option</option>
                                                    <option value="0">De-Active</option>
                                                    <option value="1">Active</option>
                                                </Field>
                                            </div>
                                        </div>
                                    </div>





                                    <div className=' d-flex justify-content-center my-3'>
                                        <button type='submit' className='bg-primary me-1 px-5 py-2 rounded border-0 text-white fw-bold fs-5'>Save</button>
                                        <button type='reset' className='bg-danger px-5 py-2 rounded border-0 text-white fw-bold fs-5'>Clear</button>
                                    </div>
                                </div>
                            </div>

                        </Form>
                    </div>
                </Formik>
            </section>
            <ToastContainer />
        </>
    )
}
