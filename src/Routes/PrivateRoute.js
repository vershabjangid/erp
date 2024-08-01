import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
    let userdetail = JSON.parse(localStorage.getItem('login'))
    let employeeuserdetails = JSON.parse(localStorage.getItem('employeelogin'))

    if (userdetail == null ) {
        return <Navigate to={"/"} />
    }

    else {
        return <Outlet />
    }

}
