import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios, { toFormData } from 'axios';
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export function Employee_login() {

    let [eye, seteye] = useState(false)
    let [userdata, setuserdata] = useState(null);
    let [formvalues, setformvalue] = useState('')

    localStorage.setItem('login', JSON.stringify(userdata))

    let successnotification = (success) => toast.success(success);
    let errornotification = (error) => toast.error(error);

    let insertdata = (values) => {
        axios.post(`/erp/employe-login.php`, toFormData(values))
            .then((res) => {
                if (res.data.Status) {
                    setuserdata(res.data)
                    successnotification(res.data.msg)
                }
                else {
                    errornotification(res.data.msg)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if (userdata != null) {
        if (userdata.UserDetails.Email == formvalues.Email || userdata.UserDetails.Password == formvalues.Password) {
            localStorage.setItem("employee_info", JSON.stringify(userdata))
            return <Navigate to="/dashboard" />
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
                        <h1 className='text-center text-white'>Employee Login</h1>
                    </div>

                    <Formik

                        initialValues={{
                            Email: "",
                            Password: ""
                        }}

                        onSubmit={(values) => {
                            insertdata(values)
                            setformvalue(values)
                        }}

                    >
                        <Form className='d-flex justify-content-center'>
                            <div className='login_input_fields d-flex flex-column '>
                                <Field type="email" placeholder="Enter Email Address" className=" login_inputs px-3 py-3  rounded-5 border border-2 border-white my-1" name="Email" />
                                <div className='w-100 position-relative'>
                                    <Field type={eye ? "text" : "password"} placeholder="Enter Password" className=" login_inputs w-100 px-3 pe-5 py-3  rounded-5 border border-2 border-white my-1" name="Password" />
                                    <div className='eye_icon position-absolute'>
                                        {
                                            eye ? <FontAwesomeIcon icon={faEyeSlash} onClick={() => seteye(false)} /> :
                                                <FontAwesomeIcon icon={faEye} onClick={() => seteye(true)} />
                                        }
                                    </div>
                                </div>

                                <div className='forgot_password w-100 my-4 d-flex justify-content-end'>
                                    <div className=' w-100 text-end fw-bold text-white fs-5'>
                                        Forgot Password ?
                                    </div>
                                </div>
                                <button type="submit" className='py-2 rounded-5 bg-white border-0 mt-3  fw-bolder fs-5'>Login</button>

                                <p className='login_change mb-5 mt-1 text-white fw-bold text-center'>Login As
                                    <Link to={"/"} className='text-decoration-none'> Admin </Link> or <Link to={"/supervisor-login"} className='text-decoration-none'> Supervisor</Link>
                                    <div><Link to={"/register"} className='text-decoration-none'>Create a account ?</Link></div>
                                </p>
                            </div>

                        </Form>
                    </Formik>
                </section>



            </section>
            <ToastContainer />
        </>
    )
}
