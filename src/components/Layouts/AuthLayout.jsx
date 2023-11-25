import { Link } from "react-router-dom"
import Button from "../Elements/Button"

/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
    const { title, subTitle, children, width, id } = props
    return (
        <>
            <div className={`w-full ${width} p-4 bg-white border border-gray-200 rounded-lg drop-shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700`}>
                <form className="" action="#">
                    <div className="mb-6">
                        <h5 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h5>
                        <h5 className="text-md font-medium text-slate-500">{subTitle}</h5>
                    </div>
                    {children}
                    <div className="space-y-6">
                        {id === "login" ? (
                            <>
                                <Button>Login</Button>
                                <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-300">
                                    Not registered? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account...</Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <Button>Register</Button>
                                <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-300">
                                    Already have account? <Link to="/" className="text-blue-700 hover:underline dark:text-blue-500">Sign in here...</Link>
                                </div>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </>
    )
}

export default AuthLayout