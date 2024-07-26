import React from 'react'
import { Header } from '../../common/Header'
import { Field, Formik, Form } from 'formik'
import axios, { toFormData } from 'axios'
import { toast, ToastContainer } from 'react-toastify'


export function Add_Gstr_3b() {

    let notifyerror = (error) => toast.error(error)
    let notifysuccess = (success) => toast.success(success)

    let send_gstr_3 = (inserting) => {
        console.log(inserting)
        axios.post(`/erp/gstr3b.php`,(inserting))
            .then((res) => {
                if (res.data.Status == 1) {
                    notifysuccess(res.data.msg)
                }

                else{
                    notifyerror(res.data.msg)
                }
            })
    }
    return (
        <>
            <section className='main'>
                <Header />

                <Formik

                    initialValues={{
                        year: "",
                        month: "",
                        legal_name: "",
                        trade_name: "",
                        arn: "",
                        date_of_arn: "",
                        userID: "100",
                        adminID: "100",
                        ClientID: "100"
                    }}

                    onSubmit={(values)=>{
                        send_gstr_3(values)
                    }}
                >
                    <Form>
                        <section className='gstr_3b_form_section bg-white border border-1 border-black'>
                            <h3 className='text-center'>Form GSTR-3B</h3>
                            <h5 className='text-center'>[See rule 61(5)]</h5>


                            <section className='form_3_date_section mb-3 d-flex justify-content-end'>
                                <table className='w-25 h-100 form_3_date_table'>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-25 text-center p-2 border-end border-1 border-black gstr_label '>Year</th>
                                        <td className='w-75 h-100'>
                                            <Field type="number" placeholder='Enter Year' className='w-100 border-0 h-100' name="year" /></td>
                                    </tr>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-25 text-center p-2 border-end border-1 border-black gstr_label '>Period</th>
                                        <td className='w-75 h-100'>
                                            <Field type="text" placeholder='Enter Period' className='w-100 border border-1 border-white h-100' name="month" /></td>
                                    </tr>
                                </table>
                            </section>



                            <section className=''>
                                <table className='w-100 h-100 form_3_date_table'>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-25  p-2 border-end border-1 border-black gstr_label '>GSTIN of the supplier</th>
                                        <td className='w-50 h-100'>
                                            <Field type="text" placeholder='Enter GSTIN of the supplier' className='w-100 border-0 h-100' name="GSTIN" />
                                        </td>
                                    </tr>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-25  p-2 border-end border-1 border-black gstr_label '>2(a). Legal name of the registered person</th>
                                        <td className='w-50 h-100 '>
                                            <Field name="legal_name" type="text" placeholder='Enter Legal name of the registered person' className='w-100 border border-1 border-white h-100' /></td>
                                    </tr>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-25  p-2 border-end border-1 border-black gstr_label '>2(b). Trade name, if any </th>
                                        <td className='w-50 h-100'>
                                            <Field name="trade_name" type="text" placeholder='Enter Trade name, if any' className='w-100 border-0 h-100' /></td>
                                    </tr>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-25  p-2 border-end border-1 border-black gstr_label'>2(c). ARN </th>
                                        <td className='w-50 h-100'>
                                            <Field name="arn" type="text" placeholder='Enter ARN' className='w-100 border border-1 border-white h-100' /></td>
                                    </tr>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-25  p-2 border-end border-1 border-black gstr_label '>2(d). Date of ARN </th>
                                        <td className='w-50 h-100'>
                                            <Field name="date_of_arn" type="date" placeholder='Enter Date of ARN' className='w-100 border-0 h-100' /></td>
                                    </tr>
                                </table>
                            </section>
                            <div className=' d-flex justify-content-center my-3'>
                                <button type='submit' className='bg-primary me-1 px-5 py-2 rounded border-0 text-white fw-bold fs-5'>Save</button>
                                <button type='reset' className='bg-danger px-5 py-2 rounded border-0 text-white fw-bold fs-5'>Clear</button>
                            </div>
                        </section>


                    </Form>
                </Formik>
            </section>
            <ToastContainer/>
        </>
    )
}
