import React, { useState } from 'react'
import logo from "../images/360_F_513476156_AA8IEOmw88mX2R384H6ggnkPJFhLzxxU-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export function Header() {

    let [sidebar, setsidebar] = useState(false);
    return (
        <>
            <header className='border border-1 border-danger d-flex position-relative'>
                <div className='w-50 border border-1 border-danger'>
                    <div className='logo_header border border-1'>
                        <img src={logo} alt="" className='w-100 h-100' />
                    </div>
                </div>
                <div className='w-50 border border-1 border-danger d-flex align-items-center justify-content-end '>
                    <div className='me-3 fs-3 text-white'>
                        <FontAwesomeIcon icon={faBars} onClick={()=>setsidebar(true)} />
                    </div>
                </div>


                <section className={sidebar == true ? "sidebar_header_active position-absolute border border-1 border-black" : "sidebar_header position-absolute border border-1 border-black"}>

                </section>
            </header>
        </>
    )
}
