import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
    return (
        <>
        <div className="space-y-6">
            <InputForm type="email" name="email" placeholder="Example@mail.com">Email</InputForm>
            <InputForm type="password" name="password" placeholder="****">Password</InputForm>
            <div className="flex items-end">
                <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a>
            </div>
            <Button>Login</Button>
            <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-300">
                Not registered? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account...</Link>
            </div>
        </div>
        </>
    )
}

export default FormLogin