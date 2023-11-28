import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/auth/login.jsx'
import RegisterPage from './pages/auth/register.jsx'
import NotFoundPage from './pages/errors/404.jsx'
import StudentDashboardPage from './pages/student/index.jsx'
import AdminDashboardPage from './pages/gtk/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/gtk/dashboard",
    element: <AdminDashboardPage />
  },
  {
    path: "/dashboard",
    element: <StudentDashboardPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
