import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";

import { FaBars } from "react-icons/fa";
import { Dashboard } from '../pages/Dashboard';
import logo from '../images/360_F_513476156_AA8IEOmw88mX2R384H6ggnkPJFhLzxxU-removebg-preview.png'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { sidebardata } from './Sidebar data/sidebardata';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar data/Sidebar';


export function Header() {
    let [option, setoption] = useState(false)
    let sidedata = sidebardata
    let [current, setcurrent] = useState(sidedata[0].id)
    let [sidecollapse,setcollapse]=useState(false)

    return (
        <>

            <header className='bg-white w-100 position-fixed'>
                <div className='col-6 h-100 d-flex align-items-center'>

                    <div className='menubar ms-4 fs-5 justify-content-center d-flex align-items-center' onClick={()=>setcollapse(!sidecollapse)}>
                        <FaBars />
                    </div>
                </div>

                <div className='col-6 d-flex justify-content-end'>
                    <div className='header_profile border border-1 border-secondary  me-4 fs-2 justify-content-center d-flex align-items-center'>
                        <CgProfile />
                    </div>
                </div>
        <Sidebar value={sidecollapse} />
            </header>



        </>
    )
}
