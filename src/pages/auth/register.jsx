import FormRegister from "../../components/Fragments/auth/FormRegister"
import AuthLayout from "../../components/Layouts/AuthLayout"

const RegisterPage = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
                <AuthLayout id="register" width="max-w-xl" title="Register" subTitle="Welcome, please fill in the fields below...">
                    <FormRegister />
                </AuthLayout>
            </div>
        </>
    )
}

export default RegisterPage