import React from 'react'
import AdminLeftSection from './AdminLeftSection'
import AdminRightSection from './AdminRightSection'
const AdminDashboard = () => {
  return (
    <div className='w-screen h-screen flex items-center bg-primary'>
      
        <AdminLeftSection />
        <AdminRightSection />
        
        
        
    </div>
  )
}

export default AdminDashboard