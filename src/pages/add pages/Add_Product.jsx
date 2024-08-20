import { Field, Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import { Header } from '../../common/Header'
import axios, { toFormData } from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoIosArrowDropright, IoIosConstruct } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

export function Add_Product() {

    let notifyerror = (error) => toast.error(error)
    let notifysuccess = (success) => toast.success(success)


    let insertdata = (datainsert) => {
        axios.post(`/erp/add-project.php`, toFormData(datainsert))
            .then((res) => {
                if (res.data.Status == 1) {
                    notifysuccess("Got The Data")
                }
                else {
                    notifyerror(res.data.msg)
                }
            })
    }

    // update data section 

    const locatedata = useLocation();
    const data = locatedata.state || {}

    let navigate = useNavigate();

    let updateproject = (updatevalue) => {
        axios.post(`/erp/update-project.php?id=`, toFormData(updatevalue))
            .then((res) => {
                notifysuccess("Data Updated")
            })
    }

    // localstorage data section 
    let getlocaldata = JSON.parse(localStorage.getItem("customerdata"))

    // customer search section 

    let [customer, setcustomer] = useState([])
    let [customerfilter, setcustomerfilter] = useState([])
    let [searchsection, setsearchsection] = useState(false)
    let [customerinfo, setcustomerinfo] = useState("")


    let getcustomer = () => {
        axios.get(`/erp/getcustomer.php`)
            .then((res) => {
                if (res.data.Details === "No Data Found") {
                    setcustomer("No Data Found")
                    setcustomerfilter("No Data Found")
                }

                else {
                    setcustomer(res.data.Details.filter((items) => items.Admin_id === getlocaldata.UserDetails.id))
                    setcustomerfilter(res.data.Details.filter((items) => items.Admin_id === getlocaldata.UserDetails.id))
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }


    // employee search section 

    let [employeesearch, setemployeesearch] = useState(false)
    let [employeeinfo, setemployeeinfo] = useState("")
    let [employeedata, setemployeedata] = useState([])
    let [employeedatafilter, setemployeedatafilter] = useState([])

    let getemployee = () => {
        axios.get(`/erp/view-employe.php`)
            .then((res) => {
                if (res.data.Details === "No Data Found") {
                    setemployeedata(res.data.Details)
                    setemployeedatafilter(res.data.Details)
                }

                else {
                    setemployeedata(res.data.Details.filter((items) => items.Admin_id === getlocaldata.UserDetails.id))
                    setemployeedatafilter(res.data.Details.filter((items) => items.Admin_id === getlocaldata.UserDetails.id))
                }

            })
    }

    let filter = (event) => {
        if (customer === "No Data Found") {
            setcustomer("No Data Found")
        }

        else {
            setcustomer(customerfilter.filter((items) => items.Name.toLowerCase().includes(event.target.value) || items.GSTIN.toLowerCase().includes(event.target.value) || items.Trade_Name.toLowerCase().includes(event.target.value)))
        }


        if (employeedata === "No Data Found") {
            setemployeedata("No Data Found")
        }
        else {
            setemployeedata(employeedatafilter.filter((items) => items.First_Name.toLowerCase().includes(event.target.value) || items.Last_Name.toLowerCase().includes(event.target.value) || items.Email.toLowerCase().includes(event.target.value)))
        }
    }


    useEffect(() => {
        getcustomer();
        getemployee();
    }, [])




    return (
        <>
            <section className='main w-100'>
                <Header />


                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <IoIosConstruct className='ms-2 me-2' />  Add Project</div>
                    <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/view-project"}>View Project <IoIosArrowDropright /></Link></div>
                </section>
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
                        Client_id: data.Client_id || "",
                        Employee_id: data.Employee_id || "",
                        id: data.id
                    }}


                    onSubmit={(values, { resetform }) => {
                        if (!data.id) {
                            values.Client_id = customerinfo.id
                            values.Customer = customerinfo.Name
                            values.Employee_id = employeeinfo.id
                            values.Assigned_Employee = employeeinfo.First_Name + employeeinfo.Last_Name
                            insertdata(values)
                        }
                        else {
                            values.Client_id = customerinfo.id
                            values.Customer = customerinfo.Name
                            values.Employee_id = employeeinfo.id
                            values.Assigned_Employee = employeeinfo.First_Name + employeeinfo.Last_Name
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
                        {
                            searchsection ?
                                <div className='w-100 m-auto position-fixed bg-black top-0 h-100'>
                                    <div className='w-100 m-auto my-2 border border-1 border-black d-flex align-items-center bg-white rounded'>
                                        <input type="text" className='w-100 p-1 border-0' placeholder='search by GSTIN, Legal Name, Trade Name' onChange={filter} />
                                        <div className='p-2' onClick={() => setsearchsection(false)}>
                                            <FaXmark />
                                        </div>
                                    </div>

                                    {
                                        customer == "" || customer === "No Data Found" ?
                                            <div className='position-absolute m-auto w-100 h-100 overflow-y-scroll border border-1 border-black bg-white px-2'>
                                                <div className="text-center fw-bold fs-2 mt-3">No Data Found</div>
                                            </div>
                                            :
                                            <div className='position-absolute m-auto w-100 h-100 overflow-y-scroll border border-1 border-black bg-white px-2'>
                                                <div className='border-bottom border-1 border-black mt-3 py-2 d-flex justify-content-between'>
                                                    <div className='company_name fw-bold col-2 text-center'>
                                                        GSTIN
                                                    </div>
                                                    <div className='company_name fw-bold col-3 text-center'>
                                                        Legal Register Name
                                                    </div>
                                                    <div className='company_name fw-bold col-3 text-center'>
                                                        Trade Name
                                                    </div>
                                                    <div className='company_name fw-bold col-2 text-center'>
                                                        Action
                                                    </div>
                                                </div>

                                                {
                                                    customer.map((items, i) => {
                                                        if (getlocaldata.UserDetails.id === items.Admin_id) {
                                                            return (
                                                                <div className='border-bottom border-1 border-black mt-3 py-2 d-flex justify-content-between'>
                                                                    <div className='company_name fw-bold col-2 text-center'>
                                                                        {items.GSTIN}
                                                                    </div>
                                                                    <div className='company_name fw-bold col-3 text-center'>
                                                                        {items.Name}
                                                                    </div>
                                                                    <div className='company_name fw-bold col-3 text-center'>
                                                                        {items.Trade_Name}
                                                                    </div>
                                                                    <div className='company_name fw-bold col-2 text-center'>
                                                                        <button className='py-2 px-4 border-0  rounded bg-primary text-white' onClick={() => (setcustomerinfo(items) || setsearchsection(false))}>
                                                                            Select
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                    }
                                </div>
                                : null
                        }




                        {
                            employeesearch ?
                                <div className='w-100 m-auto position-fixed bg-black top-0 h-100'>
                                    <div className='w-100 m-auto my-2 border border-1 border-black d-flex align-items-center bg-white rounded'>
                                        <input type="text" className='w-100 p-1 border-0' placeholder='search by Name, Email' onChange={filter} />
                                        <div className='p-2' onClick={() => setemployeesearch(false)}>
                                            <FaXmark />
                                        </div>
                                    </div>

                                    {
                                        employeedata == "" || employeedata === "No Data Found" ?
                                            <div className='position-absolute m-auto w-100 h-100 overflow-y-scroll border border-1 border-black bg-white px-2'>
                                                <div className='text-center fw-bold fs-3 mt-3'>No Data Found</div>
                                            </div>
                                            :
                                            <div className='position-absolute m-auto w-100 h-100 overflow-y-scroll border border-1 border-black bg-white px-2'>
                                                <div className='border-bottom border-1 border-black mt-3 py-2 d-flex justify-content-between'>
                                                    <div className='company_name fw-bold col-2 text-center'>
                                                        Name
                                                    </div>
                                                    <div className='company_name fw-bold col-3 text-center'>
                                                        Email
                                                    </div>
                                                    <div className='company_name fw-bold col-2 text-center'>
                                                        CTC / Hrs
                                                    </div>
                                                    <div className='company_name fw-bold col-2 text-center'>
                                                        Billable / Hrs
                                                    </div>
                                                    <div className='company_name fw-bold col-2 text-center'>
                                                        Action
                                                    </div>
                                                </div>

                                                {
                                                    employeedata.map((items, i) => {
                                                        return (
                                                            <div className='border-bottom border-1 border-black mt-3 py-2 d-flex justify-content-between'>
                                                                <div className='company_name fw-bold col-2 text-center'>
                                                                    {items.First_Name} {items.Last_Name}
                                                                </div>
                                                                <div className='company_name fw-bold col-3 text-center'>
                                                                    {items.Email}
                                                                </div>
                                                                <div className='company_name fw-bold col-2 text-center'>
                                                                    {items.CTC_Hrs}
                                                                </div>
                                                                <div className='company_name fw-bold col-2 text-center'>
                                                                    {items.Billable}
                                                                </div>
                                                                <div className='company_name fw-bold col-2 text-center'>
                                                                    <button className='py-2 px-4 border-0  rounded bg-primary text-white' onClick={() => (setemployeeinfo(items) || setemployeesearch(false))}>
                                                                        Select
                                                                    </button>
                                                                </div>
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </div>
                                    }
                                </div>
                                : null
                        }




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

                                            <div className='d-flex align-items-center justify-content-between border border-1 border-black p-1'>
                                                <Field type="text" className="w-100 border-0 py-1" value={customerinfo.Name} disabled name="Customer" />
                                                <div className='' onClick={() => setsearchsection(true)} >
                                                    <FaSearch />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='px-2 d-flex pb-3'>
                                        <div className='w-100 me-1'>
                                            <label>
                                                Assigned Employee
                                            </label>

                                            <div className='d-flex align-items-center justify-content-between border border-1 border-black p-1'>
                                                <Field type="text" className="w-100 border-0" disabled value={employeeinfo.First_Name + employeeinfo.Last_Name || ""} name="Assigned_Employee" />
                                                <div className='' onClick={() => setemployeesearch(true)} >
                                                    <FaSearch />
                                                </div>
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
