import FormLogin from "../../components/Fragments/FormLogin"
import AuthLayout from "../../components/Layouts/AuthLayout"

const LoginPage = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
                <AuthLayout id="login" width="max-w-sm" title="Login" subTitle="Welcome, please enter your account...">
                    <FormLogin />
                </AuthLayout>
            </div>
        </>
    )
}

export default LoginPage