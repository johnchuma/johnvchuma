import React from 'react'
import NavigationBar from '../widgets/navigation_bar'
import { Outlet } from 'react-router-dom'
import Footer from '../widgets/footer'

const MainLayout = () => {
    return (
        <>
        <NavigationBar/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}

export default MainLayout
