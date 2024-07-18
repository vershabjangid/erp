import React, { useState } from 'react'
import logo from "../images/360_F_513476156_AA8IEOmw88mX2R384H6ggnkPJFhLzxxU-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { sidebardata } from './Sidebar data/sidebardata';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
export function Header() {

    let [option, setoption] = useState(false)
    return (
        <>
            <header className=''>
                
            </header>

        </>
    )
}
