import React, { useState } from 'react'
import logo from "../../images/360_F_513476156_AA8IEOmw88mX2R384H6ggnkPJFhLzxxU-removebg-preview.png"
import { Field, Form, Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import axios, { toFormData } from 'axios'
import { Link, Navigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export function Login() {

  // here i make all states of login page
  // password type change state
  let [eye, seteye] = useState(true);
  // here i make all states of login page
  let [FormValues, SetFormValues] = useState('');


  let [userdata, setdata] = useState(null);

  localStorage.setItem('login', JSON.stringify(userdata))


  let successnotification = (success) => toast.success(success);
  let errornotification = (error) => toast.error(error);



  let insertdata = (logindata) => {
    axios.post(`/erp/login.php`, toFormData(logindata))
      .then((res) => {
        if (res.data.Status == 1) {
          setdata(res.data)
        }

        else {
          errornotification(res.data.msg)
        }
      })
      .catch((error) => {
        console.log(error.message)
      })
  }



  if (userdata != null) {
    if (userdata.UserDetails.Email == FormValues.Email || userdata.UserDetails.Password == FormValues.Password) {
      localStorage.setItem("customerdata",JSON.stringify(userdata));
      successnotification("Login succeed")
      return <Navigate to={"/dashboard"} />
    }
  }




  return (
    <>
      <section className='Login_main border border-1 border-danger'>
        <section className='login_inner border border-3 border-white'>
          {/* <div className='logo_section d-flex justify-content-center overflow-hidden'>
          <img src={logo} alt="" className='w-50' />
        </div> */}


          <div className='welcome_heading my-2'>
            <h1 className='text-center text-white'>Admin Login</h1>
          </div>

          <Formik

            initialValues={{
              Email: "",
              Password: ""
            }}

            onSubmit={(value) => {
              insertdata(value)
              SetFormValues(value)
            }}

          >
            <Form className='d-flex justify-content-center'>
              <div className='login_input_fields d-flex flex-column '>
                <Field type="email" placeholder="Enter Email Address" className=" login_inputs px-3 py-3  rounded-5 border border-2 border-white my-1" name="Email" />
                <div className='w-100 position-relative'>
                  <Field type={eye ? "password" : "text"} placeholder="Enter Password" className=" login_inputs w-100 px-3 pe-5 py-3  rounded-5 border border-2 border-white my-1" name="Password" />
                  <div className='eye_icon position-absolute'>
                    {
                      eye ? <FontAwesomeIcon icon={faEye} onClick={() => seteye(false)} />
                        : <FontAwesomeIcon icon={faEyeSlash} onClick={() => seteye(true)} />
                    }
                  </div>
                </div>

                <div className='forgot_password w-100 my-4 d-flex justify-content-end'>
                  <div className=' w-100 text-end fw-bold text-white fs-5'>
                    Forgot Password ?
                  </div>
                </div>
                <button type="submit" className='py-2 rounded-5 bg-white border-0 mt-3  fw-bolder fs-5'>Login</button>
                <Link to={"/Employee-login"} className='text-decoration-none'>
                  <p className='login_change mb-5 mt-1 text-white fw-bold text-center'>Login As Employee</p>
                </Link>
              </div>

            </Form>
          </Formik>
        </section>



      </section>
      <ToastContainer />
    </>
  )
}
