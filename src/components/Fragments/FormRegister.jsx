import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormRegister = () => {
    return (
        <>
        <div className="py-4">
        <div className="grid grid-cols-2 gap-4">
            <InputForm type="text" name="fullname" placeholder="Enter your fullname...">Fullname</InputForm>
            <InputForm type="email" name="email" placeholder="Example@mail.com">Email</InputForm>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <InputForm type="password" name="password" placeholder="****">Password</InputForm>
            <InputForm type="password" name="confPassword" placeholder="****">Confirm Password</InputForm>
        </div>
        </div>
        <div className="space-y-6">
            <Button>Register</Button>
            <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-300">
                Already have account? <Link to="/" className="text-blue-700 hover:underline dark:text-blue-500">Sign in here...</Link>
            </div>
        </div>
        </>
    )
}

export default FormRegister