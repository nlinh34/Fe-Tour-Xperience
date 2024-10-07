import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import DefaultLayout from "../layouts/pages/DefaultLayout"

{/* Landing Page */ }
const LandingPage = lazy(() => import('../pages/static/LandingPage'))

{/* Admin Page */ }
const AdminLayout = lazy(() => import('../layouts/pages/admin/AdminLayout'))
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'))
const AdminManagerTour = lazy(() => import('../pages/admin/AdminManagerTour'))

{/* Employee Page */ }
const EmployeeLayout = lazy(() => import('../layouts/pages/employee/EmployeeLayout'))
const EmployeeDashboard = lazy(() => import('../pages/employee/EmployeeDashboard'))

{/* Customer Page */ }


{/* Tour Page */}
const TourPage = lazy(() => import('../components/website/tourPage/tourPage') )

{/* Not Found */ }
const NotFound = lazy(() => import('../pages/404/NotFound'))
const AppRoutes = () => {
    return (
        <>
            <Routes>
                {/* Landing Page */}
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<LandingPage />} />
                </Route>

                {/* Admin Page */}
                <Route element={<DefaultLayout />}>
                    <Route path='/admin' element={<AdminLayout />}>
                        <Route path="" element={<AdminDashboard />} />
                        <Route path="manager-tour" element={<AdminManagerTour />} />
                    </Route>
                </Route>

                {/* Employee Page */}
                <Route element={<DefaultLayout />}>
                    <Route path='/employee' element={<EmployeeLayout />}>
                        <Route path='' element={<EmployeeDashboard />} />
                    </Route>
                </Route>
                
                <Route>
                    <Route path='tour-explore' element={<TourPage/>}/>
                </Route>

                {/* Customer Page */}

                {/* Not Found */}
                <Route element={<DefaultLayout />}>
                    <Route errorElement={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes
