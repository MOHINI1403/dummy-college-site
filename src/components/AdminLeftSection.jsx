import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'


import { isActiveStyles, isNotActiveStyles } from '../utils/styles'


const AdminLeftSection = () => {
    
  return (
    <nav className='bg-white p-4 shadow-md flex items-center justify-between fixed gap-3 w-[82%] top-0 z-10'>
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
            <img src="/path/to/your/logo.png" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold">Your Logo Name</span>
        </div>
        
        <ul className='flex space-x-4'>


          <NavLink className={({isActive})=>isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500 `:isNotActiveStyles} to={"/dashboard/admin/home"}>Home</NavLink>
          <NavLink className={({isActive})=>isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`:isNotActiveStyles} to={"/dashboard/admin/student"}>Student Details</NavLink>
          <NavLink className={({isActive})=>isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`:isNotActiveStyles} to={"/dashboard/admin/project"}>Project List</NavLink>
          
          <NavLink className={({isActive})=>isActive ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`:isNotActiveStyles} to={"/dashboard/admin/users"}>Users</NavLink>
        </ul>

        
    </nav>
  )
}

export default AdminLeftSection