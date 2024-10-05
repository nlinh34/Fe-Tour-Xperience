import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout: React.FC<object> = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AdminLayout
