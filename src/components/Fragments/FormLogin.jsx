import InputForm from "../Elements/Input"

const FormLogin = () => {
    return (
        <>
        <div className="py-4">
            <InputForm type="email" name="email" placeholder="Example@mail.com">Email</InputForm>
            <InputForm type="password" name="password" placeholder="****">Password</InputForm>
            <div className="flex items-end">
                <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a>
            </div>
        </div>
        </>
    )
}

export default FormLogin