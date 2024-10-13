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

{/* About Page */ }
const AboutPage = lazy(() => import('../pages/about/AboutPage'))


{ /* Home Page */ }
const HomePage = lazy(() => import('../pages/home-page/HomePage'))

{/* Tour Page */}
const TourPage = lazy(() => import('../components/website/tourPage/tourPage') )
const BookingPage = lazy(() => import('../components/website/booking/booking'))
const ServicePage = lazy(() => import('../components/website/servicePage/servicePage'))

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

                {/* Home Page */}

                <Route path="/home-page" element={<HomePage/>} />

                {/* About Page */}
                <Route path="/aboutpage" element={<AboutPage/>} />

                {/* Website */}
                <Route element={<DefaultLayout />}>
                    <Route path='tour-explore' element={<TourPage/>}/>
                    <Route path='booking' element={<BookingPage/>} />
                    <Route path='service' element={<ServicePage/>}/>
                </Route>

                {/* Not Found */}
                <Route element={<DefaultLayout />}>
                    <Route errorElement={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/404" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes
