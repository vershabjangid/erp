import React, { useEffect, useState } from 'react'
import { Header } from '../../common/Header'
import axios from 'axios'

export function View_Employees() {

    let [data, setdata] = useState([])
    const viewemployee = () => {
        axios.get('https://netdomainindia.in/erp/view-employe.php')
            .then((res) => {
                setdata(res.data.Details)
            })
    }

    useEffect(() => {
        viewemployee();
    }, [])
    return (
        <>
            <section className='main'>
                <Header />


                <section className='table_overflow_section'>
                    <div className='table_main'>

                        <div className='table_section'>
                            {
                                data == "No Data Found" ?

                                    <div className='text-center fs-1 text-danger fw-bold '>No Data Found</div>

                                    :
                                    <table>
                                        <tr className='border border-1 border-black'>
                                            <th className='border border-1 border-black text-center px-1'>First Name</th>
                                            <th className='border border-1 border-black text-center px-1'>Last Name</th>
                                            <th className='border border-1 border-black text-center px-1'>Email</th>
                                            <th className='border border-1 border-black text-center px-1'>Phone Number</th>
                                            <th className='border border-1 border-black text-center px-1'>Address</th>
                                            <th className='border border-1 border-black text-center px-1'>Organization Email</th>
                                            <th className='border border-1 border-black text-center px-1'>CTC / Hrs</th>
                                            <th className='border border-1 border-black text-center px-1'>Billable / Hrs</th>
                                            <th className='border border-1 border-black text-center px-1'>Password</th>
                                            <th className='border border-1 border-black text-center px-1'>CTC / Monthly</th>
                                            <th className='border border-1 border-black text-center px-1'>Gender</th>
                                            <th className='border border-1 border-black text-center px-1'>Date Of Birth</th>
                                            <th className='border border-1 border-black text-center px-1'>Date Of Joining</th>
                                            <th className='border border-1 border-black text-center px-1'>Date of Leaving</th>
                                            <th className='border border-1 border-black text-center px-1'>Referred by</th>
                                            <th className='border border-1 border-black text-center px-1'>Designation</th>
                                            <th className='border border-1 border-black text-center px-1'>Working Under</th>
                                            <th className='border border-1 border-black text-center px-1'>Reporting To</th>
                                            <th className='border border-1 border-black text-center px-1'>Enable Login Access</th>
                                            <th className='border border-1 border-black text-center px-1'>Activate User</th>
                                            <th className='border border-1 border-black text-center px-1'>Lead Handler</th>
                                            <th className='border border-1 border-black text-center px-1'>Show Only Assigned Customer List</th>
                                            <th className='border border-1 border-black text-center px-1'>Show Customer Billing</th>
                                            <th className='border border-1 border-black text-center px-1'>Actions</th>
                                        </tr>

                                        {
                                            data.map((items, i) => {
                                                return (


                                                    <tr>


                                                        <th className='border border-1 border-black text-center px-1'>{items.First_Name}</th>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Last_Name}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Email}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Phone}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Address}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Org_Email}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.CTC_Hrs}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Billable}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Password}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.CTC_Mon}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Gender}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.DOB}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Date_Of_Joining}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Date_Of_Leaving}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Referred}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Designation}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Working_under}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Reporting}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Login_Access}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Active_User}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Lead_Handler}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Customer_List}</td>
                                                        <td className='border border-1 border-black text-center px-1'>{items.Show_Billing}</td>
                                                        <td className='border border-1 border-black text-center px-1'><button>dfskfsldkfjdlkfsjdlfk</button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </table>
                            }
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
