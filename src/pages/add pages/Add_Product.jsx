import { Field, Formik, Form } from 'formik'
import React from 'react'
import { Header } from '../../common/Header'
import axios, { toFormData } from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'

export function Add_Product() {

    let notifyerror = (error) => toast.error(error)
    let notifysuccess = (success) => toast.success(success)


    let insertdata = (datainsert) => {
        axios.post(`/erp/add-project.php`, toFormData(datainsert))
            .then((res) => {
                console.log(res)
                if (res.data.Status == 1) {
                    notifysuccess("Got The Data")
                }
                else {
                    notifyerror(res.data.msg)
                }
            })
    }

    const locatedata = useLocation();
    const data = locatedata.state || {}
    console.log(data)

    let navigate = useNavigate();

    let updateproject = (updatevalue) => {
        console.log(updatevalue)
        axios.post(`/erp/update-project.php?id=`, toFormData(updatevalue))
            .then((res) => {
                notifysuccess("Data Updated")
            })
    }


    let getlocaldata = JSON.parse(localStorage.getItem("customerdata"))
    console.log(getlocaldata)
    return (
        <>
            <section className='main w-100'>
                <Header />

                <Formik

                    initialValues={{
                        Admin_id: getlocaldata.UserDetails.id,
                        Project_Name: data.Project_Name || "",
                        Start_Date: data.Start_Date || "",
                        End_Date: data.End_Date || "",
                        Customer: data.Customer || "",
                        Assigned_Employee: data.Assigned_Employee || "",
                        List_Of_Task: data.List_Of_Task || "",
                        Created_By: data.Created_By || "",
                        Billable_Amount: data.Billable_Amount || "",
                        id: data.id
                    }}


                    onSubmit={(values, { resetform }) => {
                        if (!data.id) {
                            insertdata(values)
                        }
                        else {
                            updateproject(values);
                            navigate("/view-project", { state: {} });
                        }


                        resetform(
                            {
                                Project_Name: "",
                                Start_Date: "",
                                End_Date: "",
                                Customer: "",
                                Assigned_Employee: "",
                                List_Of_Task: "",
                                Created_By: "",
                                Billable_Amount: "",
                                id: data.id
                            }
                        )
                    }}
                >
                    <div className='add_employee_secction w-100 border border-1 border-success'>
                        <Form>
                            <div className='input_common_outer d-flex'>
                                <div className='common_input_section_card bg-white  rounded-1'>
                                    <div className='border-bottom border-1 border-secondary'>
                                        <h3 className='p-2'>Project Details</h3>
                                    </div>




                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Project Name
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Project_Name" />
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
                                                Assigned Employee
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100" name="Assigned_Employee" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Task
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100 border border-1 border-black p-1" name="List_Of_Task" />
                                            </div>
                                        </div>
                                    </div>



                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Created By
                                            </label>

                                            <div>
                                                <Field type="text" className="w-100 border border-1 border-black p-1" name="Created_By" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Billable Amount
                                            </label>

                                            <div>
                                                <Field type="number" className="w-100 border border-1 border-black p-1" name="Billable_Amount" />
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
            </section >
            <ToastContainer />
        </>
    )
}
