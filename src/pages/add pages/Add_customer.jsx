import React from 'react'
import { Header } from '../../common/Header'
import { Field, Formik, Form } from 'formik'
import { HiAdjustmentsHorizontal } from 'react-icons/hi2'
import axios, { toFormData } from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { IoIosArrowDropright } from 'react-icons/io'
import { MdOutlineShoppingBag } from 'react-icons/md'

export function Add_customer() {

  let notifyerror = (error) => toast.error(error)
  let successmsg = (successin) => toast.success(successin)
  let dataupdate = (update) => toast.success(update)

  let senddata = (customerdata) => {
    console.log(customerdata)
    axios.post(`/erp/Create-customer.php`, toFormData(customerdata))
      .then((res) => {
        if (res.data.Status == 0) {
          notifyerror(res.data.msg)
        }
        else {
          successmsg("Got The Data")
        }
      })
  }



  let location = useLocation();
  let data = location.state || {}
  let navigate = useNavigate();


  let updatingdata = (updatedata) => {
    console.log(updatedata)
    axios.post(`/erp/update-customer.php?id=`, toFormData(updatedata))
      .then((res) => {

        if (res.data.Status == 1) {
          dataupdate(res.data.msg)
        }

        else {
          notifyerror(res.data.msg)
        }
      })
  }


  let localdata = JSON.parse(localStorage.getItem("customerdata"))
  console.log(localdata)
  return (
    <>
      <section className='main'>
        <Header />


        <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
          <div className='d-flex align-items-center'> <MdOutlineShoppingBag className='ms-2 me-2' />  View Customer</div>
          <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/view-customer"}>View Customer <IoIosArrowDropright /></Link></div>
        </section>


        <Formik

          initialValues={{
            Admin_id: localdata.UserDetails.id,
            File_Code: data.File_Code || "",
            Name: data.Name || "",
            GSTIN: data.GSTIN || "",
            Trade_Name:data.Trade_Name || "",
            Registration_Date: data.Registration_Date || "",
            Address: data.Address || "",
            Phone_Number: data.Phone_Number || "",
            Email: data.Email || "",
            Username: data.Username || "",
            Password: data.Password || "",
            Status: data.Status || "",
            Image: data.Image || "",
            id: data.id
          }}


          onSubmit={(values, { resetform }) => {

            if (!data.id) {
              senddata(values)
            }
            else {
              updatingdata(values)
              navigate('/view-customer', { state: {} })
            }


            resetform(
              {
                values: {
                  File_Code: "",
                  Name: "",
                  GSTIN: "",
                  Registration_Date: "",
                  Address: "",
                  Phone_Number: "",
                  Email: "",
                  Username: "",
                  Password: "",
                  Status: "",
                  Image: "",
                  Trade_Name:"",
                  id: data.id
                }
              }
            )
          }}
        >
          <div className='add_employee_secction w-100 border border-1 border-success'>
            <Form className='add_employee_secction '>
              <div className='input_common_outer d-flex'>
                <div className='common_input_section_card bg-white  rounded-1'>
                  <div className='border-bottom border-1 border-secondary'>
                    <h3 className='p-2'>Customer Details</h3>
                  </div>




                  <div className='px-2 d-flex pb-3'>
                    <div className='w-100 me-1'>
                      <label>
                        File Code
                      </label>

                      <div>
                        <Field type="text" className="w-100" name="File_Code" />
                      </div>
                    </div>
                  </div>


                  <div className='px-2 d-flex pb-3'>
                    <div className='w-100 me-1'>
                      <label>
                      Company Name
                      </label>

                      <div>
                        <Field type="text" className="w-100" name="Name" />
                      </div>
                    </div>
                  </div>


                  <div className='px-2 d-flex pb-3'>
                    <div className='w-100 me-1'>
                      <label>
                        GSTIN
                      </label>

                      <div>
                        <Field type="text" className="w-100" name="GSTIN" />
                      </div>
                    </div>
                  </div>


                  <div className='px-2 d-flex pb-3'>
                    <div className='w-100 me-1'>
                      <label>
                      Trade Name
                      </label>

                      <div>
                        <Field type="text" className="w-100" name="Trade_Name" />
                      </div>
                    </div>
                  </div>

                  <div className='px-2 d-flex pb-3'>
                    <div className='w-100 me-1'>
                      <label>
                        Registration Date
                      </label>

                      <div>
                        <Field type="date" className="w-100" name="Registration_Date" />
                      </div>
                    </div>
                  </div>


                  <div className='px-2 d-flex pb-3'>
                    <div className='w-100 me-1'>
                      <label>
                        Address
                      </label>

                      <div>
                        <Field type="text" className="w-100" name="Address" />
                      </div>
                    </div>
                  </div>


                  <div className='px-2 d-flex pb-3'>
                    <div className='w-100 me-1'>
                      <label>
                        Phone.No
                      </label>

                      <div>
                        <Field type="number" className="w-100 border border-1 border-black p-1" name="Phone_Number" />
                      </div>
                    </div>
                  </div>



                  <div className='px-2 d-flex pb-3'>
                    <div className='w-100 me-1'>
                      <label>
                        Email
                      </label>

                      <div>
                        <Field type="email" className="w-100 border border-1 border-black p-1" name="Email" />
                      </div>
                    </div>
                  </div>


                  <div className='px-2 d-flex pb-3'>
                    <div className='w-100 me-1'>
                      <label>
                        Username
                      </label>

                      <div>
                        <Field type="text" className="w-100 border border-1 border-black p-1" name="Username" />
                      </div>
                    </div>
                  </div>


                  <div className='px-2 d-flex pb-3'>
                    <div className='w-100 me-1'>
                      <label>
                        Password
                      </label>

                      <div>
                        <Field type="text" className="w-100 border border-1 border-black p-1" name="Password" />
                      </div>
                    </div>
                  </div>


                  <div className='px-2 d-flex pb-3'>
                    <div className='w-100 me-1'>
                      <label>
                        Status
                      </label>

                      <div>
                        <Field as="select" className="w-100 border border-1 border-black p-1" name="Status" >
                          <option>choose one option</option>
                          <option value="0">De-active</option>
                          <option value="1">active</option>
                        </Field>
                      </div>
                    </div>
                  </div>


                  <div className='px-2 d-flex pb-3'>
                    <div className='w-100 me-1'>
                      <label>
                        Image
                      </label>

                      <div>
                        <Field type="file" className="w-100 border border-1 border-black p-1" name="Image" />
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


        <section className='customize_btn border border-1 border-danger position-fixed  px-2 py-1'>
          <HiAdjustmentsHorizontal className='fs-3' />
          Customize
        </section>

      </section>
      <ToastContainer />
    </>
  )
}
