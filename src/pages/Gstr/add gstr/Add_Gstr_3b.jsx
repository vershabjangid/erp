import React, { useEffect, useState } from 'react'
import { Header } from '../../../common/Header'
import { Field, Formik, Form } from 'formik'
import axios, { toFormData } from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { FaPercent, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoIosArrowDropright } from 'react-icons/io'
import { FaXmark } from "react-icons/fa6";

export function Add_Gstr_3b() {
    // view all customer 
    let [getclient, setgetclient] = useState([])
    let [filterclient, setfilterclient] = useState([])
    let [clientdata, setclientinfo] = useState({})
    let [searchsection, setsearchsection] = useState(false)

    let getcustomer = () => {
        axios.get(`/erp/getcustomer.php`)
            .then((res) => {
                setgetclient(res.data.Details)
                setfilterclient(res.data.Details)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getcustomer();
    }, [])

    // admin storage memory
    let getlocalstorage = JSON.parse(localStorage.getItem("customerdata"))

    // error or success msg function 
    let notifyerror = (error) => toast.error(error)
    let notifysuccess = (success) => toast.success(success)

    // add data api 

    let [year, setyear] = useState('')
    let [month, setmonth] = useState('')
    let send_gstr_3 = (inserting) => {
        console.log(inserting)
        axios.post(`/erp/add-gstr3b.php`, toFormData(inserting))
            .then((res) => {
                if (res.data.Status === 1) {
                    notifysuccess(res.data.msg)
                }

                else {
                    notifyerror(res.data.msg)
                }
            })
    }





    let filter = (event) => {
        setfilterclient(getclient.filter((items) => items.Name.toLowerCase().includes(event.target.value) || items.GSTIN.toLowerCase().includes(event.target.value) || items.Trade_Name.toLowerCase().includes(event.target.value)))
    }
    return (
        <>
            <section className='main'>
                <Header />

                <section className='bg-primary text-white page_label fs-3 d-flex justify-content-between align-items-center border border-1 border-black'>
                    <div className='d-flex align-items-center'> <FaPercent className='ms-2 me-2' />  Add GSTR_3b</div>
                    <div className='d-flex align-items-center me-2 fs-5'><Link className='text-white text-decoration-none' to={"/view-gstr-3b"}>View GSTR-3b List <IoIosArrowDropright /></Link></div>
                </section>


                <Formik

                    initialValues={{
                        legal_name: "",
                        trade_name: "",
                        arn: "",
                        date_of_arn: "",
                        month: "",
                        year: "",
                        userID: "200",
                        Admin_id: getlocalstorage.UserDetails.id,
                        ClientID: "",
                        gstin: "",



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
                        TTV32_1: "",
                        IT32_1: "",

                        NOS32_2: "",
                        TTV32_2: "",
                        IT32_2: "",

                        NOS32_3: "",
                        TTV32_3: "",
                        IT32_3: "",




                        // 4
                        NOS4_1: "",
                        IT4_1: "",
                        CT4_1: "",
                        ST4_1: "",
                        C4_1: "",

                        NOS4_2: "",
                        IT4_2: "",
                        CT4_2: "",
                        ST4_2: "",
                        C4_2: "",

                        NOS4_3: "",
                        IT4_3: "",
                        CT4_3: "",
                        ST4_3: "",
                        C4_3: "",

                        NOS4_4: "",
                        IT4_4: "",
                        CT4_4: "",
                        ST4_4: "",
                        C4_4: "",

                        NOS4_5: "",
                        IT4_5: "",
                        CT4_5: "",
                        ST4_5: "",
                        C4_5: "",

                        NOS4_6: "",
                        IT4_6: "",
                        CT4_6: "",
                        ST4_6: "",
                        C4_6: "",

                        NOS4_7: "",
                        IT4_7: "",
                        CT4_7: "",
                        ST4_7: "",
                        C4_7: "",

                        NOS4_8: "",
                        IT4_8: "",
                        CT4_8: "",
                        ST4_8: "",
                        C4_8: "",

                        NOS4_9: "",
                        IT4_9: "",
                        CT4_9: "",
                        ST4_9: "",
                        C4_9: "",

                        NOS4_10: "",
                        IT4_10: "",
                        CT4_10: "",
                        ST4_10: "",
                        C4_10: "",

                        NOS4_11: "",
                        IT4_11: "",
                        CT4_11: "",
                        ST4_11: "",
                        C4_11: "",

                        //5
                        NOS5_1: "",
                        Inter_SS5_1: "",
                        Intra_SS5_1: "",

                        NOS5_2: "",
                        Inter_SS5_2: "",
                        Intra_SS5_2: "",

                        //5.1

                        NOS5_1_1: "",
                        IT5_1_1: "",
                        CT5_1_1: "",
                        ST5_1_1: "",
                        C5_1_1: "",

                        NOS5_1_2: "",
                        IT5_1_2: "",
                        CT5_1_2: "",
                        ST5_1_2: "",
                        C5_1_2: "",

                        NOS5_1_3: "",
                        IT5_1_3: "",
                        CT5_1_3: "",
                        ST5_1_3: "",
                        C5_1_3: "",

                        // 6


                        NOS6_1: "",
                        TTP6_1: "",
                        IT6_1: "",
                        CT6_1: "",
                        ST6_1: "",
                        C6_1: "",
                        TP6_1: "",
                        IP6_1: "",
                        LF6_1: "",

                        NOS6_2: "",
                        TTP6_2: "",
                        IT6_2: "",
                        CT6_2: "",
                        ST6_2: "",
                        C6_2: "",
                        TP6_2: "",
                        IP6_2: "",
                        LF6_2: "",

                        NOS6_3: "",
                        TTP6_3: "",
                        IT6_3: "",
                        CT6_3: "",
                        ST6_3: "",
                        C6_3: "",
                        TP6_3: "",
                        IP6_3: "",
                        LF6_3: "",

                        NOS6_4: "",
                        TTP6_4: "",
                        IT6_4: "",
                        CT6_4: "",
                        ST6_4: "",
                        C6_4: "",
                        TP6_4: "",
                        IP6_4: "",
                        LF6_4: "",

                        NOS6_5: "",
                        TTP6_5: "",
                        IT6_5: "",
                        CT6_5: "",
                        ST6_5: "",
                        C6_5: "",
                        TP6_5: "",
                        IP6_5: "",
                        LF6_5: "",

                        NOS6_6: "",
                        TTP6_6: "",
                        IT6_6: "",
                        CT6_6: "",
                        ST6_6: "",
                        C6_6: "",
                        TP6_6: "",
                        IP6_6: "",
                        LF6_6: "",

                        NOS6_7: "",
                        TTP6_7: "",
                        IT6_7: "",
                        CT6_7: "",
                        ST6_7: "",
                        C6_7: "",
                        TP6_7: "",
                        IP6_7: "",
                        LF6_7: "",

                        NOS6_8: "",
                        TTP6_8: "",
                        IT6_8: "",
                        CT6_8: "",
                        ST6_8: "",
                        C6_8: "",
                        TP6_8: "",
                        IP6_8: "",
                        LF6_8: "",


                        // // 7
                        NOS7_1: "",
                        IT7_1: "",
                        CT7_1: "",
                        ST7_1: "",
                        C7_1: "",

                    }}

                    onSubmit={(values) => {
                        values.gstin = clientdata.GSTIN
                        values.legal_name = clientdata.Name
                        values.trade_name = clientdata.Trade_Name
                        values.ClientID = clientdata.id
                        values.year = year;
                        values.month = month



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
                        //4
                        values.NOS4_1 = "(1) Import of goods"
                        values.NOS4_2 = "(2) Import of services"
                        values.NOS4_3 = "(3) Inward supplies liable to reverse charge (other than 1 & 2 above)"
                        values.NOS4_4 = "(4) Inward supplies from ISD "
                        values.NOS4_5 = "(5) All other ITC"
                        values.NOS4_6 = "(1) As per rules 38,42 & 43 of CGST Rules and section 17(5) "
                        values.NOS4_7 = "(2) Others"
                        values.NOS4_8 = "C. Net ITC available (A-B)"
                        values.NOS4_9 = "(D) Other Details"
                        values.NOS4_10 = "(1) ITC reclaimed which was reversed under Table 4(B)(2) in earlier tax period"
                        values.NOS4_11 = "(2) Ineligible ITC under section 16(4) & ITC restricted due to PoS rules"

                        //5
                        values.NOS5_1 = "From a supplier under composition scheme, Exempt, Nil rated supply"
                        values.NOS5_2 = "Non GST supply"

                        // 5.1
                        values.NOS5_1_1 = "System computed Interest"
                        values.NOS5_1_2 = "Interest Paid "
                        values.NOS5_1_3 = "Late fee"
                        //6
                        values.NOS6_1 = "Integrated tax"
                        values.NOS6_2 = "Central tax"
                        values.NOS6_3 = "State/UT tax"
                        values.NOS6_4 = "Cess"
                        values.NOS6_5 = "Integrated tax"
                        values.NOS6_6 = "Central tax"
                        values.NOS6_7 = "State/UT tax"
                        values.NOS6_8 = "Cess"

                        // 7
                        values.NOS7_1 = month + " " + year



                        send_gstr_3(values)
                    }}
                >
                    <Form>
                        {
                            searchsection ?
                                <div className='w-100 m-auto position-fixed bg-black top-0 h-100'>
                                    <div className='w-100 m-auto my-2 border border-1 border-black d-flex align-items-center bg-white rounded'>
                                        <input type="text" className='w-100 p-1 border-0' placeholder='search by GSTIN, Legal Name, Trade Name' onChange={filter} />
                                        <div className='p-2' onClick={() => setsearchsection(false)}>
                                            <FaXmark />
                                        </div>
                                    </div>

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
                                            filterclient.map((items, i) => {
                                                if (getlocalstorage.UserDetails.id === items.Admin_id) {
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
                                                                <button className='py-2 px-4 border-0  rounded bg-primary text-white' onClick={() => (setclientinfo(items) || setsearchsection(false))}>
                                                                    Select
                                                                </button>
                                                            </div>
                                                        </div>

                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                                : null
                        }




                        <section className='gstr_form_section bg-white border border-1 border-black'>
                            <h3 className='text-center'>Form GSTR-3B</h3>
                            <h5 className='text-center'>[See rule 61(5)]</h5>


                            {/* date and period section  */}
                            <section className='form_3_date_section mb-3 d-flex justify-content-end'>
                                <table className='w-25 h-100 form_3_date_table'>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-25 text-center p-2 border-end border-1 border-black gstr_label '>Year</th>
                                        <td className='w-75 h-100'>
                                            <Field type="number" placeholder='Enter Year' className='w-100 border-0 h-100' name="year" value={year} onChange={(e) => setyear(e.target.value)} /></td>
                                    </tr>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-25 text-center p-2 border-end border-1 border-black gstr_label '>Period</th>
                                        <td className='w-75 h-100'>
                                            <Field as="select" placeholder='Enter Period' className='w-100 border border-0 border-white h-100' name="month" value={month} onChange={(e) => setmonth(e.target.value)} >
                                                <option>choose month</option>
                                                <option value="January">January</option>
                                                <option value="February">February</option>
                                                <option value="March">March</option>
                                                <option value="April">April</option>
                                                <option value="May">May</option>
                                                <option value="June">June</option>
                                                <option value="July">July</option>
                                                <option value="August">August</option>
                                                <option value="September">September</option>
                                                <option value="October">October</option>
                                                <option value="November">November</option>
                                                <option value="December">December</option>
                                            </Field>
                                        </td>
                                    </tr>
                                </table>
                            </section>


                            <section className=''>
                                {/* personal information section  */}
                                <table className='w-100 h-100 form_3_date_table'>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-25  p-2 border-end border-1 border-black gstr_label '>GSTIN of the supplier</th>
                                        <td className='w-100 h-100 d-flex justify-content-between align-items-center'>
                                            <Field type="text" placeholder='Enter GSTIN of the supplier' className='w-100 border-0 h-100' disabled value={clientdata.GSTIN} name="gstin" />
                                            <div className='me-1' onClick={() => setsearchsection(true)}>
                                                <FaSearch />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-25  p-2 border-end border-1 border-black gstr_label'>2(a). Legal name of the registered person</th>
                                        <td className='w-100 h-100 d-flex justify-content-between align-items-center'>
                                            <Field value={clientdata.Name} name="legal_name" type="text" placeholder='Enter Legal name of the registered person' disabled className='w-100 border border-1 border-white h-100' />
                                            <div className='me-1' onClick={() => setsearchsection(true)}>
                                                <FaSearch />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='w-100 border border-1 border-black'>
                                        <th className='w-25  p-2 border-end border-1 border-black gstr_label '>2(b). Trade name, if any </th>
                                        <td className='w-100 h-100 d-flex justify-content-between align-items-center'>
                                            <Field value={clientdata.Trade_Name} name="trade_name" type="text" placeholder='Enter Trade name, if any' disabled className='w-100 border-0 h-100' />
                                            <div className='me-1' onClick={() => setsearchsection(true)}>
                                                <FaSearch />
                                            </div>
                                        </td>
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

                                {/*3.1 section*/}
                                <div className='table_label px-1 py-1 my-3'>3.1 Details of Outward supplies and inward supplies liable to reverse charge (other than those covered by Table 3.1.1)</div>

                                {/*3.1 section heading*/}
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



                                    {/*3.1 section 1st entry section*/}
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



                                    {/*3.1 section 2nd entry section*/}
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


                                    {/*3.1 section 3rd entry section*/}
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




                                    {/*3.1 section 4th entry section*/}
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



                                    {/*3.1 section 5th entry section*/}
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


                                {/*3.1 section*/}
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


                                {/*3.2 section*/}
                                <div className='table_label px-1 py-1 my-3'>
                                    3.2 Out of supplies made in 3.1 (a) and 3.1.1 (i), details of inter-state supplies made
                                </div>

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

                                {/* 4. section */}

                                <div className='table_label px-1 py-1 my-3'>4. Eligible ITC</div>

                                <div className='entries_main_section border-bottom-0'>
                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                            Nature Of Supplies
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            Integrated Tax
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
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
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1 fw-bold'>
                                            A. ITC Available (whether in full or part)
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>

                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>

                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>

                                        </div>

                                        <div className='text-center fw-bold  col-1'>

                                        </div>
                                    </div>




                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (1) Import of goods
                                        </div>


                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT4_1" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT4_1" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST4_1" />
                                        </div>

                                        <div className='text-center fw-bold  col-0'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2" placeholder="0.00" name="C4_1" />
                                        </div>
                                    </div>


                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (2) Import of services
                                        </div>


                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT4_2" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT4_2" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST4_2" />
                                        </div>

                                        <div className='text-center fw-bold  col-0'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2" placeholder="0.00" name="C4_2" />
                                        </div>
                                    </div>


                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (3) Inward supplies liable to reverse charge (other than 1 & 2 above)
                                        </div>


                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT4_3" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT4_3" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST4_3" />
                                        </div>

                                        <div className='text-center fw-bold  col-0'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2" placeholder="0.00" name="C4_3" />
                                        </div>
                                    </div>


                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (4) Inward supplies from ISD
                                        </div>


                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT4_4" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT4_4" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST4_4" />
                                        </div>

                                        <div className='text-center fw-bold  col-0'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2" placeholder="0.00" name="C4_4" />
                                        </div>
                                    </div>

                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (5) All other ITC
                                        </div>


                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT4_5" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT4_5" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST4_5" />
                                        </div>

                                        <div className='text-center fw-bold  col-0'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2" placeholder="0.00" name="C4_5" />
                                        </div>
                                    </div>





                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1 fw-bold'>
                                            B. ITC Reversed
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>

                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>

                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>

                                        </div>

                                        <div className='text-center fw-bold  col-1'>

                                        </div>
                                    </div>



                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (1) As per rules 38,42 & 43 of CGST Rules and section 17(5)
                                        </div>


                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT4_6" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT4_6" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST4_6" />
                                        </div>

                                        <div className='text-center fw-bold  col-0'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2" placeholder="0.00" name="C4_6" />
                                        </div>
                                    </div>



                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (2) Others
                                        </div>


                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT4_7" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT4_7" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST4_7" />
                                        </div>

                                        <div className='text-center fw-bold  col-0'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2" placeholder="0.00" name="C4_7" />
                                        </div>
                                    </div>


                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1 fw-bold'>
                                            C. Net ITC available (A-B)
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT4_8" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT4_8" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST4_8" />
                                        </div>

                                        <div className='text-center fw-bold  col-1'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C4_8" />
                                        </div>
                                    </div>



                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1 fw-bold'>
                                            (D) Other Details
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT4_9" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT4_9" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST4_9" />
                                        </div>

                                        <div className='text-center fw-bold  col-1'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C4_9" />
                                        </div>
                                    </div>






                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (1) ITC reclaimed which was reversed under Table 4(B)(2) in earlier tax period
                                        </div>


                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT4_10" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT4_10" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST4_10" />
                                        </div>

                                        <div className='text-center fw-bold  col-0'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2" placeholder="0.00" name="C4_10" />
                                        </div>
                                    </div>


                                    <div className='border-bottom border-1 border-black d-flex'>
                                        <div className='col-5 border-end border-1 border-black d-flex align-items-center ps-1'>
                                            (2) Ineligible ITC under section 16(4) & ITC restricted due to PoS rules
                                        </div>


                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT4_11" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT4_11" />
                                        </div>

                                        <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST4_11" />
                                        </div>

                                        <div className='text-center fw-bold  col-0'>
                                            <Field type="number" className="w-100 h-100 border-0 ps-2" placeholder="0.00" name="C4_11" />
                                        </div>
                                    </div>

                                </div>
                            </section>

                            {/* 5th section */}


                            <div className='table_label px-1 py-1 my-3'>5 Values of exempt, nil-rated and non-GST inward supplies</div>


                            <div className='entries_main_section border-bottom-0'>
                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-6 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                        Nature Of Supplies
                                    </div>

                                    <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        Inter- State supplies
                                    </div>

                                    <div className='text-center fw-bold  col-3'>
                                        Intra- State supplies
                                    </div>
                                </div>





                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-6 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        From a supplier under composition scheme, Exempt, Nil rated supply
                                    </div>

                                    <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="Inter_SS5_1" />
                                    </div>

                                    <div className='col-3 text-center fw-bold fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="Intra_SS5_1" />
                                    </div>

                                </div>



                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-6 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        Non GST supply
                                    </div>

                                    <div className='col-3 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="Inter_SS5_2" />
                                    </div>

                                    <div className='col-3 text-center fw-bold fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="Intra_SS5_2" />
                                    </div>

                                </div>
                            </div>

                            {/* 5.1 section  */}
                            <div className='table_label px-1 py-1 my-3'>5.1 Interest and Late fee for previous tax period</div>


                            <div className='entries_main_section border-bottom-0'>
                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                        Details
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        Integrated tax
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        Central tax
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        State/UT tax
                                    </div>

                                    <div className='text-center fw-bold  col-2'>
                                        Cess
                                    </div>
                                </div>




                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        System computed
                                        Interest
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT5_1_1 " />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT5_1_1" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST5_1_1" />
                                    </div>



                                    <div className='col-2 text-center fw-bold fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C5_1_1" />
                                    </div>

                                </div>




                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        Interest Paid
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT5_1_2 " />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT5_1_2" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST5_1_2" />
                                    </div>



                                    <div className='col-2 text-center fw-bold fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C5_1_2" />
                                    </div>

                                </div>


                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        Late fee
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT5_1_3" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT5_1_3" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST5_1_3" />
                                    </div>



                                    <div className='col-2 text-center fw-bold fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C5_1_3" />
                                    </div>

                                </div>

                            </div>



                            {/* {6.1 section} */}
                            <div className='table_label px-1 py-1 my-3'>6.1 Payment of tax</div>

                            <div className='entries_main_section border-bottom-0'>


                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-2 text-center border-end border-1 border-black fw-bold d-flex align-items-center justify-content-center ps-1'>
                                        Description
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold d-flex justify-content-center align-items-center'>
                                        Total tax payable
                                    </div>

                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <div className='col-12 border-bottom border-1 border-black'>
                                            Tax paid through ITC
                                        </div>
                                        <div className='col-12 d-flex'>
                                            <div className='col-3 border-end border-1 border-black'>
                                                Integrated tax
                                            </div>
                                            <div className='col-3 border-end border-1 border-black'>
                                                Central tax
                                            </div>
                                            <div className='col-3 border-end border-1 border-black'>
                                                State/UT tax
                                            </div>
                                            <div className='col-3'>
                                                Cess
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold d-flex justify-content-center align-items-center'>
                                        Tax Paid in cash
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold d-flex justify-content-center align-items-center'>
                                        Interest paid in cash
                                    </div>

                                    <div className='text-center fw-bold  col-1 d-flex justify-content-center align-items-center'>
                                        Late fee paid in cash
                                    </div>
                                </div>

                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-12 fw-bold d-flex align-items-center ps-1'>
                                        (A) Other than reverse charge
                                    </div>
                                </div>





                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        Integrated
                                        tax
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTP6_1" />
                                    </div>

                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>

                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="IT6_1" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="CT6_1" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="ST6_1" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C6_1" /></div>
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TP6_1" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IP6_1" />
                                    </div>

                                    <div className='text-center fw-bold  col-1'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="LF6_1" />
                                    </div>
                                </div>




                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        Central tax
                                    </div>


                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTP6_2" />
                                    </div>

                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="IT6_2" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="CT6_2" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="ST6_2" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C6_2" /></div>
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TP6_2" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IP6_2" />
                                    </div>

                                    <div className='text-center fw-bold  col-1'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="LF6_2" />
                                    </div>
                                </div>


                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        State/UT tax
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTP6_3" />
                                    </div>

                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="IT6_3" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="CT6_3" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="ST6_3" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C6_3" /></div>
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TP6_3" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IP6_3" />
                                    </div>

                                    <div className='text-center fw-bold  col-1'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="LF6_3" />
                                    </div>
                                </div>



                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        Cess
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTP6_4" />
                                    </div>

                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="IT6_4" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="CT6_4" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="ST6_4" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C6_4" /></div>
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TP6_4" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IP6_4" />
                                    </div>

                                    <div className='text-center fw-bold  col-1'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="LF6_4" />
                                    </div>
                                </div>




                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-12 fw-bold d-flex align-items-center ps-1'>
                                        (B) Reverse charge
                                    </div>
                                </div>



                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        Integrated
                                        tax
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTP6_5" />
                                    </div>

                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="IT6_5" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="CT6_5" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="ST6_5" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C6_5" /></div>
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TP6_5" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IP6_5" />
                                    </div>

                                    <div className='text-center fw-bold  col-1'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="LF6_5" />
                                    </div>
                                </div>


                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        Central tax
                                    </div>


                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTP6_6" />
                                    </div>

                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="IT6_6" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="CT6_6" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="ST6_6" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C6_6" /></div>
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TP6_6" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IP6_6" />
                                    </div>

                                    <div className='text-center fw-bold  col-1'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="LF6_6" />
                                    </div>
                                </div>


                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        State/UT tax
                                    </div>



                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTP6_7" />
                                    </div>

                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="IT6_7" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="CT6_7" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="ST6_7" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C6_7" /></div>
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TP6_7" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IP6_7" />
                                    </div>

                                    <div className='text-center fw-bold  col-1'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="LF6_7" />
                                    </div>
                                </div>





                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-2 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        Cess
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TTP6_8" />
                                    </div>

                                    <div className='col-5 text-center fw-bold border-end border-1 border-black fw-bold d-flex'>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="IT6_8" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="CT6_8" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2 border-end border-1 border-black" placeholder="0.00" name="ST6_8" /></div>
                                        <div><Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C6_8" /></div>
                                    </div>

                                    <div className='col-1 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="TP6_8" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IP6_8" />
                                    </div>

                                    <div className='text-center fw-bold  col-1'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="LF6_8" />
                                    </div>
                                </div>
                            </div>



                            <div className='table_label px-1 py-1 my-3 d-none'>Breakup of tax liability declared (for interest computation)</div>


                            <div className='entries_main_section d-none border-bottom-0'>
                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black fw-bold d-flex align-items-center ps-1'>
                                        Period
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        Integrated tax
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        Central tax
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        State/UT tax
                                    </div>

                                    <div className='text-center fw-bold  col-2'>
                                        Cess
                                    </div>
                                </div>




                                <div className='border-bottom border-1 border-black d-flex'>
                                    <div className='col-4 border-end border-1 border-black d-flex align-items-center ps-1'>
                                        <Field type="text" className="w-100 h-100 border-0 ps-2 py-2" disabled name=" NOS7_1" value={month + " " + year} />
                                    </div>


                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="IT7_1" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="CT7_1" />
                                    </div>

                                    <div className='col-2 text-center fw-bold border-end border-1 border-black fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="ST7_1" />
                                    </div>



                                    <div className='col-2 text-center fw-bold fw-bold'>
                                        <Field type="number" className="w-100 h-100 border-0 ps-2 py-2" placeholder="0.00" name="C7_1" />
                                    </div>

                                </div>

                            </div>






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
