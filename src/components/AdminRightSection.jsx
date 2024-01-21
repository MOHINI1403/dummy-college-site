import React from 'react'
import {Route,Routes} from "react-router-dom"

import AdminHome from './AdminHome'
import AdminStudent from './AdminStudent'
import AdminProject from './AdminProject'
import AdminUsers from './AdminUsers'


const AdminRightSection = () => {
  return (
    <div className='flex flex-col py-12 flex-1 h-full'>
      
      <div className='flex flex-col flex-1 overflow-y-scroll scrollbar-none'>
        <Routes>
          <Route path="/home" element={<AdminHome />}/>
          <Route path='/student' element={<AdminStudent />} />
          <Route path="/project" element={<AdminProject />} />
         
          <Route path='/users' element={<AdminUsers />}/>
        </Routes>
      </div>
      <hr />
    </div>
  )
}

export default AdminRightSection