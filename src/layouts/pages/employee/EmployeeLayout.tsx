import React from 'react'
import { Outlet } from 'react-router-dom'

const EmployeeLayout: React.FC<object> = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default EmployeeLayout
