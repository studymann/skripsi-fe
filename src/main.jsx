import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home.jsx'
import LoginPage from './pages/auth/login.jsx'
import RegisterPage from './pages/auth/register.jsx'
import NotFoundPage from './pages/errors/404.jsx'
import StudentDashboardPage from './pages/user/index.jsx'
import AdminDashboardPage from './pages/admin/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/login",
    element: <LoginPage />
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
