import React from 'react'
import { Header } from '../../../common/Header'
import { Field, Formik, Form } from 'formik'
import axios, { toFormData } from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { FaPercent } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoIosArrowDropright } from 'react-icons/io'


export function Add_Gstr_3b() {

    let notifyerror = (error) => toast.error(error)
    let notifysuccess = (success) => toast.success(success)

    let send_gstr_3 = (inserting) => {
        console.log(inserting)
        axios.post(`/erp/add-gstr3b-3.2.php`, toFormData(inserting))
        axios.post(`/erp/add-gstr3b-3.1.1.php`, toFormData(inserting))
        axios.post(`/erp/add-gstr3b-3.1.php`, toFormData(inserting))
        axios.post(`/erp/gstr3b.php`, (inserting))
            .then((res) => {
                console.log(res)
                if (res.data.Status == 1) {
                    notifysuccess(res.data.msg)
                }

                else {
                    notifyerror(res.data.msg)
                }
            })
    }



    // let send_gstr_entry = (entry) => {
    //     console.log(entry)
    //         .then((res) => {
    //             console.log(res)
    //             if (res.data.Status == 1) {
    //                 notifysuccess(res.data.msg)
    //             }

    //             else {
    //                 notifyerror(res.data.msg)
    //             }
    //         })
    // }
    return (
        <>
            <section className='main'>
                <Header />

                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <FaPercent className='ms-2 me-2' />  View Customer</div>
                    <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/view-customer"}>View GSTR-3b <IoIosArrowDropright /></Link></div>
                </section>


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
                        ClientID: "100",
                        gstr3b_id: "",

                        // 3.1 
                        NOS3_1: "",
                        TTV3_1: "",
                        IT3_1: "",
                        CT3_1: "",
                        ST3_1: "",
                        C3_1: "",



                        NOS3_2: "",
                        TTV3_2: "",
                        IT3_2: "",
                        CT3_2: "",
                        ST3_2: "",
                        C3_2: "",



                        NOS3_3: "",
                        TTV3_3: "",
                        IT3_3: "",
                        CT3_3: "",
                        ST3_3: "",
                        C3_3: "",



                        NOS3_4: "",
                        TTV3_4: "",
                        IT3_4: "",
                        CT3_4: "",
                        ST3_4: "",
                        C3_4: "",


                        NOS3_5: "",
                        TTV3_5: "",
                        IT3_5: "",
                        CT3_5: "",
                        ST3_5: "",
                        C3_5: "",



                        // 3.1.1


                        NOS3_1_1: "",
                        TTV3_1_1: "",
                        IT3_1_1: "",
                        CT3_1_1: "",
                        ST3_1_1: "",
                        C3_1_1: "",


                        NOS3_1_2: "",
                        TTV3_1_2: "",
                        IT3_1_2: "",
                        CT3_1_2: "",
                        ST3_1_2: "",
                        C3_1_2: "",


                        // 3.2
                        NOS32_1: "",
                        CT32_1: "",
                        TTV32_1: "",


                        NOS32_2: "",
                        CT32_2: "",
                        TTV32_2: "",


                        NOS32_3: "",
                        CT32_3: "",
                        TTV32_3: "",
                    }}

                    onSubmit={(values) => {
                        values.NOS3_1 = "(a) Outward taxable supplies (other than zero rated, nil rated and exempted)"
                        values.NOS3_2 = "(b) Outward taxable supplies (zero rated)"
                        values.NOS3_3 = "(c) Other outward supplies (nil rated, exempted) "
                        values.NOS3_4 = "(d) Inward supplies (liable to reverse charge) "
                        values.NOS3_5 = "(e) Non-GST outward supplies"
                        // 3.1.1
                        values.NOS3_1_1 = "(i) Taxable supplies on which electronic commerce operator pays tax u/s 9(5) [to be furnished by electronic commerce operator]"
                        values.NOS3_1_2 = "(ii) Taxable supplies made by registered person through electronic commerce operator, on which electronic commerce operator is required to pay tax u/s 9(5) [to be furnished by registered person making supplies through electronic commerce operator]"
                        // 3.2
                        values.NOS32_1 = "Supplies made to Unregistered Persons"
                        values.NOS32_2 = "Supplies made to Composition Taxable Persons"
                        values.NOS32_3 = "Supplies made to UIN holders"
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


                                <div className='table_label px-1 py-1 my-3'>3.1 Details of Outward supplies and inward supplies liable to reverse charge (other than those covered by Table 3.1.1)</div>


                                <div className='entries_main_section border-bottom-0'>
                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                            Nature Of Supplies
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            Total Taxable Value
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            Integrated Tax
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            Central Tax
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            State/UT Tax
                                        </div>

                                        <div className='text-center fw-bold  col-1'>
                                            Cess
                                        </div>
                                    </div>




                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (a) Outward taxable supplies (other than zero rated, nil rated and
                                            exempted)
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTV3_1" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT3_1" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT3_1" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST3_1" />
                                        </div>

                                        <div className='text-center fw-bold  col-1'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C3_1" />
                                        </div>
                                    </div>




                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (b) Outward taxable supplies (zero rated)
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTV3_2" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT3_2" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT3_2" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST3_2" />
                                        </div>

                                        <div className='text-center fw-bold  col-1'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2" placeholder="0.00" name="C3_2" />
                                        </div>
                                    </div>



                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (c) Other outward supplies (nil rated, exempted)
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTV3_3" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT3_3" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT3_3" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST3_3" />
                                        </div>

                                        <div className='text-center fw-bold  col-1'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C3_3" />
                                        </div>
                                    </div>





                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (d) Inward supplies (liable to reverse charge)
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTV3_4" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT3_4" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT3_4" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST3_4" />
                                        </div>

                                        <div className='text-center fw-bold  col-1'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C3_4" />
                                        </div>
                                    </div>




                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (e) Non-GST outward supplies
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTV3_5" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT3_5" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT3_5" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST3_5" />
                                        </div>

                                        <div className='text-center fw-bold  col-1'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C3_5" />
                                        </div>
                                    </div>
                                </div>



                                <div className='table_label px-1 py-1 my-3'>3.1.1 Details of Supplies notifed under section 9(5) of the CGST Act, 2017 and corresponding provisions in IGST/UTGST/
                                    SGST Acts
                                </div>


                                <div className='entries_main_section border-bottom-0'>
                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                            Nature Of Supplies
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            Total Taxable Value
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            Integrated Tax
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            Central Tax
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            State/UT Tax
                                        </div>

                                        <div className='text-center fw-bold  col-1'>
                                            Cess
                                        </div>
                                    </div>




                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (i) Taxable supplies on which electronic commerce operator pays tax u/s 9(5) [to
                                            be furnished by electronic commerce operator]
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTV3_1_1" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT3_1_1" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT3_1_1" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST3_1_1" />
                                        </div>

                                        <div className='text-center fw-bold  col-1'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C3_1_1" />
                                        </div>
                                    </div>




                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (ii) Taxable supplies made by registered person through electronic commerce
                                            operator, on which electronic commerce operator is required to pay tax u/s 9(5)
                                            [to be furnished by registered person making supplies through electronic
                                            commerce operator]

                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTV3_1_2" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT3_1_2" />
                                        </div>

                                        <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT3_1_2" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST3_1_2" />
                                        </div>

                                        <div className='text-center fw-bold  col-1'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2" placeholder="0.00" name="C3_1_2" />
                                        </div>
                                    </div>
                                </div>



                                <div className='table_label px-1 py-1 my-3'>3.2 Out of supplies made in 3.1 (a) and 3.1.1 (i), details of inter-state supplies made </div>


                                <div className='entries_main_section border-bottom-0'>
                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-6 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                            Nature Of Supplies
                                        </div>

                                        <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            Total Taxable Value
                                        </div>

                                        <div className='col-3 text-center fw-bold fw-bold'>
                                            Integrated Tax
                                        </div>
                                    </div>




                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-6 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            Supplies made to Unregistered Persons
                                        </div>

                                        <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTV32_1" />
                                        </div>

                                        <div className='col-3 text-center fw-bold  fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT32_1" />
                                        </div>

                                    </div>




                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-6 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            Supplies made to Composition Taxable
                                            Persons
                                        </div>

                                        <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTV32_2" />
                                        </div>

                                        <div className='col-3 text-center fw-bold  fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT32_2" />
                                        </div>

                                    </div>


                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-6 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            Supplies made to UIN holders
                                        </div>


                                        <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTV32_3" />
                                        </div>

                                        <div className='col-3 text-center fw-bold  fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT32_3" />
                                        </div>

                                    </div>
                                </div>

                            </section>

















                            <div className=' d-flex justify-content-center my-3'>
                                <button type='submit' className='bg-primary me-1 px-5 py-2 rounded border-0 text-white fw-bold fs-5'>Save</button>
                                <button type='reset' className='bg-danger px-5 py-2 rounded border-0 text-white fw-bold fs-5'>Clear</button>
                            </div>
                        </section>


                    </Form>
                </Formik>
            </section>
            <ToastContainer />
        </>
    )
}
