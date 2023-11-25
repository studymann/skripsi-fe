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
        </>
    )
}

export default FormRegister