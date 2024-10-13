import { lazy, Suspense } from "react"
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

{/* Website */ }
const HomePage = lazy(() => import('../pages/home-page/HomePage'))
const TourPage = lazy(() => import('../components/website/tourPage/tourPage'))
const BookingPage = lazy(() => import('../components/website/booking/booking'))
const ServicePage = lazy(() => import('../components/website/servicePage/servicePage'))
const AboutPage = lazy(() => import('../pages/about/AboutPage'))

{/* Not Found */ }
const NotFound = lazy(() => import('../pages/404/NotFound'))
const AppRoutes = () => {
    return (
        <Suspense>
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

                {/* Customer */}

                {/* Home Page */}

                {/* Website */}
                <Route element={<DefaultLayout />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path='/tour-explore' element={<TourPage />} />
                    <Route path='/booking' element={<BookingPage />} />
                    <Route path='/service' element={<ServicePage />} />
                    <Route path='/about-us' element={<AboutPage />} />
                </Route>

                {/* Not Found */}
                <Route element={<DefaultLayout />}>
                    <Route errorElement={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/404" element={<NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default AppRoutes
