import React from 'react'
import SideBar from './SideBar/SideBar'
import NavBar from './NavBar'
import MyBills from '../CreateBill/myBills'

const Dashboard = () => {


    return (
        <div>
            <SideBar/>
            <NavBar/>
            <MyBills/>
        </div>
    )
}

export default Dashboard