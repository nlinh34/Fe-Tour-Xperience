import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout: React.FC<object> = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default DefaultLayout
